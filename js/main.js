
function calculateSeconds () {
    const now = new Date().getTime()
    const start = new Date("2023-01-05").getTime()
    const dif =  (now-start)/1000;


    document.getElementById("seconds").innerHTML = `I've been  programming for ${dif} seconds!`

}

window.onload = function() {
    calculateSeconds();
    setInterval(calculateSeconds, 1000);
 };
 
 