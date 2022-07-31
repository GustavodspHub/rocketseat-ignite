import { Router } from 'express';
import { CategoriesRepository } from '../modules/cars/repositories/categories-repository';;
import { createCategoryController } from '../modules/cars/usecases/create-category';
import { listCategoriesController } from '../modules/cars/usecases/list-categories';
import multer from 'multer';

const upload = multer();
const categoriesRoutes = Router();


categoriesRoutes.post("/", (request, response) => {
    return createCategoryController.handle(response, request);
});

categoriesRoutes.get("/", (request, response) => {

    return listCategoriesController.handle(request, response)
});

categoriesRoutes.post("/import", upload.single('file'), (request, response) => {
    const {file} = request
    console.log(file)
    response.send()
});

export { categoriesRoutes }