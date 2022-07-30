import DataSource from '../database/data.source';

import { Picture } from '../entities/picture.entity';

// *= += ++
export const PictureRepository = DataSource.getRepository(Picture);
