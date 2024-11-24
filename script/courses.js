const countrySelect = document.querySelector('#country-select');
const citySelect = document.querySelector('#city-select');

const citiesByCountry = {
    "bs": ["Armento", "Cancellara", "Miglionico", "San Fele"],
    "cl": ["Castrolibero", "Delianuova", "Laino Borgo", "Marcedusa"],
    "er": ["Bardi", "Modena", "Parma", "Ravenna"],
    "fg": ["Bicinicco", "Lauco", "Prato Carnico", "Sagrado"],
    "pg": ["Alberobello", "Locorotondo", "Polignano a Mare", "Ostuni"],
    "sc": ["Cefalù", "Enna", "Noto", "Syracuse"],
    "vn": ["Bevilacqua", "Danta di Cadore", "Erbezzo", "Feltre"]
};

countrySelect.addEventListener('change', function() {
    const selectedCountry = this.value;

    

    if (selectedCountry && citiesByCountry[selectedCountry]) {
        const cities = citiesByCountry[selectedCountry];
        
        citySelect.innerHTML = '<option value="">-- Select city --</option>';

        cities.forEach(function(city) {
            const option = document.createElement('option');
            option.value = city;
            option.textContent = city;
            citySelect.appendChild(option);
        });
    }
});