import { obtenerSuperheroePorId, obtenerTodosLosSuperheroes, buscarSuperheroesPorAtributo, obtenerSuperheroesMayoresDe30} from '../services/superheroesService.mjs'
import {renderizarListaSuperheroes, renderizarSuperheroe} from '../view/responseView.mjs';

export async function obtenerSuperheroePorIdController(req, res){
    try{
        const { id } = req.params;
        const superheroe = await obtenerSuperheroePorId(id);
        if(!superheroe){
            return res.status(404).send({mensaje:"superheroe no encontrado"});
        }

        const superheroeFormateado = renderizarSuperheroe(superheroe);
        res.status(200).json(superheroeFormateado);
    }catch(error){
        res.status(500).send({mensaje: "Error al obtener superheroe", error: error.message});
    }
}

export async function obtenerTodosLosSuperheroesCotroller(req, res) {
    try{
        const superheroes = await obtenerTodosLosSuperheroes();
        const superheroesFormateados = renderizarListaSuperheroes(superheroes);
        res.status(200).json(superheroesFormateados);
    }catch(error){
        res.status(500).send({mensaje:'error al obtener los superheroes', error: error.message});
    }
}

export async function buscarSuperheroesPorAtributoController(req, res){
    try{
        const {atributo, valor} = req.params;
        const superheroes = await buscarSuperheroesPorAtributo(atributo, valor);
        if (superheroes.length === 0){
            res.status(404).send({mensaje:'no se encontraron superheroes con ese atributo'})
        }
    
        const superheroesFormateados = renderizarListaSuperheroes(superheroes);
        res.status(200).json(superheroesFormateados);
        
    }catch(error){
        res.status(500).send({mensaje:'error al buscar los superheroes', error: error.message});
    }
}

export async function obtenerSuperheroesMayoresDe30Controller(req, res) {
    try{
        const superheroes = await obtenerSuperheroesMayoresDe30();
        if(superheroes.length === 0){
            res.status(404).send({mensaje: 'no se encontraron superheroes mayores de 30'});
        }

        const superheroesFormateados = renderizarListaSuperheroes(superheroes);
        res.status(200).json(superheroesFormateados);

    }catch(error){
        res.status(500).send({mensaje:'Error al obtener superheroes mayores de 30', error: error.message});
    }
    
}