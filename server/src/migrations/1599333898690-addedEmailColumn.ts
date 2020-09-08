import {MigrationInterface, QueryRunner} from "typeorm";

export class addedEmailColumn1599333898690 implements MigrationInterface {
    name = 'addedEmailColumn1599333898690'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "student" ADD "email" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "student" DROP COLUMN "email"`);
    }

}
