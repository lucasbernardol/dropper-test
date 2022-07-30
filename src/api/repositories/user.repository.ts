import DataSource from '../database/data.source';

import { URL } from '../entities/url.entity';

export const URLRepository = DataSource.getRepository(URL);
