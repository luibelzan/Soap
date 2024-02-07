import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class S65 {
  @Column()
  idRpt: string;

  @PrimaryGeneratedColumn()
  idPet: number;

  @Column()
  version: number;

  @Column()
  idrtu: number;

  @Column()
  errCat: number;

  @Column()
  errCode: number;

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