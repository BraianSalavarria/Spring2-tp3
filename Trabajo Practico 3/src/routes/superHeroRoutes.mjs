import express from 'express';
 import {obtenerSuperheroePorIdController, obtenerTodosLosSuperheroesCotroller,  buscarSuperheroesPorAtributoController, 
    obtenerSuperheroesMayoresDe30Controller
 } from '../controllers/superheroesController.mjs'

 const router = express.Router();
 router.get('/heroes/mayores-30', obtenerSuperheroesMayoresDe30Controller);
 router.get('/heroes',obtenerTodosLosSuperheroesCotroller);
 router.get('/heroes/:id', obtenerSuperheroePorIdController);
 router.get('/heroes/buscar/:atributo/:valor',buscarSuperheroesPorAtributoController);
 

 export default router;
