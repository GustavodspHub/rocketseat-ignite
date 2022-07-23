import { response, Router } from 'express';
import { CreateSpecificationsService } from '../modules/services/create-specification-service';
import {SpecificationsRepository} from '../modules/repositories/specifications-repository'

export const specificationsRoutes = Router();
const specificationsRepository = new SpecificationsRepository();

specificationsRoutes.post("/specifications", (request, response) => {
    const {name, description} = request.body

    const createSpecificationService = new CreateSpecificationsService(specificationsRepository)

    createSpecificationService.execute({name, description})

    return response.status(201).send()
})


