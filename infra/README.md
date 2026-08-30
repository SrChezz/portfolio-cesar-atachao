# Infrastructure (AWS CDK — Python)

Provisions the hosting for the portfolio site:

- **S3 bucket** — private (`BLOCK_ALL` public access), S3-managed encryption, SSL enforced.
- **CloudFront** — distribution with Origin Access Control (OAC) reading from the private bucket.
- **BucketDeployment** — uploads `../web/dist` and invalidates the CloudFront cache on deploy.

Region is pinned to **us-east-1**. No custom domain — the site is served from the
default `*.cloudfront.net` URL, printed as the `DistributionDomainName` stack output.

## Setup

```bash
python -m venv .venv
source .venv/bin/activate           # Windows: .venv\Scripts\activate
pip install -r requirements.txt
pip install -r requirements-dev.txt # for tests
```

## Build the site first

The stack deploys `../web/dist`, so build the website before deploying:

```bash
cd ../web && npm install && npm run build && cd ../infra
```

## Commands

```bash
cdk synth                                  # synthesize CloudFormation
cdk diff                                   # preview changes
cdk bootstrap aws://<ACCOUNT_ID>/us-east-1 # first time per account/region
cdk deploy                                 # deploy
cdk destroy                                # tear down
pytest                                     # run stack assertion tests
```
