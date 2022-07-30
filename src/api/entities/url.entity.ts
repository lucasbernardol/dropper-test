import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
  JoinColumn,
  OneToOne,
} from 'typeorm';

import { Picture } from './picture.entity';
import { Status } from './status.emity';

const URL_PICTURE_ID_FIELD = 'picture_id';

export type UrlAvaliableRelations = 'avatar' | 'uploads' | 'status';

@Entity({ name: 'url' })
export class URL {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  original_url: string;

  @Column()
  slug: string;

  @Column()
  picture_id: string;

  // Avatar
  @JoinColumn({ name: URL_PICTURE_ID_FIELD })
  @OneToOne(() => Picture, {
    eager: false,
  })
  avatar: Picture;

  // Reverse picture/uploads
  @JoinColumn()
  @OneToMany(() => Picture, (picture) => picture.url, {
    eager: false,
  })
  uploads: Picture[];

  // Reverse "STATUS"
  @JoinColumn()
  @OneToMany(() => Status, (status) => status.url, {
    eager: false,
  })
  status: Status[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
