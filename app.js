document.addEventListener('DOMContentLoaded', function() {
    const button = document.querySelector('.btn');
    const resultContainer = document.getElementById('result'); // The div where the list will go
    const searchInput = document.getElementById('search');



    button.addEventListener('click', function() {
        const query = searchInput.value.trim(); // Get and sanitize the input value

        // Append the search query as a parameter to the PHP file URL
        const url = `http://localhost/info2180-lab4/superheroes.php?query=${encodeURIComponent(query)}`;

        fetch(url)
            .then(response => response.text())  // Convert the response to text
            .then(data => {
                resultContainer.innerHTML = data; // Display the search results from the PHP file
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                resultContainer.innerHTML = '<p style="color: red;">An error occurred while fetching the data.</p>';
            });
    });
});
