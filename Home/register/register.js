function populate(s1, s2) {
    var s1 = document.getElementById(s1);
    var s2 = document.getElementById(s2);

    s2.innerHTML = "";

    var optionArray = [];
    if (s1.value == "telangana") {
        optionArray = ['adilabad|Adilabad', 'ranga reddy|Ranga Reddy', 'medchal malkajgiri|Medchal Malkajgiri', 'mancherial|Mancherial', 'warangal urban|Warangal Urban'];
    } else if (s1.value == "andhra pradesh") {
        optionArray = ['anantapur|Anantapur', 'chittoor|Chittoor', 'east godavari|East Godavari', 'guntur|Guntur', 'krishna|Krishna', 'kurnool|Kurnool', 'prakasam|Prakasam', 'nellore|Nellore', 'srikakulam|Srikakulam', 'visakhapatnam|Visakhapatnam', 'vizianagaram|Vizianagaram', 'west godavari|West Godavari', 'ysr kadapa|YSR Kadapa'];
    }

    // Add the default option
    var defaultOption = document.createElement("option");
    defaultOption.hidden = true;
    defaultOption.text = "--Select District--";
    s2.add(defaultOption);

    // Add the options for the selected state
    for (var option in optionArray) {
        var pair = optionArray[option].split("|");
        var newOption = document.createElement("option");

        newOption.value = pair[0];
        newOption.innerHTML = pair[1];
        s2.options.add(newOption);
    }
}
