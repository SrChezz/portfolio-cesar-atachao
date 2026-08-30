import os

from aws_cdk import (
    CfnOutput,
    Duration,
    RemovalPolicy,
    Stack,
)
from aws_cdk import aws_cloudfront as cloudfront
from aws_cdk import aws_cloudfront_origins as origins
from aws_cdk import aws_s3 as s3
from aws_cdk import aws_s3_deployment as s3deploy
from constructs import Construct

# Path to the built website (web/dist), relative to this file.
_WEB_DIST = os.path.join(os.path.dirname(__file__), "..", "..", "web", "dist")


class PortfolioSiteStack(Stack):
    """Static site hosting: private S3 bucket fronted by CloudFront using
    Origin Access Control (OAC). The bucket blocks all public access; only
    CloudFront can read objects. No custom domain — uses the default
    *.cloudfront.net URL.
    """

    def __init__(self, scope: Construct, id: str, **kwargs) -> None:
        super().__init__(scope, id, **kwargs)

        # Private bucket — never publicly accessible.
        site_bucket = s3.Bucket(
            self,
            "SiteBucket",
            block_public_access=s3.BlockPublicAccess.BLOCK_ALL,
            encryption=s3.BucketEncryption.S3_MANAGED,
            enforce_ssl=True,
            # Portfolio content is disposable and rebuilt from source, so the
            # bucket is destroyed (and emptied) on stack deletion.
            removal_policy=RemovalPolicy.DESTROY,
            auto_delete_objects=True,
        )

        # CloudFront distribution with OAC-backed S3 origin. The OAC wiring and
        # the bucket policy granting CloudFront read access are handled
        # automatically by S3BucketOrigin.with_origin_access_control.
        distribution = cloudfront.Distribution(
            self,
            "SiteDistribution",
            default_root_object="index.html",
            default_behavior=cloudfront.BehaviorOptions(
                origin=origins.S3BucketOrigin.with_origin_access_control(site_bucket),
                viewer_protocol_policy=cloudfront.ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
                cache_policy=cloudfront.CachePolicy.CACHING_OPTIMIZED,
            ),
            # SPA-friendly: serve index.html for client-side routes / 404s.
            error_responses=[
                cloudfront.ErrorResponse(
                    http_status=403,
                    response_http_status=200,
                    response_page_path="/index.html",
                    ttl=Duration.minutes(5),
                ),
                cloudfront.ErrorResponse(
                    http_status=404,
                    response_http_status=200,
                    response_page_path="/index.html",
                    ttl=Duration.minutes(5),
                ),
            ],
            comment="Cesar Atachao portfolio",
        )

        # Upload the built site to the bucket and invalidate the CDN cache on
        # each deploy.
        s3deploy.BucketDeployment(
            self,
            "DeploySite",
            sources=[s3deploy.Source.asset(_WEB_DIST)],
            destination_bucket=site_bucket,
            distribution=distribution,
            distribution_paths=["/*"],
        )

        CfnOutput(
            self,
            "DistributionDomainName",
            value=f"https://{distribution.distribution_domain_name}",
            description="Public URL of the portfolio site.",
        )
        CfnOutput(
            self,
            "BucketName",
            value=site_bucket.bucket_name,
            description="Private S3 bucket hosting the site assets.",
        )
