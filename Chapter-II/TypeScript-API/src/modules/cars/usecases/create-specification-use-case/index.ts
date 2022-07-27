import { SpecificationsRepository } from "../../repositories/specifications-repository";
import { CreateSpecificationController } from "./create-specification-controller";
import { CreateSpecificationsUseCase } from "./create-specification-use-case";

const specificationsRepository = new SpecificationsRepository()

const createSpecificationsUseCase = new CreateSpecificationsUseCase(specificationsRepository);

export const createSpecificationController  = new CreateSpecificationController(createSpecificationsUseCase);