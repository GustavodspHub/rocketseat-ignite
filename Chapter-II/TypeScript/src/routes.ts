import { Request, Response } from "express";
import createCourseService from "./createCourseService";

export function createCourse(request: Request, response: Response) {
    createCourseService.execute({name: "Nodejs", duration: 10, educator: "Gustavo"})

    response.send()
}