import axios from 'axios';
import BaseSpy from './base.spy';
import * as cheerio from 'cheerio';

class CityWeatherSpy extends BaseSpy {
  constructor() {
    super();
  }
  async getPageContent(url) {
    const pageData = await axios.get(url);
    return this.pipePageData(pageData.data);
  }

  pipePageData(pageData) {
    const $ = cheerio.load(pageData);
    const $banner = $('.banner-right-con');
    const days = $banner.find('.banner-right-con-list-item');
    const daysWeathers: any = [];

    for (let i = 0; i < days.length; i++) {
      const day = days[i];
      const time = $(day).find('.banner-right-con-list-time').text();
      const date = $(day).find('.date').text();
      const icon = $(day)
        .find('.banner-right-con-list-icon')
        .attr('class')
        .replace('banner-right-con-list-icon', '')
        .replace(/\s/g, '');
      const status = $(day).find('.banner-right-con-list-status').text();
      const temp = $(day).find('.banner-right-con-list-temp').text();
      console.log($(day).find('.banner-right-con-list-icon').attr('class'));
      daysWeathers.push({
        time: this.trimString(time),
        date: this.trimString(date),
        icon,
        status,
        temp,
      });
    }

    return daysWeathers;
  }

  trimString(str) {
    return str.replace('\n', '').replace(/\s/g, '');
  }
}

export default CityWeatherSpy;
