import { CreateDateColumn, DeleteDateColumn, Entity, UpdateDateColumn } from 'typeorm';

export class BaseEntity {
    @CreateDateColumn()
      created_at: Date;

    @UpdateDateColumn()
      updated_at: Date;

    @DeleteDateColumn()
      deleted_at: Date;
}
