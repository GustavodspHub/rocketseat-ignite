import { CreateCategoryController } from "./create-category-controller";
import { CreateCategoryUseCase } from "./create-category-use-case";
import { CategoriesRepository } from "../../repositories/categories-repository";

const categoryRepository = CategoriesRepository.getInstace()

const createCategoryUseCase = new CreateCategoryUseCase(categoryRepository);

export const createCategoryController = new CreateCategoryController(createCategoryUseCase);