import { CategoriesRepository } from "../../repositories/categories-repository";

interface IRequest {
    name: string;
    description: string;
}

export class CreateCategoryUseCase {
    constructor(private readonly categoriesRepository: CategoriesRepository){}
        execute({name, description}: IRequest): void{

            const nameAlreadyExists = this.categoriesRepository.findByName(name)
    
            if(nameAlreadyExists) throw new Error('Category already exists')

            this.categoriesRepository.create({name, description})
    }
}