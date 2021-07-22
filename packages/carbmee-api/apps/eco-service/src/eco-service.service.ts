import { Injectable } from '@nestjs/common';

@Injectable()
export class EcoServiceService {
  getHello(): string {
    return 'w00t!';
  }
}
