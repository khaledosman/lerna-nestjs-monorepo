import { Injectable } from '@nestjs/common';

@Injectable()
export class EcoServiceService {
  getHello(payload): string {
    return 'w00t!' + ' ' + payload;
  }
}
