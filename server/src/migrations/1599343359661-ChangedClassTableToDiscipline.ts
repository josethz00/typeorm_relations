import {MigrationInterface, QueryRunner} from "typeorm";

export default class ChangedClassTableToDiscipline1599343359661 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE class RENAME TO discipline;`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
