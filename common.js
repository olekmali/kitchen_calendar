var TIME_FOR_ACTION = 3600; //seconds
var _SecondsCounter = 0;

function CheckTime()
{
    if ( _SecondsCounter < TIME_FOR_ACTION)
    {
        _SecondsCounter++;
    } else {
        _SecondsCounter = 0;
        // window.location.replace("index.html"); // return to home location
        // window.location.reload(); // reload the current page
        var toreload = document.getElementById('refreshable');
        toreload.src = toreload.src;
    }
}

function startTimeout()
{
    window.setInterval(CheckTime, 1000);
}
