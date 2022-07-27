import { Specification } from "../../model/specification";

export interface ICreateSpecificationDTO {
    name: string;
    description: string;
}

export interface ISpecificationsRepository {
    create({name, description}: ICreateSpecificationDTO): void;

    findByName(name: string): Specification;
}