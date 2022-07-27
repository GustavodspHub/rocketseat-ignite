import { Request, Response } from "express";
import { CreateSpecificationsUseCase } from './create-specification-use-case';

export class CreateSpecificationController {
    constructor(private readonly createSpecificationUseCase: CreateSpecificationsUseCase){}
    handle(request: Request, response: Response){
        const {name, description} = request.body

        this.createSpecificationUseCase.execute({name, description})

        return response.status(201).send()
    }
}