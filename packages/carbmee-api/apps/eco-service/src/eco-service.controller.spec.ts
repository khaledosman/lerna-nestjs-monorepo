import { Test, TestingModule } from '@nestjs/testing';
import { EcoServiceController } from './eco-service.controller';
import { EcoServiceService } from './eco-service.service';

describe('EcoServiceController', () => {
  let ecoServiceController: EcoServiceController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [EcoServiceController],
      providers: [EcoServiceService],
    }).compile();

    ecoServiceController = app.get<EcoServiceController>(EcoServiceController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(ecoServiceController.getHello()).toBe('Hello World!');
    });
  });
});
