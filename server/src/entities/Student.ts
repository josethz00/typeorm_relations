import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToMany, JoinTable } from 'typeorm';
import { IsEmail, Max, Min, MaxLength, MinLength } from 'class-validator';

import Discipline from './Discipline';

@Entity('student')
export default class Student {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    @MaxLength(60)
    @MinLength(3)
    name: string;;

    @Column()
    @Max(99999999)
    @Min(999)
    key: number;

    @Column()
    @IsEmail()
    email: string;

    @ManyToMany(type => Discipline)
    @JoinTable()  //especiica o dono do relacionamento no MANY TO MANY
    discipline: Discipline;

    @CreateDateColumn({ name: 'created_at' })
    createdAt: Date;

    @UpdateDateColumn({ name: 'updated_at' })
    updatedAt: Date;

}