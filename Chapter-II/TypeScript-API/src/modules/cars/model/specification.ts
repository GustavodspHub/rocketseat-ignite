import { v4 as uuidV4 } from "uuid";

export class Specification {
    specificationId?: string;
    name: string;
    description: string;
    createdAt: Date;

    constructor() {
        if (!this.specificationId){
            this.specificationId = uuidV4()
        }
    }
}