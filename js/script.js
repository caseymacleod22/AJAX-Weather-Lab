let weatherData;

//selected DOM elements
const $weatherFor = $('#weatherFor')
const $temperature = $('#temperature')
const $feelsLike = $('#feelsLike')
const $weather = $('#weather')
const API_KEY = '19a2c27511b3ccc45bdf69361f18a91a'
const $input = $('#input')
//event listeners
$('form').on('submit', handleSubmit)


//functions
function handleSubmit(evt) {
    evt.preventDefault()

    const city = $input.val()
    $input.val('')

    $.ajax('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + API_KEY + '&units=imperial')
    .then(function(data) {
        weatherData = data
        render()
    }, function(error) {
        console.log('Error ', error)
        })
    }

function render() {
    if(weatherData) {
        $weatherFor.text(weatherData.name)
        $temperature.text(weatherData.main.temp)
        $feelsLike.text(weatherData.main.feels_like)
        $weather.text(weatherData.weather[0].main)
    }
}