import { Request, Response } from "express";
import { CreateCategoryUseCase } from "./create-category-use-case";

export class CreateCategoryController {
    constructor(private createCategoryUseCase: CreateCategoryUseCase){}

    handle(response: Response, request: Request ): Response {
        const {name, description} = request.body;

        this.createCategoryUseCase.execute({name, description})

        return response.status(201).send()
    }
}