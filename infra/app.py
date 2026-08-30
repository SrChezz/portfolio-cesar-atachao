#!/usr/bin/env python3
import os

import aws_cdk as cdk

from stacks.site_stack import PortfolioSiteStack

app = cdk.App()

# CloudFront + ACM (for future custom domains) require us-east-1.
# The site currently uses the default *.cloudfront.net URL, so we pin the
# stack to us-east-1 for simplicity and consistency.
PortfolioSiteStack(
    app,
    "PortfolioSiteStack",
    env=cdk.Environment(
        account=os.getenv("CDK_DEFAULT_ACCOUNT"),
        region="us-east-1",
    ),
    description="Cesar Atachao portfolio: private S3 bucket + CloudFront (OAC).",
)

app.synth()
