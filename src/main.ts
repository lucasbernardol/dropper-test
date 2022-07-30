import { createServer, IncomingMessage, ServerResponse } from 'http';
import { once } from 'events';

import { URLRepository } from './api/repositories/user.repository';
import { StatusRepository } from './api/repositories/status.repository';
import { PictureRepository } from './api/repositories/picture.repository';

import { randomBytes } from 'crypto';
import { UrlAvaliableRelations } from './api/entities/url.entity';

//import { FindOptionsRelations } from 'typeorm';

//const x: FindOptionsRelations<UrlAvaliableRelations>[] = ['avatar', 'uploads']

function parse(data: any): string {
  return JSON.stringify(data);
}

async function handler(request: IncomingMessage, response: ServerResponse) {
  const { url, method } = request;

  if (url === '/' && method === 'GET') {
    const urls = await URLRepository.find({
      relations: ['avatar'] as UrlAvaliableRelations[],
      order: {
        updated_at: 'desc',
      },
    });

    return response
      .setHeader('Content-Type', 'application/json')
      .end(parse(urls));
  }

  if (url === '/create' && method === 'POST') {
    const data = await once(request, 'data');
    const { original_url } = JSON.parse(data.toString());

    const instance = URLRepository.create({
      original_url,
      slug: randomBytes(8).toString('hex'),
    });

    const saved = await URLRepository.save(instance);

    return response
      .setHeader('content-type', 'application/json')
      .end(parse(saved));
  }

  if (url === '/create/picture' && method === 'POST') {
    const data = await once(request, 'data');
    const { href, url_id } = JSON.parse(data.toString());

    const instance = PictureRepository.create({
      href,
      url_id,
    });

    const saved = await PictureRepository.save(instance);

    return response
      .setHeader('content-type', 'application/json')
      .end(parse(saved));
  }

  if (url === '/set/picture' && method === 'PATCH') {
    const data = await once(request, 'data');
    const { picture_id, url_id } = JSON.parse(data.toString());

    const x = await URLRepository.update(
      { id: url_id },
      {
        picture_id,
      }
    );

    return response.setHeader('content-type', 'application/json').end(parse(x));
  }

  if (url === '/add/status' && method === 'POST') {
    const data = await once(request, 'data');
    const { name, url_id } = JSON.parse(data.toString());

    const instance = StatusRepository.create({
      name,
      url_id,
    });

    const saved = await StatusRepository.save(instance);

    return response
      .setHeader('content-type', 'application/json')
      .end(parse(saved));
  }
}

export const server = createServer(handler);
