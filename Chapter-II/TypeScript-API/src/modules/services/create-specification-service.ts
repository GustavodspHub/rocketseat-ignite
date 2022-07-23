import { ISpecificationsRepository } from "../repositories/iSpecification-repository";

interface IRequest {
    name: string;
    description: string;
}

export class CreateSpecificationsService {
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