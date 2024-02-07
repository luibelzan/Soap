import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class S15 {
  @Column()
  idRpt: string;

  @PrimaryGeneratedColumn()
  idPet: number;

  @Column()
  version: number;

  @Column()
  cnc: number;

  @Column()
  fh: Date;

  @Column()
  et: number;

  @Column()
  c: number;

  @Column()
  d1: string;

  @Column()
  d2: string;

}