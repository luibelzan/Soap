import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity()
export class S15 {

  @Column()
  idRpt: string;

  @Column()
  idPet: number;

  @Column()
  version: string;

  @Column()
  cnc: number;

  @Column()
  fh: string;

  @Column()
  et: number;

  @Column()
  c: number;

  @Column()
  d1: string;

  @Column()
  d2: string;

}
