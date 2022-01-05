# Demo

https://cf-deploy.lit-protocol.workers.dev/?url=https://github.com/LIT-Protocol/lit-cloudflare-frontend

# Instruction

This repo consists of two apps:

1. Front-end -> `app` and
2. Backend -> `worker`

To start development locally, you will need to setup your `./worker/wrangler.toml` which you will need to run following commands to create a
key/value (KV) database on CloudFlare for both development and productions. Please look at `./worker/wrangler.toml.example` as an example.

```
# This is to be placed before the `[env.development]` variable
wrangler kv:namespace create "AUTH_STORE"

# This is to be place AFTER the `[env.development]`
wrangler kv:namespace create "AUTH_STORE" --preview
```

For the `[vars]`, you will need to go to your GitHub account's developer oAuth application, and find the `CLIENT_ID` and `CLIENT_SECRET`.

For the callback section, place your your.worker.com`/callback`.

When running the it locally, you are previewing the react app from the worker `wrangler dev --env development` instead of `yarn start` in the app folder.
