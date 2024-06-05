---
title: Fix Out Of Sync Ingress Error
---

You will get `out-of-sync` error in ArgoCD when a new application is create for
an environment. This will disable https on the website. You can fix this by
syncing the errornous Ingress with `force` and `replace` selected. ArgoCD
simultaneously creating application resources caused this error.

![ingress-out-of-sync](../../../../public/ingress-out-of-sync/01-ingress-out-of-sync.png)

![click-sync](../../../../public/ingress-out-of-sync/02-click-sync.png)

![select](../../../../public/ingress-out-of-sync/03-select.png)
