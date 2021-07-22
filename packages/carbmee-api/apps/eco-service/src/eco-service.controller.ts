import { Controller, Get } from '@nestjs/common';
import { EcoServiceService } from './eco-service.service';
import { MessagePattern } from '@nestjs/microservices';
@Controller()
export class EcoServiceController {
  constructor(private readonly ecoServiceService: EcoServiceService) {}

  @Get()
  @MessagePattern({
    cmd: 'hello',
  })
  getHello(): string {
    return this.ecoServiceService.getHello();
  }
}
