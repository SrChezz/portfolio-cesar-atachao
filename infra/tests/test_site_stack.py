import aws_cdk as cdk
from aws_cdk.assertions import Match, Template

from stacks.site_stack import PortfolioSiteStack


def _template() -> Template:
    app = cdk.App()
    stack = PortfolioSiteStack(
        app, "TestStack", env=cdk.Environment(account="123456789012", region="us-east-1")
    )
    return Template.from_stack(stack)


def test_bucket_blocks_all_public_access():
    template = _template()
    template.has_resource_properties(
        "AWS::S3::Bucket",
        {
            "PublicAccessBlockConfiguration": {
                "BlockPublicAcls": True,
                "BlockPublicPolicy": True,
                "IgnorePublicAcls": True,
                "RestrictPublicBuckets": True,
            }
        },
    )


def test_cloudfront_distribution_created_with_https_redirect():
    template = _template()
    template.resource_count_is("AWS::CloudFront::Distribution", 1)
    template.has_resource_properties(
        "AWS::CloudFront::Distribution",
        {
            "DistributionConfig": Match.object_like(
                {
                    "DefaultRootObject": "index.html",
                    "DefaultCacheBehavior": Match.object_like(
                        {"ViewerProtocolPolicy": "redirect-to-https"}
                    ),
                }
            )
        },
    )


def test_origin_access_control_created():
    # OAC (not legacy OAI) should be provisioned.
    template = _template()
    template.resource_count_is("AWS::CloudFront::OriginAccessControl", 1)


def test_bucket_policy_grants_cloudfront_service():
    template = _template()
    template.has_resource_properties(
        "AWS::S3::BucketPolicy",
        {
            "PolicyDocument": Match.object_like(
                {
                    "Statement": Match.array_with(
                        [
                            Match.object_like(
                                {"Principal": {"Service": "cloudfront.amazonaws.com"}}
                            )
                        ]
                    )
                }
            )
        },
    )
