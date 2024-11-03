document.getElementById('medicine-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form submission

    // Get values from the input fields
    const name = document.getElementById('medicine-name').value;
    const price = document.getElementById('medicine-price').value;
    const quantity = document.getElementById('medicine-quantity').value;

    // Create a new row for the medicine table
    const table = document.getElementById('medicine-table').getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();

    // Insert new cells for name, price, and quantity
    newRow.insertCell(0).textContent = name;
    newRow.insertCell(1).textContent = price;
    newRow.insertCell(2).textContent = quantity;

    // Clear the input fields
    document.getElementById('medicine-name').value = '';
    document.getElementById('medicine-price').value = '';
    document.getElementById('medicine-quantity').value = '';
});
