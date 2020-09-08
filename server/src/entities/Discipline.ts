import { Entity, Column, CreateDateColumn, UpdateDateColumn, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import Lesson from './Lesson';

@Entity('discipline')
export default class Discipline {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ length: 100, unique: true, nullable: false })
    name: string;

    @OneToMany(type => Lesson, Discipline => Discipline)
    lessons: Lesson[];

    @Column()
    duration: number;

    @CreateDateColumn({ name: 'created_at' })
    createdAt: Date;

    @UpdateDateColumn({ name: 'updated_at' })
    updatedAt: Date;

}