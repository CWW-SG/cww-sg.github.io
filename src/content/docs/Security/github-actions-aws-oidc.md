---
title: GitHub Actions OIDC with AWS
description: Assuming AWS account roles from GitHub actions
---

GitHub Actions builds and pushes container images to ECR. For this, it assumes a
role in the CWW AWS account with the necessary permissions to interact with ECR.

We configured OIDC by following
[this guide.](https://docs.github.com/en/actions/deployment/security-hardening-your-deployments/configuring-openid-connect-in-amazon-web-services#overview)

The AWS role GitHub Actions assumes has this permission policy:

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "ecr:CompleteLayerUpload",
        "ecr:UploadLayerPart",
        "ecr:InitiateLayerUpload",
        "ecr:BatchCheckLayerAvailability",
        "ecr:PutImage"
      ],
      "Resource": "arn:aws:ecr:{ region }:{ 111122223333 }:{ repository }/{ repository-name }"
    },
    {
      "Effect": "Allow",
      "Action": "ecr:GetAuthorizationToken",
      "Resource": "*"
    }
  ]
}
```

:::note

Replace `{ }` with actual value(s)

:::

:::tip

This permission policy is based on the guidelines found
[here](https://docs.aws.amazon.com/AmazonECR/latest/userguide/image-push.html)

:::
