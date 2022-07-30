import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

import { URL } from './url.entity';

@Entity({ name: 'pictures' })
export class Picture {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  href: string;

  @Column()
  url_id: string;

  // Reverse
  @JoinColumn({ name: 'url_id' })
  @ManyToOne(() => URL)
  url: URL;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
