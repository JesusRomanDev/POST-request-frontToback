import express from 'express';
import dotenv from 'dotenv'
import cors from 'cors'

const app = express();
dotenv.config();
app.use(express.json());

const dominiosPermitios = [process.env.FRONTEND_URL]

const corsOptions = {
    origin: function(origin, callback){
        if(!origin){
            return callback(null,true)
        }

        if(dominiosPermitios.indexOf(origin) !== -1){
            //El Origen del Request esta permitido
            callback(null, true)
        }else{
            callback(new Error('No permitido por CORS'))
        }
    }
}

app.use(cors(corsOptions))


app.post('/', (req, res) =>{
    console.log('Hola desde el backend');
    console.log(req.body);
    res.json('Hola we')
})

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Escuchando desde el puerto ${PORT}`);
});