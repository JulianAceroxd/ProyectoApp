const express=require('express');
const Controller = require('../Controlador/Controller');
const Rutas=express.Router();

//EN LOS CONST UTILIZAMOS Y LLAMAMOS LAS LIBRERIAS NECESARIAS
//RUTAS ESPECTADOR.
Rutas.get('/urnaEspec',Controller.urnaEspec);
Rutas.get('/NotiEspec',Controller.NotiEspec);
Rutas.get('/partidoespec/:id',Controller.PartidoEspec);
Rutas.get('/ForosEspec',Controller.ForosEspec);
Rutas.post('/comentariosForo',Controller.comentariosForo);
Rutas.get('/DeForosEspec/:id',Controller.DetForoEspec);
Rutas.post('/subforo',Controller.SubForoEspec);
Rutas.post('/ValidarVotos',Controller.ValidarVotos);

///

///RUTAS DEL USUARIO.
Rutas.get('/Usuario',Controller.Usuario);
Rutas.get('/urnaUsu',Controller.urnaUsu);
Rutas.get('/NotiUsu',Controller.NotiUsu);
Rutas.get('/DatosUsu',Controller.DatosUsu);
Rutas.post('/comentarios',Controller.comentarios);
Rutas.post('/likes',Controller.likes);
Rutas.post('/AgrComentarios',Controller.Comentario);
Rutas.get('/partido/:id',Controller.PartidoUsu);
Rutas.get('/ForosUsu',Controller.ForosUsu);
Rutas.get('/DeForosUsu/:id',Controller.DetForoUsu);
Rutas.post('/AgrComentariosForo',Controller.ComentarioForo);
Rutas.post('/AgrComentariosSub',Controller.ComentarioSub);








Rutas.get('/',Controller.index); 
Rutas.get('/Registro',Controller.Registro);
Rutas.get('/administrador',Controller.Admin);

Rutas.get('/urna',Controller.consultageneral);
Rutas.post('/urnadatos',Controller.consultageneralurna);
Rutas.post('/Votos',Controller.votos);


Rutas.post('/agrint',Controller.agrint);

Rutas.post('/agrpar',Controller.agrpar);
Rutas.post('/agrnot',Controller.agrnot);
Rutas.post('/agrfor',Controller.agrfor);

Rutas.post('/agru',Controller.agru);
Rutas.get('/AgreInt',Controller.agregarint);
Rutas.get('/opurna',Controller.op);
Rutas.post('/agrop',Controller.agrop);
Rutas.post('/candi',Controller.candi);


Rutas.get('/partidos',Controller.partidos);

Rutas.get('/urnaadmin',Controller.urnaadmin);
Rutas.get('/crearpartido',Controller.crearpartido);
Rutas.get('/crearnoticia',Controller.crearnoticia);
Rutas.get('/crearforo',Controller.crearforo);

Rutas.get('/cerrar',Controller.cerrar);
Rutas.get('/login',Controller.Iniciar);
Rutas.get('/partidos',Controller.Partidos);
Rutas.get('/noticias',Controller.Noticias);

Rutas.get('/crearparti',Controller.CrePartidos); 
Rutas.get('/crearUrna',Controller.CreUrnas);  //HACEMOS LLAMADO DE EL CONTROLADOR INDEX QUE ES NUESTR ARCHIVO O RAIZ PRINCIPAL
Rutas.post('/Insertar',Controller.insertaru);
Rutas.post('/Insertarparti',Controller.insertarpartido);
//Rutas.post('/Insertarforo',Controller.insertarforo);
Rutas.post('/Logine',Controller.Logine);
Rutas.get('/DatosP',Controller.DatosP); // POR MEDIO DE EL ACTION QUE TENEMOS EN EL LOGIN, SE LLEVA ESA INFORMACION A NUESTRO CONTROLER Y GENERA LA RUTA


module.exports=Rutas;