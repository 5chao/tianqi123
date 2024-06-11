import { Controller, Get } from '@nestjs/common';
import { SearchCityService } from './search-city.service';

@Controller('search-city')
export class SearchCityController {
  constructor(private readonly searchCityService: SearchCityService) {}

  @Get()
  searchCityByName() {
    return this.searchCityService.searchCityList('深圳');
  }

  @Get('/weather')
  getWeatherByCity() {
    return this.searchCityService.getPageContentByUrl(
      'https://tianqi.2345.com/pc/pcIndex/shenzhen/59493',
    );
  }
}
