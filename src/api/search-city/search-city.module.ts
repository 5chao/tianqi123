import { Module } from '@nestjs/common';
import { SearchCityService } from './search-city.service';
import { SearchCityController } from './search-city.controller';

@Module({
  controllers: [SearchCityController],
  providers: [SearchCityService],
})
export class SearchCityModule {}
