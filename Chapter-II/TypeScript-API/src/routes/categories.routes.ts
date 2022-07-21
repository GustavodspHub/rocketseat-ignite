import { Router } from 'express';
import { CategoriesRepository } from '../repositories/categories-repository';
const categoriesRepository = new CategoriesRepository()
const categoriesRoutes = Router();


categoriesRoutes.post("/", (request, response) => {
    const {name, description} = request.body;
    const nameAlreadyExists = categoriesRepository.findByName(name)
    
    if(nameAlreadyExists) {
        return response.status(400).json({error: "Essa categoria já existe"})
    }
    categoriesRepository.create({name, description})

    return response.status(201).send();
})

categoriesRoutes.get("/", (request, response) => {
    const listAll = categoriesRepository.list()

    return response.json(listAll)
})

export { categoriesRoutes }