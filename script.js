

var btn = $("#add-movie");
var search = $("#movie-input");
var cityname = ["Los Angeles", "New York", "London", "Paris", "Boston", "Phoenix"];

 btn.on("click", function (event) {
 

    event.preventDefault();

    var cityName = search.val();

    var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&APPID=0c23eeb4c2d4069fceccdac2c0ed3d35";
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.clear();
        console.log(response.name);
        console.log("UV index:", response.wind.gust);
        console.log("temp_max", response.main.temp_max);
        console.log("speed", response.wind.speed);
        console.log("humidity", response.main.humidity);
       
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
};

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
    console.log("ddd");
    var cityName = $(this).text();

    var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&APPID=0c23eeb4c2d4069fceccdac2c0ed3d35";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {


        console.clear();
        console.log(response);
        console.log("UV index:", response.wind.gust);
        console.log("temp_max", response.main.temp_max);
        console.log("speed", response.wind.speed);
        console.log("humidity", response.main.humidity);
        

    });
     
    

});
