const mongoose = require("mongoose");

const demo = new mongoose.Schema({

    Name:{
        type: String,
        required:true
    },

    AdhaarNo:{
        type: Number,
        required:true,
        unique:true
    },
    PhoneNo:{
        type: Number,
        required:true,
        unique:true
    },
    Gender:{
        type: String,
        required:true
    },

    PlaceofLiving:{
        type: String,
        required:true
    },

});

export default mongoose.model('Patients',demo);