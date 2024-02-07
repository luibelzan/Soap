import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class S11 {
  @PrimaryGeneratedColumn()
  idRpt: number;

  @Column()
  idPet: number;

  @Column()
  version: number;

  @Column()
  cnc: number;

  @Column()
  cnt: number;

  @Column()
  fh: Date;

  @Column()
  bc: boolean;
}