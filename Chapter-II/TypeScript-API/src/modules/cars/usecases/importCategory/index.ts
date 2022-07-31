import { CategoriesRepository } from "../../repositories/categories-repository"
import { ImportCategoryController } from "./import-category-controller"
import { ImportCategoryUseCase } from "./import-category-use-case"


const categoriesRepository = CategoriesRepository.getInstace();
const importCategoryUseCase = new ImportCategoryUseCase(categoriesRepository);

export const importCategoryController = new ImportCategoryController(importCategoryUseCase);
