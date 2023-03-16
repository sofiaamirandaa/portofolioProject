
function calculateSeconds () {
    const now = new Date().getTime()
    const start = new Date("2023-01-05").getTime()
    const dif =  (now-start)/1000;


    document.getElementById("seconds").innerHTML = `I've been  programming for ${dif} seconds!`
}

function getVacation() {
    const  vacationResult= vacationPlanner()
    document.getElementById("vacationResult").innerHTML = vacationResult;
    document.getElementById("vacationButton").innerHTML = "Request another destination"

}

function showPuppyImage() {
    const puppyElementImage = document.getElementById("puppyYoga");
    puppyElementImage.hidden = !puppyElementImage.hidden;
}

function showTravelAgencyImage() {
    const travelElementImage = document.getElementById("travelAgency");
    travelElementImage.hidden = !travelElementImage.hidden;
}

window.onload = function() {
    calculateSeconds();
    setInterval(calculateSeconds, 1000);

    let buttonElement = document.getElementById('vacationButton');
    buttonElement.addEventListener('click', getVacation);
    
    let puppyElement = document.getElementById('appearPuppyYoga');
    puppyElement.addEventListener('click', showPuppyImage);

    let travelElement = document.getElementById('appearTravelAgency');
    travelElement.addEventListener('click', showTravelAgencyImage);
};
