import { Router, response } from 'express';
import { getRepository } from 'typeorm';
import Student from '../entities/Student';
import { validate } from 'class-validator';

const studentRouter = Router();

studentRouter.post('/',  async (request, response) => {
    try{
        const repo = getRepository(Student);
        const { name, key, email } = request.body;

        const student = repo.create({ 
            key,
            name,
            email
        });

        const errors = await validate(student);

        if(errors.length === 0){
            repo.save(student);
            return response.status(201).send();
        }
        return response.status(400).json(errors);

    }
    catch(err){
        return response.status(400).send();
    }
});

studentRouter.get('/', async (request, response) => {
    response.json(await getRepository(Student).find());
});

export default studentRouter;