# Data Console 

    See parent readme
    
    
## Apcahe HTTP Proxy pass.

RewriteCond %{HTTP:Upgrade} =websocket [NC]
RewriteRule /(.*)           ws://127.0.0.1:8090/$1 [P,L]
