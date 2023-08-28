const nameInput = document.getElementById('nameInput');
const addButton = document.getElementById('addButton');
const downloadButton = document.getElementById('downloadButton');

let names = [];

addButton.addEventListener('click', () => {
    const newName = nameInput.value.trim();
    if (newName !== '') {
        names.push(newName);
        nameInput.value = '';
    }
});

downloadButton.addEventListener('click', () => {
    if (names.length > 0)
    {
        const csvContent = "data:text/csv;charset=utf-8," + names.join('\n');
        const encodedUri = encodeURI(csvContent);
        const link = document.createElement("a");

        link.setAttribute("href", encodedUri);
        link.setAttribute("download", "Campsite_Registrations.csv");

        document.body.appendChild(link);

        link.click();
    }
});