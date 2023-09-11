function getStudents() {
    $.getJSON('../data/data.json',

        
        (data) => {
            let students = data.STUDENTS;

            $.each(students, (i, student) => {
                
                $('.students').append(`<p>${student.firstName}</p>`);

                $.each(student.classes, (i, course) => {
                    $('.students').append(`<li>${course.className}</li>`);

                });
            });
        }
    )

    .fail(function(e) {
        console.log( e);
    })
   
}





const baseURL = 'https://api.weatherapi.com/v1/forecast.json?key=';
const apiKey = 'f68821fe00364a7cab6204728232808'
 
function initListeners() {
    $("#submit").on("click", (e) => {
         e.preventDefault();

        let city = $("#city").val();
        let zip = $("#zip").val();
        let finalURL = 'no url';

         if (city != '') {
            finalURL = baseURL + apiKey + `&q=${city}&days=3&aqi=no&alerts=no`;
         } else if (zip != '') {
            finalURL = baseURL + apiKey + `&q=${zip}&days=3&aqi=no&alerts=no`;
         } else {
            alert('please enter a city or zip code!');
         }

        console.log(finalURL);
         $.getJSON(finalURL, (data) => {
               
            $('#currTemp').append(`${data.current.temp_f}°F`);
            $('#feelsLike').append(`Feels like: ${data.current.feelslike_f}°F`);
            $('#sun').append(`${data.current.condition.text}`);
            $('#conditionsImg').append(`<img src="${data.current.condition.icon}"/>`)
            $('#humidity').append(`${data.current.humidity}`);
            $('#uv').append(`${data.current.uv}`);
            $('#wind').append(`${data.current.wind_mph}mph ${data.current.wind_dir}`);

            $('#three-day-forecast__max-temp1').append(`${data.forecast.forecastday[0].day.maxtemp_f}°F`);
            $('#three-day-forecast__sun1').append(`${data.forecast.forecastday[0].day.condition.text}`);
            $('#three-day-forecast__conditionsImg1').append(`<img src="${data.forecast.forecastday[0].day.condition.icon}"/>`);
            $('#three-day-forecast__rain-chance1').append(`${data.forecast.forecastday[0].day.daily_chance_of_rain}%`);
            $('#three-day-forecast__humidity1').append(`${data.forecast.forecastday[0].day.avghumidity}%`);
            $('#three-day-forecast__uv1').append(`${data.forecast.forecastday[0].day.uv}`);
            $('#three-day-forecast__max-wind1').append(`${data.forecast.forecastday[0].day.maxwind_mph}mph`);


            $('#three-day-forecast__max-temp2').append(`${data.forecast.forecastday[1].day.maxtemp_f}°F`);
            $('#three-day-forecast__sun2').append(`${data.forecast.forecastday[1].day.condition.text}`);
            $('#three-day-forecast__conditionsImg2').append(`<img src="${data.forecast.forecastday[1].day.condition.icon}"/>`);
            $('#three-day-forecast__rain-chance2').append(`${data.forecast.forecastday[1].day.daily_chance_of_rain}%`);
            $('#three-day-forecast__humidity2').append(`${data.forecast.forecastday[1].day.avghumidity}%`);
            $('#three-day-forecast__uv2').append(`${data.forecast.forecastday[1].day.uv}`);
            $('#three-day-forecast__max-wind2').append(`${data.forecast.forecastday[1].day.maxwind_mph}mph`);

            $('#three-day-forecast__max-temp3').append(`${data.forecast.forecastday[2].day.maxtemp_f}°F`);
            $('#three-day-forecast__sun3').append(`${data.forecast.forecastday[2].day.condition.text}`);
            $('#three-day-forecast__conditionsImg3').append(`<img src="${data.forecast.forecastday[2].day.condition.icon}"/>`);
            $('#three-day-forecast__rain-chance3').append(`${data.forecast.forecastday[2].day.daily_chance_of_rain}%`);
            $('#three-day-forecast__humidity3').append(`${data.forecast.forecastday[2].day.avghumidity}%`);
            $('#three-day-forecast__uv3').append(`${data.forecast.forecastday[2].day.uv}`);
            $('#three-day-forecast__max-wind3').append(`${data.forecast.forecastday[2].day.maxwind_mph}mph`);
            

        }).fail(function(e) {
            console.log( e);
        });
    })
}


$(document).ready(function () {

    initListeners();
});