import { Test, TestingModule } from '@nestjs/testing';
import { SearchCityService } from './search-city.service';

describe('SearchCityService', () => {
  let service: SearchCityService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SearchCityService],
    }).compile();

    service = module.get<SearchCityService>(SearchCityService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
