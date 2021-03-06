/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 **/

import { environment } from '@env/backend';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './lib/app.module';

export async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);
  const port = environment.port;
  await app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}/${globalPrefix}`);
  });
}
