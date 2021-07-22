import { Controller, Get } from '@nestjs/common';
import { EcoServiceService } from './eco-service.service';
import { MessagePattern, Payload } from '@nestjs/microservices';
@Controller()
export class EcoServiceController {
  constructor(private readonly ecoServiceService: EcoServiceService) {}

  @Get()
  @MessagePattern({
    cmd: 'hello',
  })
  getHello(@Payload() payload): string {
    return this.ecoServiceService.getHello(payload);
  }
}
