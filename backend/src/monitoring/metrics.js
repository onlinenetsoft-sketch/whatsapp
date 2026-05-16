const prometheus = require('prom-client');

const collectDefaultMetrics =
  prometheus.collectDefaultMetrics;

collectDefaultMetrics();

const httpRequestCounter = new prometheus.Counter({
  name: 'http_requests_total',
  help: 'Total number of HTTP requests',
  labelNames: ['method', 'route', 'status'],
});

const activeUsersGauge = new prometheus.Gauge({
  name: 'active_users_total',
  help: 'Total active users',
});

const messageCounter = new prometheus.Counter({
  name: 'messages_sent_total',
  help: 'Total messages sent',
});

const registerMetricsRoute = async (req, res) => {
  res.set('Content-Type', prometheus.register.contentType);

  res.end(await prometheus.register.metrics());
};

module.exports = {
  httpRequestCounter,
  activeUsersGauge,
  messageCounter,
  registerMetricsRoute,
};