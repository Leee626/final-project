function play()
{
    /*play funtion for car crash */
    carCrash = new sound("car_crash.mp3");
    carCrash.play();
    document.getElementById("startButton").disabled = true;
    document.getElementById("stopButton").disabled = false;
}

function stop()
{
    /*stop function for car crash */
    window.location.reload();
}
function sound(src)
{
    /*sound element for sound bar */
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.play = function () {
        this.sound.play();
    };
}