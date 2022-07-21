import express from 'express'
import { categoriesRoutes } from './routes/categories.routes';

const app = express();

app.use(express.json())

app.get('/', (request, response) => {
    return response.json({message: "oi"})
})
app.listen(3333, () => {console.log({messaege: "server is running"})})

app.use(categoriesRoutes)