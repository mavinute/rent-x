// import { CategoriesRepository } from "../repositories/CategoriesRepository";
import { ICategoriesRepository } from '../../repositories/ICategoriesRepository';

interface ICategoryRepository{
    name: string;
    description: string;
}

class CreateCategoryUseCase{
    constructor(private categoriesRepository: ICategoriesRepository){}

    execute({name, description}: ICategoryRepository){
        const verifyNameCategory = this.categoriesRepository.findByName(name);

        if(verifyNameCategory){
            throw new Error("Category already exists")
        }

        this.categoriesRepository.create({ name, description })
    }
}

export{CreateCategoryUseCase}