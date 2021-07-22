import { Module } from '@nestjs/common';
import { EcoServiceController } from './eco-service.controller';
import { EcoServiceService } from './eco-service.service';

@Module({
  imports: [],
  controllers: [EcoServiceController],
  providers: [EcoServiceService],
})
export class EcoServiceModule {}
