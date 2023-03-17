const countDown = () => {
    var endDate = new Date("Mar 31, 2023 15:37:25").getTime();
    var currentDate = new Date().getTime();

    var timeDistance = endDate - currentDate;

    var seconds = 1000;
    var minutes = seconds * 60;
    var hours = minutes * 60;
    var days = hours * 24;

    var timeDays = Math.floor(timeDistance / days);
    var timeHours = Math.floor((timeDistance % days) / hours);
    var timeMinutes = Math.floor((timeDistance % hours) / minutes);
    var timeSeconds = Math.floor((timeDistance % minutes) / seconds);

    document.getElementById("days").innerHTML = timeDays
    document.getElementById("hours").innerHTML = timeHours
    document.getElementById("minutes").innerHTML = timeMinutes
    document.getElementById("seconds").innerHTML = timeSeconds

}

setInterval(countDown, 1000)
