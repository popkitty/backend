import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
  Index,
} from 'typeorm'

@Entity()
export class Pop {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({
    type: 'int',
    nullable: false,
    default: 0,
  })
  count = 0

  @Index()
  @Column({
    nullable: false,
    default: 'global',
    type: 'varchar',
    unique: true,
  })
  guild = 'global'

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAt: Date

  constructor(partial: Partial<Pop>) {
    Object.assign(this, partial)
  }
}
