import { Specification } from '../model/specification';
import {
    ICreateSpecificationDTO,
    ISpecificationsRepository
} from './implementations/iSpecification-repository'

export class SpecificationsRepository implements ISpecificationsRepository {
    private specifications: Specification[]

    constructor(){
        this.specifications = []
    }

    

    create({ name, description }: ICreateSpecificationDTO): void {
        const specification = new Specification();

        Object.assign(specification, {
            name,
            description,
            created_at: new Date(),
        });

        this.specifications.push(specification)
    }

    findByName(name: string): Specification {
        const specification = this.specifications.find((
            specification) => name === specification.name)
        return specification
    }
    
}