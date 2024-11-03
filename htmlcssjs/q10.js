// JavaScript code for Event Planner application

// Array to store events
const events = [];

// Function to add an event
function addEvent() {
    const eventName = document.getElementById("eventName").value.trim();
    const eventDate = document.getElementById("eventDate").value;
    const errorMessage = document.getElementById("errorMessage");

    // Clear any previous error messages
    errorMessage.textContent = "";

    try {
        // Validation: Check if event name is empty
        if (!eventName) {
            throw new Error("Event name cannot be empty.");
        }

        // Validation: Check if event date is in the future
        const today = new Date();
        const eventDateObj = new Date(eventDate);

        if (!eventDate || eventDateObj < today) {
            throw new Error("Please enter a future date for the event.");
        }

        // Create an event object
        const event = {
            name: capitalizeWords(eventName),
            date: formatDate(eventDateObj)
        };

        // Add event to events array
        events.push(event);

        // Render the updated list of events
        renderEvents();
    } catch (error) {
        // Display error message
        errorMessage.textContent = error.message;
    }
}

// Function to render events list
function renderEvents() {
    const eventList = document.getElementById("eventList");
    eventList.innerHTML = ""; // Clear the current list

    events.forEach(event => {
        const li = document.createElement("li");
        li.textContent = `${event.name} - ${event.date}`;
        eventList.appendChild(li);
    });
}

// Function to capitalize each word in a string
function capitalizeWords(str) {
    return str.split(" ")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(" ");
}

// Function to format date in "MMM DD, YYYY" format
function formatDate(date) {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return date.toLocaleDateString(undefined, options);
}

// Event listener for 'Add Event' button
document.getElementById("addEventButton").addEventListener("click", addEvent);
