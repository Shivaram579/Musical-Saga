function populate(s1, s2) {
    const stateSelect = document.getElementById(s1);
    const districtSelect = document.getElementById(s2);

    if (!stateSelect || !districtSelect) return;

    districtSelect.innerHTML = "";

    let optionArray = [];
    if (stateSelect.value == "telangana") {
        optionArray = ['adilabad|Adilabad', 'ranga reddy|Ranga Reddy', 'medchal malkajgiri|Medchal Malkajgiri', 'mancherial|Mancherial', 'warangal urban|Warangal Urban'];
    } else if (stateSelect.value == "andhra pradesh") {
        optionArray = ['anantapur|Anantapur', 'chittoor|Chittoor', 'east godavari|East Godavari', 'guntur|Guntur', 'krishna|Krishna', 'kurnool|Kurnool', 'prakasam|Prakasam', 'nellore|Nellore', 'srikakulam|Srikakulam', 'visakhapatnam|Visakhapatnam', 'vizianagaram|Vizianagaram', 'west godavari|West Godavari', 'ysr kadapa|YSR Kadapa'];
    }

    // Add the default option
    const defaultOption = document.createElement("option");
    defaultOption.hidden = true;
    defaultOption.text = "--Select District--";
    districtSelect.add(defaultOption);

    // Add the options for the selected state
    optionArray.forEach(option => {
        const [value, text] = option.split("|");
        const newOption = document.createElement("option");
        newOption.value = value;
        newOption.textContent = text;
        districtSelect.add(newOption);
    });
}

// Handle form submission
document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission
    
    // Get selected district
    const selectedDistrict = document.getElementById('districtSelect').value;
    
    // Store selected district in localStorage
    localStorage.setItem('selectedDistrict', selectedDistrict);
    
    // Redirect to intermediate page
    window.location.href = 'intermediate-page.html';
});
