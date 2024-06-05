---
title: Configure Teleport MFA
---

- login to ec2
- edit nginx-tcp-service.yaml
- kubectl apply -f nginx-tcp-service.yaml
- go to k9s > service > ingress-nginx/ingress-nginx-controller
- add new port section

  - no need to fill up nodePort value
  - give random target port and port
  - protocol TCP

- ec2 connect teleport
- sudo su -
- vim /etc/teleport/yaml
- add service
- systemctl restart teleport

[Link](https://kubernetes.github.io/ingress-nginx/user-guide/exposing-tcp-udp-services/)
