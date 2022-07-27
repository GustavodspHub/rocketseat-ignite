import { Category } from "../../model/category";
import { ICategoriesRepository } from "../../repositories/implementations/ICategoriesRepository";

export class ListCategoriesUseCase {
    constructor(private listCategories: ICategoriesRepository){}
    execute(): Category[] {
        const categories = this.listCategories.list()

        return categories
    }
}