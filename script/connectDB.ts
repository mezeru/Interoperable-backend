require('dotenv').config();

const mongoose = require('mongoose');

const connect = () =>{

    mongoose.connect(process.env.MONGODB, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
      });
    
    const database = mongoose.connection;

    database.on("error",(err) =>{
        console.log(err);
    });

    database.on("open",()=>{
        console.log("Connected to Database");
    });

}

export default connect;