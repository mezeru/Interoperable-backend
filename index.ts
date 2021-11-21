const fastify = require('fastify')({logger:true});
import dbConnect from "./script/connectDB";
import routes from "./routes/requests"

fastify.register(require('fastify-cors'),{
    origin:"*",
});


dbConnect();

fastify.register(routes, {prefix:'/'} );
const port = process.env.PORT || 5000
fastify.listen(port, '0.0.0.0', async function (error, address) {
    if (error) {
      fastify.log.error(error)
      process.exit(1)
    }
    fastify.log.info(`server listening on ${address}`)
  })