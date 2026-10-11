var frequency = 1000 * 60 * 60;

function getRandomInt(min, max) { return Math.floor(Math.random() * (max - min)) + min; }

var menuitems = [ "index.html", "cal_0000.html", "cal_daga.html", "cal_math.html", "cal_olek.html", "directory.html", "newsfeed.html", "word.html", "pm25.html",
"hazards.html", "radar.html", "rain.html", "snow.html", "uv.html", "thunder.html", "windy.html", "weather.html", "forecast.html", "clock.html" ];

function NextFrame()
{
    window.location.replace(menuitems[ getRandomInt(0, menuitems.length) ] );
}

function startTimeout()
{
    window.setTimeout(NextFrame, frequency);
}
