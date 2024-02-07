import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class S14 {
  @Column()
  idRpt: string;

  @PrimaryGeneratedColumn()
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

  @Column()
  v1:number;

  @Column()
  v2: number;

  @Column()
  v3: number;

  @Column()
  i1: number;

  @Column()
  i2: number;

  @Column()
  i3: number;

  @Column()
  in: number;

  @Column()
  simp: number;

  @Column()
  sexp: number;

  @Column()
  errCat: number;

  @Column()
  errCode: number;

}