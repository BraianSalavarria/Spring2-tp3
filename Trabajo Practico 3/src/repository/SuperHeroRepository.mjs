import SuperHero from '../models/SuperHero.mjs'
import  IRepository from './IRepository.mjs'

 class SuperHeroRepository extends IRepository{

    async obtenerPorId(id){
        return await SuperHero.findById(id);
    }

    async obtenerTodos(){
        return await SuperHero.find({});
    }

    async buscarPorAtributo(atributo, valor){
        const result = await SuperHero.find({ [atributo]: valor});
        return result;
    }

    async obtenerMayoresDe30(){
        const result = await SuperHero.find({edad: {$gt: 30}});
        return result;
    }
}

export default new SuperHeroRepository();