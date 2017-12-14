import axios from 'axios';



const dailyWeather = "http://api.openweathermap.org/data/2.5/weather?q="
const tail = "&APPID=d731dc0968afb536a33d5763db8a02d5"

const fiveDayWeather = "http://api.openweathermap.org/data/2.5/forecast?q="
const fiveDayTail = "&cnt=5"

let WeatherFetcher = {
	fetchDailyWeather: function(city) {
		let url = dailyWeather + city + tail;
		return axios.get(url);
	},
	fetchFiveDayWeather: function(city) {
		let url = fiveDayWeather + city + tail + fiveDayTail;
		return axios.get(url);
	}
}

export default WeatherFetcher;