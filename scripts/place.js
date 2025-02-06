function calculateWindChill(temp, windSpeed) {
    return (temp <= 10 && windSpeed > 4.8) 
        ? (13.12 + 0.6215 * temp - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temp * Math.pow(windSpeed, 0.16)).toFixed(1) + " °C" 
        : "N/A";
}


document.addEventListener("DOMContentLoaded", function () {
    const temperature = 10; // Static value for now
    const windSpeed = 5;    // Static value for now

    document.getElementById("windChill").textContent = calculateWindChill(temperature, windSpeed);
});


// Get the current year
const currentYear = new Date().getFullYear();

// Display the current year in the element with ID "current-year"
document.getElementById('currentyear').textContent = currentYear;

const lastModified= document.lastModified;
document.getElementById('lastModified').textContent = `Last Modification: ${lastModified}`