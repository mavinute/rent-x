import { Specification } from "../model/Specification";

interface ICreationSpecificationDTO{
    name: string;
    description: string;
}


interface ISpecificationRepository {
    create({name, description}: ICreationSpecificationDTO): void;
    findByName(name: string): Specification;
}

export {ISpecificationRepository, ICreationSpecificationDTO}