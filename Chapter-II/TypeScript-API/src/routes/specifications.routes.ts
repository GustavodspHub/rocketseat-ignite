import { response, Router } from 'express';
import { createSpecificationController } from '../modules/cars/usecases/create-specification-use-case';

export const specificationsRoutes = Router();

specificationsRoutes.post("/specifications", (request, response) => {
    return createSpecificationController.handle(request, response);
})


