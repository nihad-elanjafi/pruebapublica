document.addEventListener('DOMContentLoaded', function() {
    fetch('https://github.com/nihad-elanjafi/pruebapublic/blob/main/abb.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            if (data && Array.isArray(data.abbreviations)) {
                const tableAbbreviations = document.getElementById('tableAbbreviations');
                data.abbreviations.forEach(item => {
                    const row = tableAbbreviations.insertRow();
                    const cell1 = row.insertCell(0);
                    const cell2 = row.insertCell(1);
                    cell1.textContent = item.acronym;
                    cell2.textContent = item.definition;
                });
            } else {
                console.error('El JSON no contiene un array de abreviaciones:', data);
            }
        })
        .catch(error => console.error('Error al cargar el JSON:', error));
});
