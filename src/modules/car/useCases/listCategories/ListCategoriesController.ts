import {Request, Response} from 'express';

class ListCategoriesController{
    handle(request: Request, reponse: Response): Response{
        const all = categoriesRepository.list();

        return response.status(200).json(all);
    }
}

export {ListCategoriesController}