const express = require('express'); // recuperaation d'express
const app = express();
const bodyParser= require('body-parser'); // parser le resultat posté
let data = require('./jobs');
let initialsJobs= data.jobs;
let addedJobs = [];

const getAllJobs=() => {
    return [...addedJobs, ...initialsJobs];
} 
app.use(bodyParser.json()); //traitement supplementaire avec use

app.use((req,res,next) => {
    res.header('Access-Control-Allow-Origin','*'); //creation d'un middleware
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});
//et data = require('./jobs'); // récupération de data de jobs.js
console.log('data:',data); // coir les données dans la console du serveur

const api = express.Router(); //creation d'un router qui dispose d'une methode get
api.get('/jobs',(req,res)=>{
   // res.json(data.jobs); 
   // res.json({success:true, message:'hello word'})  afficher un objet statique qui contient deux propriété
   res.json(getAllJobs());
});
  // gestion du post
api.post('/jobs',(req,res)=>{ //callback resquest response
    console.log('*****************');
    const job= req.body; //recuperation du body grace a bodyparser
    console.log(job);
    addedJobs=[job,...addedJobs];
    console.log('total nb of jobs:',getAllJobs().length);
    res.json(job);
});
api.get('/jobs/:id',(res,req)=>{
    const id = parsInt(req.params.id,10);//"1"
    const job = getAllJobs.filter(j=>j.id===id);
    console.log(id,job);
    if(job.length===1){
        res.json({success:true,job:job[0]});
    }else {
        res.json({success: false,message:`pas de job ayant pour id ${id}`});
    }
})

app.use('/api',api); // localhost:4201/api/jobs
const port =4201;  // creation d'une variable port
app.listen(port,() => {
console.log (`listening on port ${port}`); // correspond au message 
 });



 


 
