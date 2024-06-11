import { Injectable } from '@nestjs/common';
import { METHOD } from 'src/spy/base.spy';
import CityWeatherSpy from 'src/spy/city-weather.spy';
import SearchCitySpy from 'src/spy/search-city.spy';

@Injectable()
export class SearchCityService {
  async searchCityList(cityName) {
    const params = {
      url: `https://tianqi.2345.com/tpc/searchCity.php?q=${cityName}&pType=pc`,
      method: METHOD.get,
    };

    const searchCitySpy = new SearchCitySpy();
    const data = await searchCitySpy.getPageContent(params);
    return data ? data.data?.res : null;
  }

  async getPageContentByUrl(url) {
    const cityWeatherSpy = new CityWeatherSpy();
    const data = await cityWeatherSpy.getPageContent(url);
    console.log('|===data===');
    return data;
  }
}
