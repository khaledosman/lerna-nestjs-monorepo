import { Controller, Get } from '@nestjs/common';
import { EcoServiceService } from './eco-service.service';

@Controller()
export class EcoServiceController {
  constructor(private readonly ecoServiceService: EcoServiceService) {}

  @Get()
  getHello(): string {
    return this.ecoServiceService.getHello();
  }
}
