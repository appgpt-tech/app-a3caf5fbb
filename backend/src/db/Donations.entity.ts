//Source code generated by AppGPT (www.appgpt.tech)
//to be autogenerated as template, one per resource
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Donations')
export class DonationsEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('integer', { nullable: true })
  userID: number;

  @Column('integer', { nullable: true })
  charityInstituteID: number;

  @Column('text', { nullable: true })
  donationType: string;

  @Column('real', { nullable: true })
  amount: number;

  @Column('integer', { nullable: true })
  itemsList: number;

  @Column('text', { nullable: true })
  status: string;
}
