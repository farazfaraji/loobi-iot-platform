import { Test, TestingModule } from '@nestjs/testing';
import { ReceiverService } from './services/receiver.service';

describe('ReceiverService', () => {
  let service: ReceiverService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ReceiverService],
    }).compile();

    service = module.get<ReceiverService>(ReceiverService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
