import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { four } from '@carbmee/non-nestjs-sdk'

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  console.log(four)
  await app.listen(3000);
}
bootstrap();
