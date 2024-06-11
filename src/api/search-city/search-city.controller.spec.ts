import { Test, TestingModule } from '@nestjs/testing';
import { SearchCityController } from './search-city.controller';
import { SearchCityService } from './search-city.service';

describe('SearchCityController', () => {
  let controller: SearchCityController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SearchCityController],
      providers: [SearchCityService],
    }).compile();

    controller = module.get<SearchCityController>(SearchCityController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
