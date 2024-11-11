document.addEventListener('DOMContentLoaded', function() {
    const button = document.querySelector('.btn');
    const listContainer = document.getElementById('superhero-list'); // The div where the list will go

    button.addEventListener('click', function() {
        fetch('http://localhost/info2180-lab4/superheroes.php')
            .then(response => response.text())  // Convert the response to text
            .then(data => {
                alert(data); // Displa the list contents from the PHP file
            })
    });
});
    

    
