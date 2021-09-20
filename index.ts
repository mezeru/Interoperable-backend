const fastify = require('fastify')({logger:true});
import dbConnect from "./script/connectDB";
import routes from "./routes/requests"

fastify.register(require('fastify-cors'),{
    origin:"*",
});


dbConnect();

fastify.register(routes, {prefix:'/'} );

fastify.listen(process.env.PORT,(err,address) => {
   null
})