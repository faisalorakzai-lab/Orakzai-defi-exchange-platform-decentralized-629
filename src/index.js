const express = require('express');
const { PROJECT, VERSION } = require('./config');

function createApp() {
  const app = express();
  app.disable('x-powered-by');
  app.use(express.json({ limit: '100kb' }));

  app.get('/', (_req, res) => {
    res.json({
      service: PROJECT,
      status: 'online',
      version: VERSION,
      message: 'DeFi exchange API starter',
      docs: '/api/v1/info',
      health: '/health',
    });
  });

  app.get('/health', (_req, res) => {
    res.json({
      status: 'ok',
      service: PROJECT,
      version: VERSION,
      timestamp: new Date().toISOString(),
    });
  });

  app.get('/api/v1/info', (_req, res) => {
    res.json({
      name: PROJECT,
      version: VERSION,
      stage: 'starter',
      implemented: ['HTTP API shell', 'health check', 'service metadata'],
      notImplemented: ['wallet custody', 'token swaps', 'liquidity pools', 'on-chain settlement'],
      warning: 'This repository is not audited and must not be used with real funds.',
    });
  });

  return app;
}

if (require.main === module) {
  const port = Number.parseInt(process.env.PORT || '3000', 10);
  const app = createApp();
  app.listen(port, () => {
    console.log(`${PROJECT} listening on port ${port}`);
  });
}

module.exports = { createApp };
