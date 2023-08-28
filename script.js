const nameInput = document.getElementById('nameInput');
const downloadButton = document.getElementById('downloadButton');


let allInputs = [];


downloadButton.addEventListener('click', () => {

    let singleInput = [];


    const newFirstName = firstNameInput.value.trim();
    singleInput.push(newFirstName);
    firstNameInput.value = '';



    const newLastName = lastNameInput.value.trim();
    singleInput.push(newLastName);
    lastNameInput.value = '';



    const newCountry = countryInput.value.trim();
    singleInput.push(newCountry);
    countryInput.value = '';


    const aEntry = singleInput.join(',') + '\n';
    allInputs.push(aEntry)


    const csvContent = "data:text/csv;charset=utf-8," + allInputs;
    const encodedUri = encodeURI(csvContent);

    const link = document.createElement("a"); // TODO try to remove. I think it is not needed

    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "Campsite_Registrations.csv");

    document.body.appendChild(link);

    link.click();

});