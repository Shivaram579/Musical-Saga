


    function redirectToPage(pageName) {
        const selectedDistrict = localStorage.getItem('selectedDistrict');
        if (selectedDistrict) {
            window.location.href = `${pageName}-page-${selectedDistrict}.html`;
        } else {
            console.error('Selected district information is missing.');
            // Handle case where district selection is missing
        }
    }

