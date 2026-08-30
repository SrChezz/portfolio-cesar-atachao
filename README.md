# Cesar Atachao — Portfolio Monorepo

Personal portfolio website deployed to AWS S3 + CloudFront, with infrastructure managed by AWS CDK (Python).

## Structure

```
.
├── web/     # React portfolio website (Vite + React)
└── infra/   # AWS CDK (Python) — S3 private bucket + CloudFront (OAC)
```

## Architecture

- **S3 bucket** — private, hosts the built static site (no public access).
- **CloudFront** — CDN + HTTPS in front of S3, using Origin Access Control (OAC).
- **Region** — `us-east-1`.
- **Domain** — none (uses the default CloudFront `*.cloudfront.net` URL).

The bucket is private; only CloudFront can read it via OAC. This is the recommended
pattern over legacy public-bucket static hosting.

## Prerequisites

- Node.js >= 20
- Python >= 3.9
- AWS CDK CLI (`npm i -g aws-cdk` or use the pinned dev dependency in `infra/`)
- AWS credentials configured for the target account

## Quick start

### 1. Build the website

```bash
cd web
npm install
npm run build      # outputs to web/dist
```

### 2. Deploy the infrastructure

```bash
cd infra
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt

# First time only, per account/region:
cdk bootstrap aws://<ACCOUNT_ID>/us-east-1

cdk synth
cdk deploy
```

The stack uploads `web/dist` to the S3 bucket and serves it through CloudFront.
After deploy, the CloudFront URL is printed as a stack output.

## Notes

- CDK deploys assets via `BucketDeployment`, so run `npm run build` in `web/` before `cdk deploy`.
- To update the site: rebuild `web/`, then re-run `cdk deploy` (CloudFront cache is invalidated automatically).
