import { Test, TestingModule } from '@nestjs/testing';
import { NfeResolver } from './nfe.resolver';

describe('NfeResolver', () => {
  let resolver: NfeResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NfeResolver],
    }).compile();

    resolver = module.get<NfeResolver>(NfeResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
