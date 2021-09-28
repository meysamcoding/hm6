
var btn = $("#add-movie");
var search = $("#movie-input");
var cityname = ["Los Angeles", "New York", "London", "Paris", "Boston", "Phoenix"];


var datetime = new Date();
var newdate = datetime.toLocaleDateString();

btn.on("click", function (event) {
    event.preventDefault();
    $(".row.col-lg-9.col-sm-12.col-md-12").css("display", "flex")
    
    var cityName = search.val();
    

    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&APPID=0c23eeb4c2d4069fceccdac2c0ed3d35&units=imperial";
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        $("#display").empty();
        var weatherinfo = $("#display");
        var h = $("<h>").text(response.name + " ( " + newdate + " )");
        var p1 = $("<div>").text("temp_max" + response.main.temp_max + " °F");
        var p2 = $("<div>").text("speed: " + response.wind.speed + " MPH");
        var p3 = $("<div>").text("humidity: ", +response.main.humidity + "%");
        var p4 = $("<div>").text("UV index: ", +response.wind.gust);
        var weathericon = "http://openweathermap.org/img/w/" + response.weather[0].icon + ".png";



        weatherinfo.append(h, "<img src=" + weathericon + ">");
        weatherinfo.append(p1);
        weatherinfo.append(p2);
        weatherinfo.append(p3);
        weatherinfo.append(p4);
        var newStr = cityName.replace(/ /g, "");
            $("#display").empty();

            var weatherinfo = $("#display");
            var h = $("<h>").text(response.name + " ( " + newdate + " )");
            var p1 = $("<div>").text("temp_max: " + response.main.temp_max + " °F");
            var p2 = $("<div>").text("speed: " + response.wind.speed + " MPH");
            var p3 = $("<div>").text("humidity: " + response.main.humidity + "%");
            var p4 = $("<div>").text("UV index: " + response.wind.gust);



            var weathericon = "https://openweathermap.org/img/w/" + response.weather[0].icon + ".png";



            weatherinfo.append(h, "<img src=" + weathericon + ">");
            weatherinfo.append(p1);
            weatherinfo.append(p2);
            weatherinfo.append(p3);
            weatherinfo.append(p4);
            var cityid = response.sys.id;

        });
           
        var cityid = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityName + "&APPID=0c23eeb4c2d4069fceccdac2c0ed3d35&units=imperial";


        $.ajax({
            url: cityid,
            method: "GET"
        }).then(function (city) {

            //day number 1
            $("#row1").empty();
            var city1 = $("#row1");

            var p1 = $("<div>").text(city.list[0].dt_txt);
            var weathericone = "https://openweathermap.org/img/w/" + city.list[0].weather[0].icon + ".png";

            var p3 = $("<div>").text(city.list[0].main.temp + " °F");
            var p4 = $("<div>").text(city.list[0].main.humidity + "%");
            city1.append(p1);
            city1.append("<img src=" + weathericone + ">");
            city1.append(p3);
            city1.append(p4);



            // day number 2
            $("#row2").empty();
            var city2 = $("#row2");
            var s1 = $("<div>").text(city.list[8].dt_txt);
            var weathericone = "https://openweathermap.org/img/w/" + city.list[8].weather[0].icon + ".png";

            var s2 = $("<div>").text(city.list[8].main.temp + " °F");
            var s3 = $("<div>").text(city.list[8].main.humidity + "%");
            city2.append(s1);

            city2.append("<img src=" + weathericone + ">");
            city2.append(s2);
            city2.append(s3);


            // day number 3
            $("#row3").empty();
            city3 = $("#row3");
            var d1 = $("<div>").text(city.list[16].dt_txt)

            var weathericone = "https://openweathermap.org/img/w/" + city.list[16].weather[0].icon + ".png";

            var d2 = $("<div>").text(city.list[16].main.temp + " °F");
            var d3 = $("<div>").text(city.list[16].main.humidity + "%");
            city3.append(d1);
            city3.append("<img src=" + weathericone + ">");
            city3.append(d2);
            city3.append(d3);





            // day number 4
            $("#row4").empty();
            city4 = $("#row4");
            var a1 = $("<div>").text(city.list[24].dt_txt)

            var weathericone = "https://openweathermap.org/img/w/" + city.list[24].weather[0].icon + ".png";

            var a2 = $("<div>").text(city.list[24].main.temp + " °F");
            var a3 = $("<div>").text(city.list[24].main.humidity + "%");
            city4.append(a1);
            city4.append("<img src=" + weathericone + ">");
            city4.append(a2);
            city4.append(a3);
            //day  number 5

            $("#row5").empty();
            city5 = $("#row5");
            var b1 = $("<div>").text(city.list[32].dt_txt)

            var weathericone = "https://openweathermap.org/img/w/" + city.list[24].weather[0].icon + ".png";

            var b2 = $("<div>").text(city.list[32].main.temp + " °F");
            var b3 = $("<div>").text(city.list[32].main.humidity + "%");
            city5.append(b1);
            city5.append("<img src=" + weathericone + ">");
            city5.append(b2);
            city5.append(b3);
    });
});

renderbutton();

function renderbutton() {

    $("#todolist").empty();
    for (var i = 0; i < cityname.length; i++) {
        var p = $("<p>");
        p.addClass("list-p");

        p.attr("data-name", cityname[i]);
        p.text(cityname[i]);
        $("#todolist").append(p);
    }


    $("#add-movie").on("click", function (event) {

        event.preventDefault();
        var cityName = $("#movie-input").val().trim();
        if ($('#movie-input').val() === "") {
            return;
        } else {
            cityname.unshift(cityName);
            cityname.pop();
            $("#movie-input").val("");
            renderbutton();
        }
    });

    $(".list-p").on("click", function (event) {
        $(".row.col-lg-9.col-sm-12.col-md-12").css("display", "flex")
        event.preventDefault();

        var cityName = $(this).text();

        var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&APPID=0c23eeb4c2d4069fceccdac2c0ed3d35&units=imperial";

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {

            var newStr = cityName.replace(/ /g, "");
            $("#display").empty();

            var weatherinfo = $("#display");
            var h = $("<h>").text(response.name + " ( " + newdate + " )");
            var p1 = $("<div>").text("temp_max" + response.main.temp_max + " °F");
            var p2 = $("<div>").text("speed: " + response.wind.speed);
            var p3 = $("<div>").text("humidity:" + response.main.humidity + "%");
            var p4 = $("<div>").text("UV index: " + response.wind.gust);


            var weathericon = "https://openweathermap.org/img/w/" + response.weather[0].icon + ".png";

            weatherinfo.append(h, "<img src=" + weathericon + ">");
            weatherinfo.append(p1);
            weatherinfo.append(p2);
            weatherinfo.append(p3);
            weatherinfo.append(p4);

            var cityid = response.sys.id;

        });

        var cityid = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityName + "&APPID=0c23eeb4c2d4069fceccdac2c0ed3d35&units=imperial";


        $.ajax({
            url: cityid,
            method: "GET"
        }).then(function (city) {

            //day number 1
            $("#row1").empty();
            var city1 = $("#row1");

            var p1 = $("<div>").text(city.list[0].dt_txt);
            var weathericone = "https://openweathermap.org/img/w/" + city.list[0].weather[0].icon + ".png";

            var p3 = $("<div>").text(city.list[0].main.temp + " °F");
            var p4 = $("<div>").text(city.list[0].main.humidity + "%");
            city1.append(p1);
            city1.append("<img src=" + weathericone + ">");
            city1.append(p3);
            city1.append(p4);



            // day number 2
            $("#row2").empty();
            var city2 = $("#row2");
            var s1 = $("<div>").text(city.list[8].dt_txt);
            var weathericone = "https://openweathermap.org/img/w/" + city.list[8].weather[0].icon + ".png";

            var s2 = $("<div>").text(city.list[8].main.temp + " °F");
            var s3 = $("<div>").text(city.list[8].main.humidity + "%");
            city2.append(s1);

            city2.append("<img src=" + weathericone + ">");
            city2.append(s2);
            city2.append(s3);


            // day number 3
            $("#row3").empty();
            city3 = $("#row3");
            var d1 = $("<div>").text(city.list[16].dt_txt)

            var weathericone = "https://openweathermap.org/img/w/" + city.list[16].weather[0].icon + ".png";

            var d2 = $("<div>").text(city.list[16].main.temp + " °F");
            var d3 = $("<div>").text(city.list[16].main.humidity + "%");
            city3.append(d1);
            city3.append("<img src=" + weathericone + ">");
            city3.append(d2);
            city3.append(d3);
            // day number 4
            $("#row4").empty();
            city4 = $("#row4");
            var a1 = $("<div>").text(city.list[24].dt_txt)

            var weathericone = "https://openweathermap.org/img/w/" + city.list[24].weather[0].icon + ".png";

            var a2 = $("<div>").text(city.list[24].main.temp + " °F");
            var a3 = $("<div>").text(city.list[24].main.humidity + "%");
            city4.append(a1);
            city4.append("<img src=" + weathericone + ">");
            city4.append(a2);
            city4.append(a3);
            //day  number 5

            $("#row5").empty();
            city5 = $("#row5");
            var b1 = $("<div>").text(city.list[32].dt_txt)

            var weathericone = "https://openweathermap.org/img/w/" + city.list[24].weather[0].icon + ".png";

            var b2 = $("<div>").text(city.list[32].main.temp + " °F");
            var b3 = $("<div>").text(city.list[32].main.humidity + "%");
            city5.append(b1);
            city5.append("<img src=" + weathericone + ">");
            city5.append(b2);
            city5.append(b3);
        });
    });
};