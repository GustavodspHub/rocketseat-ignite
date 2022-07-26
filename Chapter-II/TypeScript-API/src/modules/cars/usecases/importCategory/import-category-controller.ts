import { Request, Response } from "express";
import { ImportCategoryUseCase } from "./import-category-use-case";

export class ImportCategoryController {
    constructor(private readonly importCategoryUseCase: ImportCategoryUseCase){}
    handle(request: Request, response: Response): Response {
        const {file} = request;

        this.importCategoryUseCase.execute(file)

        return response.send();
    }
}