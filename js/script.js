const participants = [
    {
        name: "TheGrefg vs. WestCOL",
        description: "Main Event",
        img: 'img/grefg-vs-westcol.jpg'
    },
    {
        name: "YosoyPlex vs. El Mariana",
        img: 'img/yosoiplex-vs-elmariana.jpg'

    },
    {
        name: "Perxitaa vs. Gaspi",
        img: "https://via.placeholder.com/300x200?text=Perxitaa+vs+Gaspi"
    },
    {
        name: "Abby vs. Roro",
        img: "https://via.placeholder.com/300x200?text=Abby+vs+Roro"
    },
    {
        name: "Andoni vs. Carlos Belcast",
        img: "https://via.placeholder.com/300x200?text=Andoni+vs+Carlos"
    },
    {
        name: "Alana vs. Arigeli",
        img: "https://via.placeholder.com/300x200?text=Alana+vs+Arigeli"
    },
    {
        name: "ViruZz vs. Shelao",
        img: "https://via.placeholder.com/300x200?text=ViruZz+vs+Tomas"
    }
];

// hours
const schedule = [
    {
        time: "20:00",
        title: "Apertura del evento",
        description: "Bienvenida y presentación de los participantes"
    },
    {
        time: "20:30",
        title: "Primer combate",
        description: "Exhibición entre streamers invitados"
    },
    {
        time: "21:15",
        title: "Entrevistas",
        description: "Charlas con los participantes"
    },
    {
        time: "22:00",
        title: "Combate principal",
        description: "El evento más esperado de la noche"
    },
    {
        time: "22:45",
        title: "Sorpresa especial",
        description: "Algo que nadie espera"
    },
    {
        time: "23:30",
        title: "Cierre del evento",
        description: "Despedida y agradecimientos"
    }
];


function loadParticipants() {
    const container = document.querySelector('.participants-grid');
    container.innerHTML = '';

    const mainEvent = participants.find(p => p.description === "Main Event");
    const otherFights = participants.filter(p => p.description !== "Main Event");
    
    if (mainEvent) {
        const mainEventHTML = `
            <div class="main-event">
                <div class="participant-img" style="background-image: url(${mainEvent.img})"></div>
                <div class="participant-info">
                    <h3>${mainEvent.name}</h3>
                    <p>MAIN EVENT</p>
                </div>
            </div>
        `;
        container.innerHTML += mainEventHTML;
    }
    
    const fightsList = document.createElement('div');
    fightsList.className = 'fights-list';
    
    otherFights.forEach(fight => {
        const fightHTML = `
            <div class="fight-item">
                <img src="${fight.img}" alt="${fight.name}", background-size: cover, background-position: center>
                <h3>${fight.name}</h3>
            </div>
        `;
        fightsList.innerHTML += fightHTML;
    });
    
    container.appendChild(fightsList);
}

function loadSchedule() {
    const timeline = document.querySelector('.timeline');
    
    schedule.forEach((event, index) => {
        const eventElement = document.createElement('div');
        eventElement.className = `event ${index % 2 === 0 ? 'left' : 'right'}`;
        
        eventElement.innerHTML = `
            <div class="event-content">
                <h3>${event.time} - ${event.title}</h3>
                <p>${event.description}</p>
            </div>
        `;
        
        timeline.appendChild(eventElement);
    });
}

function updateCountdown() {
    const eventDate = new Date('July 25, 2025 20:00:00').getTime();
    const now = new Date().getTime();
    const distance = eventDate - now;
    
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    document.getElementById('days').innerHTML = days.toString().padStart(2, '0');
    document.getElementById('hours').innerHTML = hours.toString().padStart(2, '0');
    document.getElementById('minutes').innerHTML = minutes.toString().padStart(2, '0');
    document.getElementById('seconds').innerHTML = seconds.toString().padStart(2, '0');
    
    if (distance < 0) {
        clearInterval(countdownTimer);
        document.getElementById('countdown-timer').innerHTML = "<div>¡El evento ha comenzado!</div>";
    }
}

function setupContactForm() {
    const form = document.getElementById('contact-form');
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        alert(`Gracias ${name}, tu mensaje ha sido enviado. Te contactaremos pronto a ${email}`);
        form.reset();
    });
}

function setupSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        });
    });
}

function setupCTAbutton() {
    const ctaButton = document.getElementById('cta-button');
    
    ctaButton.addEventListener('click', function() {
        window.scrollTo({
            top: document.getElementById('entradas').offsetTop - 80,
            behavior: 'smooth'
        });
    });
}

document.addEventListener('DOMContentLoaded', function() {
    loadParticipants();
    loadSchedule();
    updateCountdown();
    setupContactForm();
    setupSmoothScrolling();
    setupCTAbutton();

    const countdownTimer = setInterval(updateCountdown, 1000);
});