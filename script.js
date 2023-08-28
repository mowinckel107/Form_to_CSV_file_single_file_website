const nameInput = document.getElementById('nameInput');
const downloadButton = document.getElementById('downloadButton');

let names = [];

downloadButton.addEventListener('click', () => {

    const newName = nameInput.value.trim();
    if (newName !== '') {
        names.push(newName);
        nameInput.value = '';
    }



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