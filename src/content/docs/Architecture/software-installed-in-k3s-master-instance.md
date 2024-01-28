---
title: List of software installed in K3s master instance
---

This page list the software installed in the K3s master instance.

## container-selinux

Required to run containers in the instance.

Installed using the below command

```bash
sudo yum install -y container-selinux
```

## k3s-selinux

Required to run k3s in the instance.

Installed using the below command

```bash
wget https://github.com/k3s-io/k3s-selinux/releases/download/v1.2.stable.2/k3s-selinux-1.2-2.el8.noarch.rpm
yum install -y ./k3s-selinux-1.2-2.el8.noarch.rpm
```

## K3s

To use the instance as kubernetes cluster

Installed using the below command

```bash
curl -sfL https://get.k3s.io | sh -s - --disable traefik --tls-san INTERNAL_IP --tls-san INTERNAL_DNS
```

## K9s

To manage kubernetes cluster

Installed using the below command

```bash
wget https://github.com/derailed/k9s/releases/download/v0.31.7/k9s_linux_amd64.rpm
yum install -y ./k9s_linux_amd64.rpm
```

## Helm

To install applications in the cluster using helm charts

Installed using the below command

```bash
wget https://get.helm.sh/helm-v3.6.3-linux-amd64.tar.gz | bash
```

### Software installed using helm

#### Nginx Ingress Controller

To expose applications in the cluster

Installed following
[this guide](https://kubernetes.github.io/ingress-nginx/deploy/#using-helm)

#### Cert Manager

To manage certificates in the cluster. For applications exposed using nginx
ingress.

Installed following
[this guide](https://cert-manager.io/docs/installation/helm/)

#### ArgoCD

To manage applications in the cluster

Installed following [this guide](https://argoproj.github.io/argo-helm/) and
using the below commands

```bash
kubectl create namespace argocd
helm repo add argo https://argoproj.github.io/argo-helm
helm repo update
helm install argocd argo/argo-cd --namespace argocd
```
