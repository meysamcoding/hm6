
var btn = $("#add-movie");
var search = $("#movie-input");
var cityname = ["Los Angeles", "New York", "London", "Paris", "Boston", "Phoenix"];


var datetime = new Date();
var newdate = datetime.toLocaleDateString();

btn.on("click", function (event) {
    event.preventDefault();

    var cityName = search.val();

    var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + cityName + " &APPID=0c23eeb4c2d4069fceccdac2c0ed3d35";
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        // $("#display").empty();
        // var weatherinfo = $("#display");
        // var h = $("<h>").text(response.name + " ( " + newdate + " )");
        // var p1 = $("<div>").text("temp_max" + response.main.temp_max);
        // var p2 = $("<div>").text("speed: " + response.wind.speed);
        // var p3 = $("<div>").text("humidity: ", +response.main.humidity  +"%");
        // var p4 = $("<div>").text("UV index: ", +response.wind.gust);
        // var weathericon = "http://openweathermap.org/img/w/"+ response.weather[0].icon +".png";



        // weatherinfo.append(h , "<img src="+weathericon+">");
        // weatherinfo.append(p1);
        // weatherinfo.append(p2);
        // weatherinfo.append(p3);
        // weatherinfo.append(p4);


        // console.clear();
        // console.log(response.name + newdate);
        // console.log("UV index:", response.wind.gust);
        // console.log("temp_max", response.main.temp_max);
        // console.log("speed", response.wind.speed);
        // console.log("humidity", response.main.humidity);

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

        event.preventDefault();

        var cityName = $(this).text();

        var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&APPID=0c23eeb4c2d4069fceccdac2c0ed3d35";

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
        //     $("#display").empty();

        //    var weatherinfo = $("#display");
        //     var h = $("<h>").text(response.name + " ( " + newdate + " )" );
        //     var p1 = $("<div>").text("temp_max" + response.main.temp_max);
        //     var p2 = $("<div>").text("speed: " + response.wind.speed);
        //     var p3 = $("<div>").text("humidity:" + response.main.humidity +"%");
        //     var p4 = $("<div>").text("UV index: " + response.wind.gust);



        //     var weathericon = "http://openweathermap.org/img/w/"+ response.weather[0].icon +".png";
             
             

        //     weatherinfo.append(h ,"<img src="+weathericon+">");
        //     weatherinfo.append(p1);
        //     weatherinfo.append(p2);
        //     weatherinfo.append(p3);
        //     weatherinfo.append(p4);

        var forecastweather = 
         

        });


    });
};