
const downloadButton = document.getElementById('downloadButton');
const saveButton = document.getElementById('saveButton');

const deleteButton = document.getElementById('deleteButton'); // ONLY FOR TESTING




const localStorageKey = "localStorageKey";

saveButton.addEventListener('click', () => {

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



    

    
    let allEntries = localStorage.getItem(localStorageKey);

    if(allEntries === null)
    {
        allEntries = "";
    }

    allEntries = allEntries + aEntry; // add new entry
    localStorage.setItem(localStorageKey, allEntries) // save
});


downloadButton.addEventListener('click', () => {


    let allEntries = localStorage.getItem(localStorageKey);


    const csvContent = "data:text/csv;charset=utf-8," + allEntries;
    const encodedUri = encodeURI(csvContent);

    const link = document.createElement("a"); // TODO try to remove. I think it is not needed

    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "Campsite_Registrations.csv");

    document.body.appendChild(link);

    link.click();

});



deleteButton.addEventListener('click', () => {
    localStorage.removeItem(localStorageKey);
});

