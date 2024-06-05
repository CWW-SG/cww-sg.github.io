---
title: Setting HTTPS on Nginx Ingress
---

`cert-manager` has been installed using helm. You need to create an ingress with
one annotation and tls property to enable HTTPS.

Example below shows how argocd-ingress is configured to use HTTPS. You can refer
to the
[official documentation](https://cert-manager.io/docs/tutorials/acme/nginx-ingress/)
for more details.

```yaml ins={6-7} ins={10-13}
// argocd-ingress.yaml
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: argocd-ingress
  annotations:
    cert-manager.io/issuer: 'letsencrypt-production'
spec:
  ingressClassName: nginx
  tls:
    - hosts:
        - argocd.okkarmin.com
      secretName: argocd.okkarmin.com
  rules:
    - host: argocd.okkarmin.com
      http:
        paths:
          - path: /
            pathType: Prefix
            backend:
              service:
                name: argocd-server
                port:
                  name: https
```
