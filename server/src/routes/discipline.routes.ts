import { Router, response } from 'express';
import { getRepository, getCustomRepository } from 'typeorm';
import Discipline from '../entities/Discipline';
import DisciplineRepository from '../repositories/Discipline';

const disciplineRouter = Router();

disciplineRouter.post('/', async (request, response) => {
    try{
        const repo = getRepository(Discipline);
        await repo.save(request.body);
        return response.status(201).send();
    }
    catch(err){
        return response.send(err.message);
    }
});

disciplineRouter.get('/', async (request, response) => {
    response.json(await getRepository(Discipline).find());
});

disciplineRouter.get('/:name', async (request, response) => {
    const repository = getCustomRepository(DisciplineRepository);
    const results = await repository.findByName(request.params.name);
    return response.json(results);
})

export default disciplineRouter;