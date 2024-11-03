const express = require('express');
const app = express();
const PORT = 3000;

// Middleware to parse JSON
app.use(express.json());

// Simple GET route
app.get('/', (req, res) => {
    res.send('Welcome to my Express app!');
});

// Example of a route with a callback that simulates asynchronous operation
app.get('/data', (req, res) => {
    setTimeout(() => {
        res.json({ message: 'This is some data!' });
    }, 2000); // Simulates a delay of 2 seconds
});

// Example of a route that demonstrates event loop with callbacks
app.get('/calculate', (req, res) => {
    console.log('Received a request for /calculate');
    
    // Simulate a heavy computation using setTimeout to prevent blocking the event loop
    setTimeout(() => {
        const result = heavyComputation();
        res.json({ result });
    }, 0); // Schedule to run after the current event loop cycle
});

// A function that simulates a heavy computation
function heavyComputation() {
    let sum = 0;
    for (let i = 0; i < 1e6; i++) {
        sum += i;
    }
    return sum;
}

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
