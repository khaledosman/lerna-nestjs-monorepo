import { Controller, Get, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Observable } from 'rxjs';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    @Inject('ECO_SERVICE') private client: ClientProxy,
  ) {}

  @Get()
  getHello(): Observable<string> {
    const pattern = { cmd: 'hello' };
    const payload = [1, 2, 3];
    return this.client.send<string>(pattern, payload);
    // return this.appService.getHello();
  }
}
