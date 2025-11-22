const eventsNames = [
    'Dance',
    'Drama',
    'Fine Art',
    'Music',
    'Photography',
    'Fashion',
    'Oratory',
    'Quizzing',
    'Humour',
    'Films',
    'Miscellaneous'
];

const ALL_EVENTS = [
    {
        "category_name": "Dance",
        "events": [
            {
                "name": "Nrityanjali:Flok Dance Competition",
                "details": "Showcase your individual talent and mesmerize the audience with your moves. This is a solo dance competition.",
                "time": "2:00 PM",
                "venue": "Main Auditorium",
                "date_time": "2025-11-20",
                "contact": "Riya Sharma - 1234567890"
            },
            {
                "name": "Urban Roit:Street Dance Battle",
                "details": "Synchronize your steps and energies in this electrifying group dance competition.",
                "time": "4:00 PM",
                "venue": "Main Auditorium",
                "date_time": "2025-11-20",
                "contact": "Aarav Patel - 0987654321"
            },
            {
                "name": "Aghosh:The Blindfolded Dance",
                "details": "Synchronize your steps and energies in this electrifying group dance competition.",
                "time": "4:00 PM",
                "venue": "Main Auditorium",
                "date_time": "2025-11-20",
                "contact": "Aarav Patel - 0987654321"
            },
            {
                "name": "RasRang:RasDuo Dance Competition",
                "details": "Synchronize your steps and energies in this electrifying group dance competition.",
                "time": "4:00 PM",
                "venue": "Main Auditorium",
                "date_time": "2025-11-20",
                "contact": "Aarav Patel - 0987654321"
            }
        ]
    },
    {
        "category_name": "Music",
        "events": [
            {
                "name": "Battle of Bands",
                "details": "Let your voice be heard! A solo singing competition for all the aspiring singers.",
                "time": "3:00 PM",
                "venue": "Amphitheatre",
                "date_time": "2025-11-21",
                "contact": "Priya Singh - 1122334455"
            },
            {
                "name": "Musical Story telling",
                "details": "Rock the stage with your band. A competition for the best band performance.",
                "time": "6:00 PM",
                "venue": "Amphitheatre",
                "date_time": "2025-11-21",
                "contact": "Karan Gupta - 5566778899"
            },
            {
                "name": "Duo Singing Competition",
                "details": "Rock the stage with your band. A competition for the best band performance.",
                "time": "6:00 PM",
                "venue": "Amphitheatre",
                "date_time": "2025-11-21",
                "contact": "Karan Gupta - 5566778899"
            },
            {
                "name": "Antakshari",
                "details": "Rock the stage with your band. A competition for the best band performance.",
                "time": "6:00 PM",
                "venue": "Amphitheatre",
                "date_time": "2025-11-21",
                "contact": "Karan Gupta - 5566778899"
            },
            {
                "name":"The Rap Battle",
                "details": "Rock the stage with your band. A competition for the best band performance.",
                "time": "6:00 PM",
                "venue": "Amphitheatre",
                "date_time": "2025-11-21",
                "contact": "Karan Gupta - 5566778899"
            }
        ]
    },
    {
        "category_name": "Drama",
        "events": [
            {
                "name": "Eklaa Chalo",
                "details": "Let your voice be heard! A solo singing competition for all the aspiring singers.",
                "time": "3:00 PM",
                "venue": "Amphitheatre",
                "date_time": "2025-11-21",
                "contact": "Priya Singh - 1122334455"
            
             },
             {
                "name": "Mime Competition",
                "details": "Let your voice be heard! A solo singing competition for all the aspiring singers.",
                "time": "3:00 PM",
                "venue": "Amphitheatre",
                "date_time": "2025-11-21",
                "contact": "Priya Singh - 1122334455"
            },
            {
                "name": "Rangmanch-e-Sadak",
                "details": "Let your voice be heard! A solo singing competition for all the aspiring singers.",
                "time": "3:00 PM",
                "venue": "Amphitheatre",
                "date_time": "2025-11-21",
                "contact": "Priya Singh - 1122334455"
            },
            {
                "name": "Bollymania",
                "details": "Let your voice be heard! A solo singing competition for all the aspiring singers.",
                "time": "3:00 PM",
                "venue": "Amphitheatre",
                "date_time": "2025-11-21",
                "contact": "Priya Singh - 1122334455"
            },
        ]       
    },
    {
        "category_name": "Fine Art",
        "events": [
            {
                "name": "Voices Unbound:On Spotpoetry writing",
                "details": "Let your voice be heard! A solo singing competition for all the aspiring singers.",
                "time": "3:00 PM",
                "venue": "Amphitheatre",
                "date_time": "2025-11-21",
                "contact": "Priya Singh - 1122334455"
            },
            {
                "name": "Rangoli Competition",
                "details": "Let your voice be heard! A solo singing competition for all the aspiring singers.",
                "time": "3:00 PM",
                "venue": "Amphitheatre",
                "date_time": "2025-11-21",
                "contact": "Priya Singh - 1122334455"
            },{
                "name": "Face Painting",
                "details": "Let your voice be heard! A solo singing competition for all the aspiring singers.",
                "time": "3:00 PM",
                "venue": "Amphitheatre",
                "date_time": "2025-11-21",
                "contact": "Priya Singh - 1122334455"
            },{
                "name": "On Theme Painting",
                "details": "Let your voice be heard! A solo singing competition for all the aspiring singers.",
                "time": "3:00 PM",
                "venue": "Amphitheatre",
                "date_time": "2025-11-21",
                "contact": "Priya Singh - 1122334455"
            },
            {
                "name": "Model Representation",
                "details": "Creative minds bring concepts to life! Showcase your talent in model making based on a given theme.",
                "time": "3:00 PM",
                "venue": "Amphitheatre",
                "date_time": "2025-11-21",
                "contact": "Priya Singh - 1122334455"
            },
        ]
    },
    {
        "category_name": "Photography",
        "events": [
            {
                "name": "Photography Competition",
                "details": "Lens artists unite! Showcase your photography skills in this exciting competition.",
                "time": "3:00 PM",
                "venue": "Amphitheatre",
                "date_time": "2025-11-21",
                "contact": "Priya Singh - 1122334455"
            },
            {
                "name": "Theme Based Video Making",
                "details": "Creator craft your story! A video making competition based on a given theme.",
                "time": "3:00 PM",
                "venue": "Amphitheatre",
                "date_time": "2025-11-21",
                "contact": "Priya Singh - 1122334455"
            },
        ]
    },
    {
        "category_name": "Quizzing",
        "events": [
            {
                "name": "Genre Flip Challenge",
                "details": "Artist twist genre on the spot turning classics into unexpected masterpieces.",
                "time": "3:00 PM",
                "venue": "Amphitheatre",
                "date_time": "2025-11-21",
                "contact": "Priya Singh - 1122334455"
            },{
                "name": "Hydro Thrust",
                "details": "A Science-meet-fun challenge where quizzing meets engineering.",
                "time": "3:00 PM",
                "venue": "Amphitheatre",
                "date_time": "2025-11-21",
                "contact": "Priya Singh - 1122334455"
            },{
                "name": "Space Quiz",
                "details": "A cosmic Showdown testing the knowledge of participants on astronomy, space exploration, and celestial phenomena.",
                "time": "3:00 PM",
                "venue": "Amphitheatre",
                "date_time": "2025-11-21",
                "contact": "Priya Singh - 1122334455"
            },
        ]
    },{
        "category_name": "Oratory",
        "events": [
            {
                "name": "Behas:English debate competition",
                "details": "A battle filed of ideas where words are weapons. Participate in this exciting English debate competition and showcase your oratory skills.",
                "time": "3:00 PM",
                "venue": "Amphitheatre",
                "date_time": "2025-11-21",
                "contact": "Priya Singh - 1122334455"
            },
            {
                "name": "Sansad '25:The youth parliament",
                "details": "A real-time simulation where young minds shape imaginary policies with real conviction.",
                "time": "3:00 PM",
                "venue": "Amphitheatre",
                "date_time": "2025-11-21",
                "contact": "Priya Singh - 1122334455"
            },
            {
                "name": "VicharManthan: Hindi Debate",
                "details": "A fiery Clash of Thoughts where eloquence meets conviction in this Hindi debate competition.",
                "time": "3:00 PM",
                "venue": "Amphitheatre",
                "date_time": "2025-11-21",
                "contact": "Priya Singh - 1122334455"
            },
        ]
    }
    // Add other event categories here following the same structure
];


const eventsImgUrl = [
    'images/events/dance.svg',
    'images/events/drama.svg',
    'images/events/fine arts.svg',
    'images/events/music.svg',
    'images/events/photography.svg',
    'images/events/fashion.svg',
    'images/events/oratory.svg',
    'images/events/quizzing.svg',
    'images/events/humour.svg',
    'images/events/film fest.svg',
    'images/events/misc.svg'
];

const eventsContainer = document.getElementsByClassName("events-container")[0];

const numberOfEvents = eventsNames.length;
let eventIndex = 1;

const createEvent = (parentAppend) => {
    for (j = 0; j < numberOfEvents; j++) {
        let eventsCard = document.createElement('div');
        eventsCard.className = "events-card";
        if (j == 1) {
            eventsCard.classList.add('active');
        }

        let eventsCardFront = document.createElement('div');
        eventsCardFront.className = "events-card-front";

        let eventsNameContainer = document.createElement('div');
        eventsNameContainer.className = "event-name";
        let eventsName = document.createTextNode(eventsNames[j]);
        eventsNameContainer.appendChild(eventsName);
        eventsCardFront.appendChild(eventsNameContainer);

        let eventsCardFrontImg = document.createElement('div');
        eventsCardFrontImg.className = "event-img"
        eventsCardFrontImg.setAttribute('style', "background-image: url('" + eventsImgUrl[j] + "')");
        eventsCardFront.appendChild(eventsCardFrontImg);

        let seperator = document.createElement('hr');
        seperator.align = 'center';
        seperator.width = '35%';
        seperator.size = '5px';
        seperator.color = '#9A6D9A';
        eventsCardFront.appendChild(seperator);

        let eventsCardFrontLink = document.createElement('div');
        eventsCardFrontLink.className = "event-link";
        eventsCardFrontLink.innerHTML = "View Details >";
        eventsCardFront.appendChild(eventsCardFrontLink);

        eventsCard.appendChild(eventsCardFront);

        parentAppend.appendChild(eventsCard);
        const eventType = eventsNames[j];
        eventsCardFrontLink.addEventListener('click', () => {
            openAllEvents(eventType)
        });
    }
}

const createEventDots = () => {
    const dotsContainer = document.getElementsByClassName('events-nav-dots')[0];
    for (i = 0; i < ((window.innerWidth > 600) ? (numberOfEvents - 2) : numberOfEvents); i++) {
        let dot = document.createElement('div');
        dot.className = "event-nav-dot";
        dot.id = (i + 1);
        dot.setAttribute('onclick', 'navigateEvent(this.id)');
        if (i === 0) {
            dot.classList.add('active-dot');
        }
        dotsContainer.appendChild(dot);
    }
}

createEventDots();
createEvent(eventsContainer);
createEvent(document.getElementsByClassName('all-events-type-container')[0]);




const changeEventSet = () => {
    const limit = numberOfEvents;
    if (eventIndex < limit) {
        eventIndex++;
        if (window.innerWidth > 600) {
            eventsContainer.style.transform = "translate(" + (-27.15 * (eventIndex - 1)) + "%)";
        } else {
            eventsContainer.style.transform = "translate(" + (-100 * (eventIndex - 1)) + "%)";
        }
        (eventIndex == numberOfEvents) ? null : document.getElementsByClassName('events-card')[eventIndex].classList.add('active');
        for (dot of document.getElementsByClassName('event-nav-dot')) {
            dot.classList.remove('active-dot');
        }
        document.querySelectorAll('.events-nav-dots > .event-nav-dot')[eventIndex - 1].classList.add('active-dot')
    } else {
        eventIndex = 0;
        changeEventSet();
    }
}

const navigateEvent = (dotIndex) => {
    if(dotIndex <= 0) {
        eventIndex = ((window.innerWidth > 600) ? (numberOfEvents - 3) : (numberOfEvents - 1));;
        changeEventSet();
        return;
    }
    if(dotIndex > ((window.innerWidth > 600) ? (numberOfEvents - 2) : numberOfEvents)) {
        eventIndex = 0;
        changeEventSet();
        return;
    }
    if (eventIndex != dotIndex) {
        (eventIndex == numberOfEvents) ? null : document.getElementsByClassName('events-card')[eventIndex].classList.remove('active');
        eventIndex = dotIndex - 1;
        changeEventSet();
    }
}


if (window.innerWidth < 500) {
    let initialXContact = null;
    let initialYContact = null;

    function startTouchContact(e) {
        initialXContact = e.touches[0].clientX;
        initialYContact = e.touches[0].clientY;
    };

    function moveTouchContact(e) {

        if (initialXContact === null) {
            return;
        }

        if (initialYContact === null) {
            return;
        }

        let currentX = e.touches[0].clientX;
        let currentY = e.touches[0].clientY;

        let diffX = initialXContact - currentX;
        let diffY = initialYContact - currentY;

        if (Math.abs(diffX) > Math.abs(diffY)) {
            // sliding horizontally
            if (diffX > 0) {
                // swiped leftevent.events.splice(i, 1);
                navigateEvent(eventIndex + 1);
            } else {
                // swiped right
                navigateEvent(eventIndex - 1);
            }
        }
        initialXContact = null;
        initialYContact = null;

        e.preventDefault();

    };

    document.getElementsByClassName('events')[0].addEventListener("touchstart", startTouchContact, false);
    document.getElementsByClassName('events')[0].addEventListener("touchmove", moveTouchContact, false);
}


function openAllEvents(type) {
    document.getElementById('event-details').style.display = 'flex';
    document.getElementsByClassName('event-type')[0].innerHTML = type;
    setTimeout(() => {
        document.getElementById('event-details').style.opacity = 1;
    }, 10);

    document.getElementsByClassName('all-events')[0].innerHTML = '';

    const eventNames = [];
    
    ALL_EVENTS.map(event => {
        if (event.category_name == type) {
            event.events.map(eve => {
                eventNames.push(eve.name);
            });
        }
        if (type == 'Miscellaneous') {
            if (event.category_name == 'Entertainment') {
                event.events.map(eve => {
                    eventNames.push(eve.name);
                });
            }
            if (event.category_name == 'Writing') {
                event.events.map(eve => {
                    eventNames.push(eve.name);
                });
            }
        }
    });
    
    let expSet = false;
    let tripSet  = false;
    eventNames.map(eventName => {
        if (!eventName.includes('Exposure') && !eventName.includes('TRIPPED: A VR Gaming Event')) {
            const event = document.createElement('div');
            const eventText = document.createElement('span');
            eventText.innerHTML = eventName;
            event.className = 'event';
            event.appendChild(eventText);
            document.getElementsByClassName('all-events')[0].appendChild(event);
            eventText.addEventListener('click', () => viewEventDetails(eventName, type));
        } else {
            console.log(eventName, expSet)
            if (eventName.includes('Exposure')) {
                if (!expSet) {
                    expSet = true;
                    const event = document.createElement('div');
                    const eventText = document.createElement('span');
                    eventText.innerHTML = eventName;
                    event.className = 'event';
                    event.appendChild(eventText);
                    document.getElementsByClassName('all-events')[0].appendChild(event);
                    eventText.addEventListener('click', () => viewEventDetails(eventName, type));
                }
            }
            if (eventName.includes('TRIPPED: A VR Gaming Event')) {
                if (!tripSet) {
                    tripSet = true;
                    const event = document.createElement('div');
                    const eventText = document.createElement('span');
                    eventText.innerHTML = eventName;
                    event.className = 'event';
                    event.appendChild(eventText);
                    document.getElementsByClassName('all-events')[0].appendChild(event);
                    eventText.addEventListener('click', () => viewEventDetails(eventName, type));
                }
            }
        }
    });
}

function closeEventDetails() {
    document.getElementById('event-details').style.opacity = 0;
    setTimeout(() => {
        document.getElementById('all-events-tab').style.opacity = 1;
        document.getElementById('event-details-tab').style.opacity = 0;
        document.getElementById('all-events-tab').style.display = 'flex';
        document.getElementById('event-details-tab').style.display = 'none';
        document.getElementById('event-details').style.display = 'none';
    }, 500);
}

function viewEventDetails(eventName, eventType) {
    document.getElementById('all-events-tab').style.opacity = 0;
    setTimeout(() => {
        document.getElementById('all-events-tab').style.display = 'none';
        document.getElementById('event-details-tab').style.display = 'flex';

        document.getElementsByClassName('event-detail-name')[0].innerHTML = eventName;

        let foundEvent = null;

        // Find the category that matches the eventType
        const category = ALL_EVENTS.find(cat => cat.category_name === eventType);

        if (category) {
            // Find the event within that category
            foundEvent = category.events.find(eve => eve.name === eventName);
        } else if (eventType === 'Miscellaneous') {
            // Handle Miscellaneous category by searching in others
            const miscCategories = ['Entertainment', 'Writing']; 
            for (const catName of miscCategories) {
                const miscCat = ALL_EVENTS.find(cat => cat.category_name === catName);
                if (miscCat) {
                    foundEvent = miscCat.events.find(eve => eve.name === eventName);
                    if (foundEvent) break;
                }
            }
        }

        if (foundEvent) {
            changeEventData(foundEvent);
        } else {
            // If no event is found, display a 'not found' message
            changeEventData({
                date_time: '',
                time: 'Not Found',
                venue: 'Not Found',
                details: 'Details for this event could not be found.',
                contact: ''
            });
        }
        
        setTimeout(() => {
            document.getElementById('event-details-tab').style.opacity = 1;
        }, 10);
    }, 250);
}

function backEventDetails() {
    document.getElementById('event-details-tab').style.opacity = 0;
    setTimeout(() => {
        document.getElementById('event-details-tab').style.display = 'none';
        document.getElementById('all-events-tab').style.display = 'flex';
        setTimeout(() => {
            document.getElementById('all-events-tab').style.opacity = 1;
        }, 10);
    }, 250);
}

function changeEventData(event) {
    if (!event) {
        return;
    }
    document.querySelector('.event-day > span').innerHTML = event.date_time ? event.date_time.substr(0, 10) : 'TBA';
    document.querySelector('.event-time > span').innerHTML = event.time || 'TBA';
    document.querySelector('.event-venue > span').innerHTML = event.venue || 'TBA';
    
    document.querySelector('.event-description').innerHTML = event.details || 'No description available.';
    
    const contactElement = document.querySelectorAll('.event-contact > div')[1];
    contactElement.innerHTML = event.contact || 'NA';
}


function showAllEvents() {
    document.getElementsByClassName('all-events-type')[0].style.display = 'block';
    setTimeout(() => {
        document.getElementsByClassName('all-events-type')[0].style.opacity = 1;
    }, 10)
}

function backAllEvents() {
    document.getElementsByClassName('all-events-type')[0].style.opacity = 0;
    setTimeout(() => {
        document.getElementsByClassName('all-events-type')[0].style.display = 'none';
    }, 500)
}