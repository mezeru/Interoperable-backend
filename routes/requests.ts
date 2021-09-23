import patientDB from "../schema/demographics";

export default async (fastify,options) => {

    // fastify.get('/patient/search', async (request,reply) => {

    //     try{

    //         const resp = await patientDB.findOne(request.query);
            
    //         if(resp){
    //             reply.code(200).send(resp);
    //         }

    //         reply.code(204).send("Not Found");

    //     }
    //     catch(e){
    //         reply.code(500).send(e);
    //     }

    // });

    fastify.delete('/delete', async (request,reply) => {

        try{
            console.log(request.query)
            const resp = await patientDB.deleteOne(request.query);
            
            if(resp){
                reply.code(200).send("OK");
            }

            reply.code(404).send("Not Found");

        }
        catch(e){
            reply.code(500).send(e);
        }

    });
    

    fastify.post('/new', async (request,reply) => {

        const patient = new patientDB({
            Name: request.body.Name,
            AdhaarNo : request.body.AdhaarNo,
            PhoneNo : request.body.PhoneNo,
            PlaceofLiving : request.body.PlaceofLiving,
            Gender : request.body.Gender,
            ehrId : request.body.ehrId
        });

        try{
            const resp = await patient.save();
            reply.code(200).header('Content-Type', 'application/json; charset=utf-8').send({ "Patient": resp })
        }
        catch(e){
            
            reply.code(400).header('Content-Type', 'application/json; charset=utf-8').send({ "Sad": `${e}` });

        }        

    });

}