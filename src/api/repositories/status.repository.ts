import DataSource from '../database/data.source';

import { Status } from '../entities/status.emity';

export const StatusRepository = DataSource.getRepository(Status);
