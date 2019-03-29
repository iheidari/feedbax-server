const port = process.env.port || 4000;
const fastify = require('fastify')({
  logger: true
});

const routes = require('../routes/fastify');
routes.forEach(route => {
  fastify.route(route);
});

// Import Swagger Options
//const swagger = require('./config/swagger');
// Register Swagger
//fastify.register(require('fastify-swagger'), swagger.options);

const start = async () => {
  try {
    await fastify.listen(port);
    //fastify.swagger();
    fastify.log.info(`server listening on ${fastify.server.address().port}`);
  } catch (error) {
    fastify.log.error(error);
    process.exit(1);
  }
};

start();
