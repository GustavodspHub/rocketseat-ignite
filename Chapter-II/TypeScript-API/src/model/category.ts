import { v4 as uuidV4 } from "uuid";

export class Category {
    categoryId?: string;
    name: string;
    description: string;
    createdAt: Date;

    constructor() {
        if (!this.categoryId){
            this.categoryId = uuidV4()
        }
    }
}

 