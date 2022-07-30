import 'dotenv/config';

import { Database } from './api/database/data.source';
import { server } from './main';

async function main() {
  await Database.connect();

  server.listen(3333, () => console.log('\nOK'));
}

main();
