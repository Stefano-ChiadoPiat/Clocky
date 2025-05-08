function updateClock() 
{
    const tomorrow = new Date(); // Create a new Date object representing the current date and time
    const hours = String(tomorrow.getHours()).padStart(2, '0'); // Get the current hours and convert it to a string, replacing it with a 2-digit format (e.g., "01", "02", ..., "23")
    const minutes = String(tomorrow.getMinutes()).padStart(2, '0'); // Get the current minutes and convert it to a string, replacing it with a 2-digit format (e.g., "00", "01", ..., "59")
    const seconds = String(tomorrow.getSeconds()).padStart(2, '0'); // Get the current seconds and convert it to a string, replacing it with a 2-digit format (e.g., "00", "01", ..., "59")
    document.getElementById('display').textContent = `${hours}:${minutes}:${seconds}`; // Update the content of the element with id "display" with the current time
}

updateClock(); // Execute the "updateClock" function immediately to display the current time when the page loads

setInterval(updateClock, 1000); // Say to the browser to execute the "updateClock" function every 1000 milliseconds (1 second)
