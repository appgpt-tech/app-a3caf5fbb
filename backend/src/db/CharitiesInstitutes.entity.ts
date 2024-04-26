//Source code generated by AppGPT (www.appgpt.tech)
//to be autogenerated as template, one per resource
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('CharitiesInstitutes')
export class CharitiesInstitutesEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text', { nullable: true })
  address: string;

  @Column('text', { nullable: true })
  organisationName: string;

  @Column('text', { nullable: true })
  description: string;

  @Column('text', { nullable: true })
  locations: string;
}
