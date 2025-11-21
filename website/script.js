
const darkModeToggle = document.getElementById('dark-mode-toggle');
const body = document.body;
function toggleDarkMode() {
   
    body.classList.toggle('dark-mode');
    
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
        darkModeToggle.textContent = "☀️ Light Mode";
    } else {
        localStorage.setItem('theme', 'light');
        darkModeToggle.textContent = "🌙 Dark Mode";
    }
}


if (darkModeToggle) {
    darkModeToggle.addEventListener('click', toggleDarkMode);
}


document.addEventListener('DOMContentLoaded', () => {
   
    
    
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        body.classList.add('dark-mode');
        
        if (darkModeToggle) {
             darkModeToggle.textContent = "☀️ Light Mode";
        }
    } else {
        
        if (darkModeToggle) {
             darkModeToggle.textContent = "🌙 Dark Mode";
        }
    }
});


const spotsContainer = document.getElementById('spots');
const regionFilter = document.getElementById('region-filter');


function toggleDarkMode() {
   
    body.classList.toggle('dark-mode');
    
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
        darkModeToggle.textContent = "☀️ Light Mode";
    } else {
        localStorage.setItem('theme', 'light');
        darkModeToggle.textContent = "🌙 Dark Mode";
    }
}


if (darkModeToggle) {
    darkModeToggle.addEventListener('click', toggleDarkMode);
}


document.addEventListener('DOMContentLoaded', () => {
   
    
    
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        body.classList.add('dark-mode');
        
        if (darkModeToggle) {
             darkModeToggle.textContent = "☀️ Light Mode";
        }
    } else {
        
        if (darkModeToggle) {
             darkModeToggle.textContent = "🌙 Dark Mode";
        }
    }
});



const touristSpots = [
    { 
        id: 1, 
        name: "Tashichho Dzong", 
        region: "Thimphu", 
        description: "A large fortress and Buddhist monastery near the Wang Chhu river, housing the throne room and government offices.",
        image_path: "/images/tashichho_dzong.jpg" 
    }, 
    { 
        id: 2, 
        name: "Tiger's Nest Monastery (Paro Taktsang)", 
        region: "Paro", 
        description: "An iconic sacred site perched precariously on a cliffside, a must-visit spiritual destination.",
        image_path: "images/tigers_nest.jpg" 
    },
    { 
        id: 3, 
        name: "Jakar Dzong", 
        region: "Bumthang", 
        description: "The fortress of the white bird, located on a ridge above the Chamkhar Valley in Bumthang.",
        image_path: "images/jakar_dzong.jpg" 
    }
];


function toggleDarkMode() {
    body.classList.toggle('dark-mode');
    
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
}


if (darkModeToggle) { 
    darkModeToggle.addEventListener('click', toggleDarkMode);
}



function createSpotCard(spot) {
    const card = document.createElement('div');
    card.classList.add('spot-card');
    
    card.addEventListener('click', () => {
        alert(`You clicked on: ${spot.name}. Location: ${spot.region}`);
    });

    card.innerHTML = `
        <img src="${spot.image_path}" alt="${spot.name} image">
        <div class="card-content">
            <h3>${spot.name}</h3>
            <p>${spot.description}</p>
            <span class="region-tag">${spot.region}</span>
        </div>
    `;
    return card;
}



function renderSpots(filterRegion = 'all') {
    spotsContainer.innerHTML = '';
    
   
    if (touristSpots.length === 0) {
        spotsContainer.innerHTML = '<p id="loading-message">Amazing places are yet to come !</p>';
        return;
    }

    const filteredSpots = touristSpots.filter(spot => 
        filterRegion === 'all' || spot.region === filterRegion
    );

    if (filteredSpots.length === 0) {
        spotsContainer.innerHTML = `<p>No destinations found in ${filterRegion}.</p>`;
        return;
    }

    filteredSpots.forEach(spot => {
        spotsContainer.appendChild(createSpotCard(spot));
    });
}



if (regionFilter) {
    regionFilter.addEventListener('change', (event) => {
        const selectedRegion = event.target.value;
        renderSpots(selectedRegion); 
    });
}



document.addEventListener('DOMContentLoaded', () => {
   
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        body.classList.add('dark-mode');
    }
    
    
    renderSpots('all');
});