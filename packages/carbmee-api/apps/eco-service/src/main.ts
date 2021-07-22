import { NestFactory } from '@nestjs/core';
import { EcoServiceModule } from './eco-service.module';

async function bootstrap() {
  const app = await NestFactory.create(EcoServiceModule);
  await app.listen(3000);
}
bootstrap();
