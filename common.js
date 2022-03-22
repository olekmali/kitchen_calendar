var IDLE_TIMEOUT = 3600; //seconds
var _idleSecondsCounter = 0;

document.onclick = function()
{
    _idleSecondsCounter = 0;
};

document.onmousemove = function()
{
    _idleSecondsCounter = 0;
};

document.onkeypress = function()
{
    _idleSecondsCounter = 0;
};

function CheckIdleTime()
{
    if ( _idleSecondsCounter < IDLE_TIMEOUT)
    {
        _idleSecondsCounter++;
    } else {
        // window.location.replace("index.html"); // return to home location
        window.location.reload(); // reload the current page
    }
}

function startTimeout()
{
    window.setInterval(CheckIdleTime, 1000);
}
