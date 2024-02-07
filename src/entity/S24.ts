import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class S24 {
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
  meterId: number;

  @Column()
  comStatus: number;

  @Column()
  date: Date;

  @Column()
  active: boolean;

}