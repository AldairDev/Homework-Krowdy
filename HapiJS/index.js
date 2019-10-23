const hapi = require('@hapi/hapi');
const laabr = require('laabr');

const app = hapi.server({
    host : 'localhost',
    port: 3000 });

const curso = [
  {
  nombre : 'física',
  grado : '5º secu',
  }

];

app.route([
    {
      method: 'GET',
      path: '/',
      handler: (req , h) => {
        return h.response('hello world');
    }},

    {
      method: 'GET',
      path: '/cursos',
      handler: (req,h) => {
      //  return h.response(JSON.stringify(curso));
      return h.response(curso)
    }},

    {
      method: 'POST',
      path: '/user',
      handler: (req, h) => {

        let item = req.payload;
        curso.push(item);
        // console.log(item);
        return h.response(item);

        //   const user = {
        //     name : req.params.payload,
        //     lastName : req.params.payload
        //   };
        //  return  h.response({datos:user}).type('application/json');
        }
    },
    {
      method : 'DELETE',
      path : '/curso/{id}',
      handler: (req, h) =>{
        const identificador = req.params.id;

        curso.splice(identificador, 1);
        return h.response(curso);
      }
    }
    

]);

 
const iniciarServer = async () => {
  try {
    await app.start();
    console.log('Server started successfully');

    
    await app.register({
      plugin: laabr //Plugin para observar las peticiones que se realizan al servidor.
    });
    
  } catch (err) {
    console.error(err);
  }
};

iniciarServer();
