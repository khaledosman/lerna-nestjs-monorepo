import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { NestFactory } from '@nestjs/core';
import { EcoServiceModule } from './eco-service.module';

async function bootstrap() {
  // const app = await NestFactory.create(EcoServiceModule);
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    EcoServiceModule,
    {
      transport: Transport.TCP,
    },
  );
  await app.listen();
}
bootstrap();
