document.addEventListener('DOMContentLoaded', () => {
    const themeSelector = document.getElementById('theme-selector');
    const subDropdownContainer = document.getElementById('sub-dropdown-container');
    const tutorCardsContainer = document.getElementById('tutor-cards-container');
    
    themeSelector.addEventListener('change', () => {
        const theme = themeSelector.value;
        subDropdownContainer.innerHTML = '';
        tutorCardsContainer.innerHTML = '';
        
        if (theme === 'singing') {
            subDropdownContainer.innerHTML = `
                <select id="singing-dropdown">
                    <option>Music Type</option>
                    <option>Classical</option>
                    <option>Folk</option>
                    <option>Devotional</option>
                    <option>Cinematic</option>
                </select>
            `;
        } else if (theme === 'instruments') {
            subDropdownContainer.innerHTML = `
                <select id="instruments-dropdown">
                    <option>Instrument Type</option>
                    <option>Guitar</option>
                    <option>Piano</option>
                    <option>Flute</option>
                    <option>Tabala</option>
                    <option>Violin</option>
                </select>
            `;
            
            document.getElementById('instruments-dropdown').addEventListener('change', (e) => {
                if (e.target.value === 'Guitar') {
                    tutorCardsContainer.innerHTML = `
                        <div class="card">
                            <img src="shreya.jpeg" alt="Guitar Tutor 1" class="tutor-img">
                            <h3>Guitar Tutor 1</h3>
                            <p>Name: John Doe</p>
                            <p>Qualification: Music Degree</p>
                            <p>Age: 30</p>
                            <p>Description: Experienced tutor with 10 years of experience.</p>
                            <div class="button-group">
                                <button class="button" id="level-button">Level</button>
                                <button class="button" id="time-button">Time period</button>
                            </div>
                            <div class="dropdown" id="level-dropdown"></div>
                            <div class="dropdown" id="time-dropdown"></div>
                            <textarea id="custom-time" placeholder="Enter your custom time period" style="display: none;"></textarea>
                            <div id="enter-button" style="display: none;"><button class="button">Enter</button></div>
                            <button id="request-button" class="button" style="display: none;">Request</button>
                        </div>
                        <div class="card">
                            <img src="shreya.jpeg" alt="Guitar Tutor 2" class="tutor-img">
                            <h3>Guitar Tutor 2</h3>
                            <p>Name: Jane Smith</p>
                            <p>Qualification: Music Diploma</p>
                            <p>Age: 25</p>
                            <p>Description: Passionate about teaching guitar.</p>
                            <div class="button-group">
                                <button class="button" id="level-button">Level</button>
                                <button class="button" id="time-button">Time period</button>
                            </div>
                            <div class="dropdown" id="level-dropdown"></div>
                            <div class="dropdown" id="time-dropdown"></div>
                            <textarea id="custom-time" placeholder="Enter your custom time period" style="display: none;"></textarea>
                            <div id="enter-button" style="display: none;"><button class="button">Enter</button></div>
                            <button id="request-button" class="button" style="display: none;">Request</button>
                        </div>
                        <div class="card">
                            <img src="shreya.jpeg" alt="Guitar Tutor 3" class="tutor-img">
                            <h3>Guitar Tutor 3</h3>
                            <p>Name: Mike Johnson</p>
                            <p>Qualification: Guitar Certification</p>
                            <p>Age: 35</p>
                            <p>Description: Skilled guitarist with a love for music.</p>
                            <div class="button-group">
                                <button class="button" id="level-button">Level</button>
                                <button class="button" id="time-button">Time period</button>
                            </div>
                            <div class="dropdown" id="level-dropdown"></div>
                            <div class="dropdown" id="time-dropdown"></div>
                            <textarea id="custom-time" placeholder="Enter your custom time period" style="display: none;"></textarea>
                            <div id="enter-button" style="display: none;"><button class="button">Enter</button></div>
                            <button id="request-button" class="button" style="display: none;">Request</button>
                        </div>
                    `;
                    
                    document.querySelectorAll('.card').forEach(card => {
                        card.querySelector('#level-button').addEventListener('click', (e) => {
                            const levelDropdown = card.querySelector('#level-dropdown');
                            levelDropdown.innerHTML = `
                                <select>
                                    <option>Beginner level</option>
                                    <option>Intermediate Level</option>
                                    <option>Advance Level</option>
                                </select>
                            `;
                        });

                        card.querySelector('#time-button').addEventListener('click', (e) => {
                            const timeDropdown = card.querySelector('#time-dropdown');
                            timeDropdown.innerHTML = `
                                <select id="time-dropdown-select">
                                    <option>Select Time Period</option>
                                    <option value="1">1 month</option>
                                    <option value="2">2 months</option>
                                    <option value="3">3 months</option>
                                    <option value="4">4 months</option>
                                    <option value="5">5 months</option>
                                    <option value="6">6 months</option>
                                    <option value="7">7 months</option>
                                    <option value="8">8 months</option>
                                    <option value="9">9 months</option>
                                    <option value="10">10 months</option>
                                    <option value="11">11 months</option>
                                    <option value="12">12 months</option>
                                </select>
                            `;

                            timeDropdown.querySelector('#time-dropdown-select').addEventListener('change', (event) => {
                                const customTime = card.querySelector('#custom-time');
                                const enterButton = card.querySelector('#enter-button');
                                const requestButton = card.querySelector('#request-button');
                                
                                if (event.target.value === 'Custom') {
                                    customTime.style.display = 'block';
                                    enterButton.style.display = 'block';
                                    enterButton.addEventListener('click', () => {
                                        requestButton.style.display = 'block';
                                    });
                                } else {
                                    customTime.style.display = 'none';
                                    enterButton.style.display = 'none';
                                    requestButton.style.display = 'block';
                                }
                            });
                        });
                    });
                }
            });
        }
    });
});
