import { Entity, Column, ChildEntity } from 'typeorm';
import Institution from './Institution';

/*Entity('university')
export default class University extends Institution {

    @Column()
    graduations: string;

    @Column()
    doctors: string;

    @Column()
    masters: string;

    HERDA DA SUPER CLASSE

}*/

ChildEntity('university')
export default class University extends Institution {

    @Column()
    graduations: string;

    @Column()
    doctors: string;

    @Column()
    masters: string;

}