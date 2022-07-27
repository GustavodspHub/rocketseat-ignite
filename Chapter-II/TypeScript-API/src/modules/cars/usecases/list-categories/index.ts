import { ListCategoriesController } from './list-categories-controller';
import {ListCategoriesUseCase} from './list-categories-use-case'
import { CategoriesRepository } from "../../repositories/categories-repository";

const categoriesRepository = CategoriesRepository.getInstace()

const listCategoriesUseCase = new ListCategoriesUseCase(categoriesRepository);

export const listCategoriesController  = new ListCategoriesController(listCategoriesUseCase);