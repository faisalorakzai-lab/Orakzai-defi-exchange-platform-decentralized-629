# Orakzai DeFi Exchange Platform

A small, transparent Express API starter for exploring the service boundary of a future decentralized exchange. The current release focuses on a runnable HTTP shell and makes its limitations explicit.

> **Security warning:** This project is not audited and must not be used with real funds, private keys, seed phrases, or production credentials. Wallet custody, token swaps, liquidity pools, and on-chain settlement are not implemented.

## Current status

Implemented in v1.1.0:

- Express JSON API
- `GET /` service metadata
- `GET /health` operational health check
- `GET /api/v1/info` implementation status and security warning
- Offline Node.js tests

Planned, but not implemented:

- wallet connection and signing
- token and chain configuration
- swap quoting and slippage rules
- liquidity-pool accounting
- transaction submission and confirmation
- authentication, authorization, and rate limiting

## Requirements

- Node.js 18 or newer
- npm

## Run locally

```bash
npm install
npm test
npm start
```

The server listens on `http://localhost:3000` by default. Set `PORT` to use another port:

```bash
PORT=8080 npm start
```

## API smoke test

```bash
curl http://localhost:3000/
curl http://localhost:3000/health
curl http://localhost:3000/api/v1/info
```

Example health response:

```json
{
  "status": "ok",
  "service": "Orakzai-defi-exchange-platform-decentralized-629",
  "version": "1.1.0",
  "timestamp": "2026-10-29T00:00:00.000Z"
}
```

## Project layout

```text
src/config.js       Shared service metadata
src/index.js        Express app and route definitions
test/app.test.js    Offline endpoint tests
.env.example        Local environment example
SECURITY.md         Security scope and reporting guidance
CONTRIBUTING.md     Local setup and contribution rules
```

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md). Please keep changes small, add tests, and do not include secrets or unsupported claims. Before proposing real DeFi behavior, document the threat model and obtain an independent security review.

## License

No license has been selected yet. Until a license is added, assume that reuse is not permitted beyond GitHub's default viewing and forking behavior.
