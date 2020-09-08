import { Entity, Column, ChildEntity } from 'typeorm';
import Institution from './Institution';

/*@Entity('college')
export default class College extends Institution {

    @Column()
    graduations: string;

    @Column()
    year: number;

    HERDA DA TABELA PAI

}*/

@ChildEntity('college')
export default class College extends Institution {

    @Column()
    graduations: string;

    @Column()
    year: number;

}