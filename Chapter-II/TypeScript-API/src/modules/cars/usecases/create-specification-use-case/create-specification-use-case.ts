import { ISpecificationsRepository } from "../../repositories/implementations/iSpecification-repository";

interface IRequest {
    name: string;
    description: string;
}

export class CreateSpecificationsUseCase {
    constructor(private specificationsRepository: ISpecificationsRepository){}
    execute({name, description}: IRequest): void {

        const specificationAlreadyExists = this.specificationsRepository.findByName(name)

        if(specificationAlreadyExists) throw new Error('Ops... Está especificação já existe')
        this.specificationsRepository.create({
            name, 
            description,
        })
    }
}