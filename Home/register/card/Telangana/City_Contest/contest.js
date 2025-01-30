document.addEventListener('DOMContentLoaded', function() {
    const notifyButtons = document.querySelectorAll('.notify-btn');
    
    notifyButtons.forEach(button => {
        button.addEventListener('click', function() {
            alert('You will be notified about this event!');
        });
    });

    const navButtons = document.querySelectorAll('.nav-btn');

    navButtons.forEach(button => {
        button.addEventListener('click', function() {
            alert(`Navigating to ${this.textContent} page.`);
        });
    });
});
