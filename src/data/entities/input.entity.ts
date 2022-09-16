import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'inputs' })
export class InputEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 15 })
  name: string;

  @Column({ type: 'boolean' })
  status: boolean;

  @Column({ type: 'varchar' })
  userId: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  description: string;
}
