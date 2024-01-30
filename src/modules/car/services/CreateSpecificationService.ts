import { ISpecificationRepository } from '../repositories/ISpecificationRepository'

interface IRequest {
    name: string;
    description: string;
}

class CreateSpecificationService{
    constructor(private specificationRepository: ISpecificationRepository){}
    
    execute({name, description}: IRequest): void{
        const verifyNameSpecification = this.specificationRepository.findByName(name);

        if(verifyNameSpecification){
            throw new Error("Specificatio  alredy exists");
        }
        
        this.specificationRepository.create({
            name,
            description
        })
    }
}

export{ CreateSpecificationService }