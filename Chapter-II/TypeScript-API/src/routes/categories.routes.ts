import { Router } from 'express';
import { CategoriesRepository } from '../repositories/categories-repository';
import { CreateCategoryService } from '../services/createCategoryService';
const categoriesRepository = new CategoriesRepository()
const categoriesRoutes = Router();


categoriesRoutes.post("/", (request, response) => {
    const {name, description} = request.body;
    
    const createCategoryService = new CreateCategoryService(categoriesRepository)

    createCategoryService.execute({name, description})

    return response.status(201).send();
})

categoriesRoutes.get("/", (request, response) => {
    const listAll = categoriesRepository.list()

    return response.json(listAll)
})

export { categoriesRoutes }