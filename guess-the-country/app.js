/* ==========================================================================
   CHRONO-QUEST GAME ENGINE (app.js)
   ========================================================================== */

// Country Code to Name Dictionary (177 codes from the SVG map)
const countryNames = {
    "ad": "Andorra",
    "ae": "United Arab Emirates",
    "af": "Afghanistan",
    "ag": "Antigua and Barbuda",
    "ai": "Anguilla",
    "al": "Albania",
    "am": "Armenia",
    "ao": "Angola",
    "ar": "Argentina",
    "as": "American Samoa",
    "at": "Austria",
    "au": "Australia",
    "aw": "Aruba",
    "ax": "Aland Islands",
    "az": "Azerbaijan",
    "ba": "Bosnia and Herzegovina",
    "bb": "Barbados",
    "bd": "Bangladesh",
    "be": "Belgium",
    "bf": "Burkina Faso",
    "bg": "Bulgaria",
    "bh": "Bahrain",
    "bi": "Burundi",
    "bj": "Benin",
    "bl": "Saint Barthelemy",
    "bm": "Bermuda",
    "bn": "Brunei",
    "bo": "Bolivia",
    "bq": "Bonaire,  Saint Eustachius and Saba",
    "br": "Brazil",
    "bs": "Bahamas",
    "bt": "Bhutan",
    "bv": "Bouvet Island",
    "bw": "Botswana",
    "by": "Belarus",
    "bz": "Belize",
    "ca": "Canada",
    "cc": "Cocos  (Keeling)  Islands",
    "cd": "Democratic Republic of the Congo",
    "cf": "Central African Republic",
    "cg": "Republic of the Congo",
    "ch": "Switzerland",
    "ci": "Ivory Coast",
    "ck": "Cook Islands",
    "cl": "Chile",
    "cm": "Cameroon",
    "cn": "China",
    "co": "Colombia",
    "cr": "Costa Rica",
    "cu": "Cuba",
    "cv": "Cape Verde",
    "cw": "Curaçao",
    "cx": "Christmas Island",
    "cy": "Cyprus",
    "cz": "Czech Republic",
    "de": "Germany",
    "dj": "Djibouti",
    "dk": "Denmark",
    "dm": "Dominica",
    "do": "Dominican Republic",
    "dz": "Algeria",
    "ec": "Ecuador",
    "ee": "Estonia",
    "eg": "Egypt",
    "eh": "Western Sahara",
    "er": "Eritrea",
    "es": "Spain",
    "et": "Ethiopia",
    "fi": "Finland",
    "fj": "Fiji",
    "fk": "Falkland Islands",
    "fm": "Federated States of Micronesia",
    "fo": "Faroe Islands",
    "fr": "France",
    "ga": "Gabon",
    "gb": "United Kingdom",
    "gd": "Grenada",
    "ge": "Georgia",
    "gf": "French Guiana",
    "gg": "Guernsey",
    "gh": "Ghana",
    "gi": "Gibraltar",
    "gl": "Greenland",
    "gm": "Gambia",
    "gn": "Guinea",
    "go": "Glorioso Islands",
    "gp": "Guadeloupe",
    "gq": "Equatorial Guinea",
    "gr": "Greece",
    "gs": "South Georgia and South Sandwich Islands",
    "gt": "Guatemala",
    "gu": "Guam",
    "gw": "Guinea-Bissau",
    "gy": "Guyana",
    "hk": "Hong Kong",
    "hm": "Heard Island and McDonald Islands",
    "hn": "Honduras",
    "hr": "Croatia",
    "ht": "Haiti",
    "hu": "Hungary",
    "id": "Indonesia",
    "ie": "Ireland",
    "il": "Israel",
    "im": "Isle of Man",
    "in": "India",
    "io": "British Indian Ocean Territory",
    "iq": "Iraq",
    "ir": "Iran",
    "is": "Iceland",
    "it": "Italy",
    "je": "Jersey",
    "jm": "Jamaica",
    "jo": "Jordan",
    "jp": "Japan",
    "ju": "Juan De Nova Island",
    "ke": "Kenya",
    "kg": "Kyrgyzstan",
    "kh": "Cambodia",
    "ki": "Kiribati",
    "km": "Comoros",
    "kn": "Saint Kitts and Nevis",
    "kp": "North Korea",
    "kr": "South Korea",
    "kw": "Kuwait",
    "ky": "Cayman Islands",
    "kz": "Kazakhstan",
    "la": "Laos",
    "lb": "Lebanon",
    "lc": "Saint Lucia",
    "li": "Liechtenstein",
    "lk": "Sri Lanka",
    "lr": "Liberia",
    "ls": "Lesotho",
    "lt": "Lithuania",
    "lu": "Luxembourg",
    "lv": "Latvia",
    "ly": "Libya",
    "ma": "Morocco",
    "mc": "Monaco",
    "md": "Moldova",
    "me": "Montenegro",
    "mf": "Saint Martin",
    "mg": "Madagascar",
    "mh": "Marshall Islands",
    "mk": "Macedonia",
    "ml": "Mali",
    "mm": "Myanmar",
    "mn": "Mongolia",
    "mo": "Macau",
    "mp": "Northern Mariana Islands",
    "mq": "Martinique",
    "mr": "Mauritania",
    "ms": "Montserrat",
    "mt": "Malta",
    "mu": "Mauritius",
    "mv": "Maldives",
    "mw": "Malawi",
    "mx": "Mexico",
    "my": "Malaysia",
    "mz": "Mozambique",
    "na": "Namibia",
    "nc": "New Caledonia",
    "ne": "Niger",
    "nf": "Norfolk Island",
    "ng": "Nigeria",
    "ni": "Nicaragua",
    "nl": "Netherlands",
    "no": "Norway",
    "np": "Nepal",
    "nr": "Nauru",
    "nu": "Niue",
    "nz": "New Zealand",
    "om": "Oman",
    "pa": "Panama",
    "pe": "Peru",
    "pf": "French Polynesia",
    "pg": "Papua New Guinea",
    "ph": "Philippines",
    "pk": "Pakistan",
    "pl": "Poland",
    "pm": "Saint Pierre and Miquelon",
    "pn": "Pitcairn Islands",
    "pr": "Puerto Rico",
    "ps": "Palestinian Territories",
    "pt": "Portugal",
    "pw": "Palau",
    "py": "Paraguay",
    "qa": "Qatar",
    "re": "Reunion",
    "ro": "Romania",
    "rs": "Serbia",
    "ru": "Russia",
    "rw": "Rwanda",
    "sa": "Saudi Arabia",
    "sb": "Solomon Islands",
    "sc": "Seychelles",
    "sd": "Sudan",
    "se": "Sweden",
    "sg": "Singapore",
    "sh": "Saint Helena",
    "si": "Slovenia",
    "sj": "Svalbard and Jan Mayen",
    "sk": "Slovakia",
    "sl": "Sierra Leone",
    "sm": "San Marino",
    "sn": "Senegal",
    "so": "Somalia",
    "sr": "Suriname",
    "ss": "South Sudan",
    "st": "Sao Tome and Principe",
    "sv": "El Salvador",
    "sx": "Saint Martin",
    "sy": "Syria",
    "sz": "Swaziland",
    "tc": "Turks and Caicos Islands",
    "td": "Chad",
    "tf": "French Southern and Antarctic Lands",
    "tg": "Togo",
    "th": "Thailand",
    "tj": "Tajikistan",
    "tk": "Tokelau",
    "tl": "Timor-Leste",
    "tm": "Turkmenistan",
    "tn": "Tunisia",
    "to": "Tonga",
    "tr": "Turkey",
    "tt": "Trinidad and Tobago",
    "tv": "Tuvalu",
    "tw": "Taiwan",
    "tz": "Tanzania",
    "ua": "Ukraine",
    "ug": "Uganda",
    "um-dq": "Jarvis Island",
    "um-fq": "Baker Island",
    "um-hq": "Howland Island",
    "um-jq": "Johnston Atoll",
    "um-mq": "Midway Islands",
    "um-wq": "Wake Island",
    "us": "United States",
    "uy": "Uruguay",
    "uz": "Uzbekistan",
    "va": "Vatican City",
    "vc": "Saint Vincent and the Grenadines",
    "ve": "Venezuela",
    "vg": "British Virgin Islands",
    "vi": "US Virgin Islands",
    "vn": "Vietnam",
    "vu": "Vanuatu",
    "wf": "Wallis and Futuna",
    "ws": "Samoa",
    "xk": "Kosovo",
    "ye": "Yemen",
    "yt": "Mayotte",
    "za": "South Africa",
    "zm": "Zambia",
    "zw": "Zimbabwe"
};

// Explicit overrides from the user's reference map, optimized for adjacent country contrast
const mapColors = {
    // North America
    "gl": "#5680b5", // Greenland (light steel blue)
    "ca": "#8b2635", // Canada (maroon/red)
    "us": "#1b2a4a", // USA (dark navy)
    "mx": "#b35d49", // Mexico (terracotta) - contrasted with US navy
    
    // South America
    "co": "#fcd33f", // Colombia (yellow)
    "ve": "#ff8da1", // Venezuela (pink)
    "ve_1": "#ff8da1", 
    "gy": "#ff8da1", // Guyana (pink)
    "ec": "#e89e3a", // Ecuador (gold)
    "pe": "#802951", // Peru (magenta)
    "bo": "#fcd33f", // Bolivia (yellow) - contrasted with Peru/Brazil
    "br": "#b35d49", // Brazil (terracotta)
    "py": "#e89e3a", // Paraguay (gold)
    "uy": "#7785a6", // Uruguay (light slate blue)
    "ar": "#526a80", // Argentina (slate blue-grey)
    "cl": "#2d3765", // Chile (dark navy-blue)
    
    // Eurasia / Africa
    "ru": "#454b9d", // Russia (royal purple/blue)
    "cn": "#26292b", // China (dark grey)
    "in": "#526a80", // India (slate blue-grey)
    "pk": "#c28946", // Pakistan (ochre) - contrasted with India/Iran
    "ir": "#5c4c6b", // Iran (dark purple)
    "af": "#1f5951", // Afghanistan (teal)
    "kz": "#1f5951", // Kazakhstan (dark teal)
    "mn": "#c28946", // Mongolia (ochre)
    "jp": "#7a2155", // Japan (plum)
    
    // Southeast Asia & Oceania (contrasted)
    "my": "#5c4c6b", // Malaysia (dark purple) - contrasted with Indonesia/Thailand
    "id": "#c28946", // Indonesia (amber/ochre) - contrasted with Malaysia/PNG/Australia
    "pg": "#8b2635", // Papua New Guinea (maroon) - contrasted with Indonesia
    "bn": "#fcd33f", // Brunei (yellow) - contrasted with Malaysia
    "ph": "#c75485", // Philippines (rose/magenta)
    "au": "#2b3e42", // Australia (slate green-grey)
    "nz": "#1b2a4a", // New Zealand (dark navy)
    "sb": "#fcd33f", // Solomon Islands (yellow)
    
    // Mainland SE Asia
    "th": "#fcd33f", // Thailand (yellow)
    "vn": "#b35d49", // Vietnam (terracotta)
    "kh": "#1f5951", // Cambodia (teal)
    "la": "#604e7a", // Laos (purple)
    "mm": "#526a80", // Myanmar (blue-grey)
    "bd": "#ff8da1", // Bangladesh (pink)
    "bt": "#fcd33f", // Bhutan (yellow)
    
    // Europe
    "pt": "#5680b5", // Portugal (light blue) - contrasted with Spain yellow
    "es": "#f7c844", // Spain (yellow)
    "fr": "#bf2c37", // France (red)
    "se": "#596c9e", // Sweden (blue-grey)
    "no": "#604e7a", // Norway (purple)
    "fi": "#c75485", // Finland (rose/magenta)
    "gb": "#3b5a8f", // United Kingdom (royal blue)
    "ua": "#bf3d77", // Ukraine (magenta)
    "pl": "#cfab3a", // Poland (gold)
    "de": "#346e8c", // Germany (teal-blue)
    "it": "#c4405a", // Italy (raspberry red)
    "lt": "#5680b5", // Lithuania (light blue)
    
    // Central America & Caribbean
    "pa": "#ff8da1", // Panama (pink)
    "gt": "#ff8da1", // Guatemala (pink)
    "hn": "#fcd33f", // Honduras (yellow)
    
    // Africa
    "ma": "#ff8da1"  // Morocco (pink)
};

// Dynamic Palette of matching colors for remaining countries
const countryColorPalette = [
    "#8b2635", "#1b2a4a", "#5680b5", "#b35d49", "#26292b",
    "#526a80", "#2b3e42", "#7785a6", "#8f583e", "#404a3e",
    "#2f5950", "#767082", "#40304a", "#344234", "#5c4c6b",
    "#1f5951", "#c28946", "#f7c844", "#bf2c37", "#596c9e",
    "#604e7a", "#c75485", "#3b5a8f", "#bf3d77", "#cfab3a",
    "#346e8c", "#c4405a", "#7a2155", "#7d1822"
];

// Game State Machine
let gameState = {
    history: {}, // Maps countryCode -> { status: 'correct' | 'failed', attemptsUsed: number }
    activeCountryId: null,
    activeChances: 2
};

// Flag Emojis generator helper
function getFlagEmoji(countryCode) {
    if (countryCode === "_somaliland") return "🇸🇴";
    const codePoints = countryCode
        .toUpperCase()
        .split('')
        .map(char => 127397 + char.charCodeAt(0));
    try {
        return String.fromCodePoint(...codePoints);
    } catch (e) {
        return "🌐";
    }
}

// Stable hashing function to assign custom static colors to countries
function assignStableColor(countryCode) {
    // Check if we have an explicit override mapping from the user's reference map
    if (mapColors[countryCode]) {
        return mapColors[countryCode];
    }
    
    // Otherwise fallback to hashed selection
    let hash = 0;
    for (let i = 0; i < countryCode.length; i++) {
        hash = countryCode.charCodeAt(i) + ((hash << 5) - hash);
    }
    const colorIndex = Math.abs(hash) % countryColorPalette.length;
    return countryColorPalette[colorIndex];
}

// Initialize Single World Map
function initMaps() {
    const loader = document.getElementById("map-loader");
    const container = document.getElementById("map-viewport");
    
    if (container) {
        container.innerHTML = WORLD_MAP_SVG;
        
        const svg = container.querySelector("svg");
        if (svg) {
            svg.setAttribute("viewBox", "0 0 1010 666");
            svg.setAttribute("width", "100%");
            svg.setAttribute("height", "100%");
            svg.removeAttribute("id");
            
            // Event Delegation: Attach single click listener to the SVG element
            svg.addEventListener("click", (e) => {
                const countryElement = e.target.closest('path[id], g[id]');
                if (countryElement) {
                    const countryId = countryElement.getAttribute("id");
                    if (countryId && countryNames[countryId]) {
                        e.stopPropagation();
                        handleCountryClick(countryId);
                    }
                }
            });
        }
    }

    // Color all countries based on their ID on startup
    document.querySelectorAll(".map-viewport svg path, .map-viewport svg g").forEach(element => {
        const countryId = element.getAttribute("id");
        if (countryId && countryNames[countryId]) {
            if (element.tagName.toLowerCase() === 'path') {
                element.style.fill = assignStableColor(countryId);
            } else {
                const childPaths = element.querySelectorAll("path");
                childPaths.forEach(path => {
                    path.style.fill = assignStableColor(countryId);
                });
            }
        }
    });

    if (loader) loader.style.display = "none";
}

// Click callback for countries
function handleCountryClick(countryId) {
    const countryData = gameState.history[countryId];
    
    if (countryData) {
        // Country has already been played (locked in current round)
        return;
    } else {
        // Country is unplayed
        launchQuiz(countryId);
    }
}

// Launch Quiz Modal
function launchQuiz(countryId) {
    gameState.activeCountryId = countryId;
    gameState.activeChances = 1; // Only allowed a single guess!
    
    // Highlight the active country on all maps
    clearPulseHighlight();
    document.querySelectorAll(`.map-viewport svg #${countryId}, .map-viewport svg [id="${countryId}"]`).forEach(elem => {
        elem.classList.add("active-pulse");
    });
    
    const modal = document.getElementById("quiz-modal");
    const choicesContainer = document.getElementById("choices-container");
    const feedback = document.getElementById("quiz-feedback");
    const footer = document.getElementById("modal-footer");
    
    // Reset view elements
    feedback.textContent = "";
    feedback.className = "quiz-feedback";
    footer.style.display = "none";
    
    // Generate choices
    const choices = generateChoices(countryId);
    choicesContainer.innerHTML = "";
    
    choices.forEach(choiceName => {
        const button = document.createElement("button");
        button.className = "choice-btn";
        button.innerHTML = `<span>${choiceName}</span><span class="indicator"></span>`;
        button.addEventListener("click", () => handleChoiceSelection(button, choiceName));
        choicesContainer.appendChild(button);
    });
    
    modal.style.display = "flex";
}

// Generate multiple choices (1 correct, 4 random distractors)
function generateChoices(correctCode) {
    const correctName = countryNames[correctCode];
    const choices = [correctName];
    
    // Get all other codes
    const otherCodes = Object.keys(countryNames).filter(code => code !== correctCode);
    
    // Shuffle and pick 4
    const shuffled = otherCodes.sort(() => 0.5 - Math.random());
    const pickedDistractors = [];
    
    for (let i = 0; i < shuffled.length && pickedDistractors.length < 4; i++) {
        const dName = countryNames[shuffled[i]];
        if (!pickedDistractors.includes(dName)) {
            pickedDistractors.push(dName);
        }
    }
    
    choices.push(...pickedDistractors);
    
    // Shuffle the final list
    return choices.sort(() => 0.5 - Math.random());
}

// Choice Button Select Callback
function handleChoiceSelection(button, selectedName) {
    if (gameState.activeChances <= 0) return; // Prevent double clicking after failure
    
    const correctName = countryNames[gameState.activeCountryId];
    const feedback = document.getElementById("quiz-feedback");
    
    // Disable all options immediately to prevent double tapping
    gameState.activeChances = 0; 
    
    const buttons = document.querySelectorAll(".choice-btn");
    buttons.forEach(btn => {
        btn.disabled = true;
    });

    if (selectedName === correctName) {
        // CORRECT GUESS
        button.classList.add("correct-choice");
        button.querySelector(".indicator").textContent = "✓";
        feedback.textContent = "Correct! Well done.";
        feedback.className = "quiz-feedback text-success";
        
        // Update game state
        gameState.history[gameState.activeCountryId] = {
            status: 'correct',
            attemptsUsed: 1
        };
        
        // Render success coloring on map (turns white in CSS)
        updateCountryMapColor(gameState.activeCountryId, 'correct');
        addCountryLabel(gameState.activeCountryId); // Add text label
        saveGame();
        updateScoreboard();
        
        // Auto-close quiz after 1s
        setTimeout(() => {
            closeQuizModal();
        }, 1000);
        
    } else {
        // INCORRECT GUESS (Single pick failed)
        button.classList.add("wrong-choice");
        button.querySelector(".indicator").textContent = "✗";
        
        // Shake modal card
        const card = document.querySelector("#quiz-modal .modal-card");
        card.classList.add("shake");
        setTimeout(() => card.classList.remove("shake"), 400);
        
        feedback.textContent = `Incorrect. The correct answer was ${correctName}.`;
        feedback.className = "quiz-feedback text-danger";
        
        // Highlight the correct choice button
        buttons.forEach(btn => {
            if (btn.querySelector("span").textContent === correctName) {
                btn.classList.add("correct-choice");
                btn.querySelector(".indicator").textContent = "✓";
            }
        });
        
        // Save state as failed
        gameState.history[gameState.activeCountryId] = {
            status: 'failed',
            attemptsUsed: 1
        };
        
        // Color map white for incorrect guess (turns white in CSS)
        updateCountryMapColor(gameState.activeCountryId, 'failed');
        addRedCross(gameState.activeCountryId); // Add Red diagonal cross
        saveGame();
        updateScoreboard();
        
        // Show close button
        document.getElementById("modal-footer").style.display = "flex";
    }
}

// Color country on all map slices
function updateCountryMapColor(countryId, status) {
    document.querySelectorAll(`.map-viewport svg #${countryId}, .map-viewport svg [id="${countryId}"]`).forEach(elem => {
        elem.classList.remove("correct", "failed", "active-pulse");
        if (status === 'correct') {
            elem.classList.add("correct");
        } else if (status === 'failed') {
            elem.classList.add("failed");
        }
    });
}

// Remove pulse animations
function clearPulseHighlight() {
    document.querySelectorAll(".active-pulse").forEach(elem => {
        elem.classList.remove("active-pulse");
    });
}

// Close quiz modal helper
function closeQuizModal() {
    document.getElementById("quiz-modal").style.display = "none";
    clearPulseHighlight();
    gameState.activeCountryId = null;
}

// Reset country state to play again
function resetCountryState(countryId) {
    delete gameState.history[countryId];
    
    // Reset map color to default
    document.querySelectorAll(`.map-viewport svg #${countryId}, .map-viewport svg [id="${countryId}"]`).forEach(elem => {
        elem.classList.remove("correct", "failed", "active-pulse");
    });
    
    removeCountryLabel(countryId); // Remove label text
    removeRedCross(countryId);     // Remove red diagonal cross
    saveGame();
    updateScoreboard();
}

// Add SVG red diagonal cross for failed countries
function addRedCross(countryId) {
    // Remove existing labels and crosses first
    removeCountryLabel(countryId);
    removeRedCross(countryId);
    
    const elements = document.querySelectorAll(`.map-viewport svg #${countryId}, .map-viewport svg [id="${countryId}"]`);
    
    elements.forEach(elem => {
        const svg = elem.closest("svg");
        if (!svg) return;
        
        try {
            const bbox = elem.getBBox();
            if (bbox.width > 0 && bbox.height > 0) {
                const x = bbox.x + bbox.width / 2;
                const y = bbox.y + bbox.height / 2;
                
                // Create group container for the cross
                const g = document.createElementNS("http://www.w3.org/2000/svg", "g");
                g.setAttribute("class", "map-country-cross");
                g.setAttribute("data-country-id", countryId);
                
                // Size of cross proportional to bounding box
                const size = Math.max(3.5, Math.min(9, bbox.width / 5));
                
                // Line 1: Top-Left to Bottom-Right
                const line1 = document.createElementNS("http://www.w3.org/2000/svg", "line");
                line1.setAttribute("x1", x - size);
                line1.setAttribute("y1", y - size);
                line1.setAttribute("x2", x + size);
                line1.setAttribute("y2", y + size);
                line1.setAttribute("stroke-width", Math.max(1, size / 3));
                
                // Line 2: Top-Right to Bottom-Left
                const line2 = document.createElementNS("http://www.w3.org/2000/svg", "line");
                line2.setAttribute("x1", x + size);
                line2.setAttribute("y1", y - size);
                line2.setAttribute("x2", x - size);
                line2.setAttribute("y2", y + size);
                line2.setAttribute("stroke-width", Math.max(1, size / 3));
                
                g.appendChild(line1);
                g.appendChild(line2);
                svg.appendChild(g);
            }
        } catch (e) {
            console.error("Failed to add red cross for " + countryId, e);
        }
    });
}

// Remove SVG red diagonal cross
function removeRedCross(countryId) {
    document.querySelectorAll(`.map-viewport svg g.map-country-cross[data-country-id="${countryId}"]`).forEach(elem => {
        elem.remove();
    });
}

// Add SVG country text labels at centroid
function addCountryLabel(countryId) {
    // Remove existing labels for this country first to avoid duplicates
    removeCountryLabel(countryId);
    
    // Find elements in all map slices
    const elements = document.querySelectorAll(`.map-viewport svg #${countryId}, .map-viewport svg [id="${countryId}"]`);
    
    elements.forEach(elem => {
        const svg = elem.closest("svg");
        if (!svg) return;
        
        try {
            const bbox = elem.getBBox();
            if (bbox.width > 0 && bbox.height > 0) {
                const x = bbox.x + bbox.width / 2;
                const y = bbox.y + bbox.height / 2;
                
                const textNode = document.createElementNS("http://www.w3.org/2000/svg", "text");
                textNode.setAttribute("x", x);
                textNode.setAttribute("y", y);
                textNode.setAttribute("text-anchor", "middle");
                textNode.setAttribute("dominant-baseline", "middle");
                textNode.setAttribute("class", "map-country-label");
                textNode.setAttribute("data-country-id", countryId);
                
                // Adjust font size dynamically based on bounding box width to fit
                const fontSize = Math.max(4.5, Math.min(10, bbox.width / 6.5));
                textNode.setAttribute("style", `font-size: ${fontSize}px;`);
                
                // Use abbreviation code for very small countries with long names
                let displayName = countryNames[countryId];
                if (bbox.width < 35 && displayName.length > 8) {
                    displayName = countryId.toUpperCase();
                }
                
                textNode.textContent = displayName;
                svg.appendChild(textNode);
            }
        } catch (e) {
            console.error("Failed to add text label for " + countryId, e);
        }
    });
}

// Remove SVG country text labels
function removeCountryLabel(countryId) {
    document.querySelectorAll(`.map-viewport svg text[data-country-id="${countryId}"]`).forEach(elem => {
        elem.remove();
    });
}

// Calculate scoreboard stats
function updateScoreboard() {
    const correctVal = document.getElementById("stats-correct");
    const playedVal = document.getElementById("stats-played");
    const accuracyVal = document.getElementById("stats-accuracy");
    
    const historyKeys = Object.keys(gameState.history);
    const totalPlayed = historyKeys.length;
    let correctCount = 0;
    
    historyKeys.forEach(key => {
        if (gameState.history[key].status === 'correct') {
            correctCount++;
        }
    });
    
    correctVal.textContent = correctCount;
    playedVal.textContent = totalPlayed;
    
    const accuracy = totalPlayed > 0 ? Math.round((correctCount / totalPlayed) * 100) : 0;
    accuracyVal.textContent = `${accuracy}%`;
}

// Show End summary Screen
function showEndScreen() {
    const endScreen = document.getElementById("end-screen");
    const correctVal = document.getElementById("end-correct");
    const playedVal = document.getElementById("end-played");
    const rankVal = document.getElementById("end-rank");
    const playedList = document.getElementById("end-played-list");
    
    // Calculate values
    const historyKeys = Object.keys(gameState.history);
    const totalPlayed = historyKeys.length;
    let correctCount = 0;
    
    historyKeys.forEach(key => {
        if (gameState.history[key].status === 'correct') {
            correctCount++;
        }
    });
    
    correctVal.textContent = correctCount;
    playedVal.textContent = totalPlayed;
    
    // Animate radial progress ring
    const pct = totalPlayed > 0 ? Math.round((correctCount / totalPlayed) * 100) : 0;
    document.getElementById("radial-pct").textContent = `${pct}%`;
    document.getElementById("radial-fraction").textContent = `${correctCount} / ${totalPlayed}`;
    
    const progressCircle = document.getElementById("radial-progress-bar");
    const radius = progressCircle.r.baseVal.value;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (pct / 100) * circumference;
    
    progressCircle.style.strokeDasharray = `${circumference} ${circumference}`;
    progressCircle.style.strokeDashoffset = offset;
    
    // Rank logic
    let rank = "Novice Navigator";
    if (totalPlayed >= 5) {
        if (pct >= 90) rank = "Grand Cartographer";
        else if (pct >= 75) rank = "Master Voyager";
        else if (pct >= 50) rank = "Globe Trekker";
        else rank = "Apprentice Explorer";
    } else if (totalPlayed > 0) {
        rank = "Coastal Cruiser";
    }
    rankVal.textContent = rank;
    
    // Render played countries list
    playedList.innerHTML = "";
    if (totalPlayed === 0) {
        playedList.innerHTML = `<li class="played-item" style="justify-content: center; color: var(--text-muted);">No countries played yet.</li>`;
    } else {
        historyKeys.forEach(code => {
            const data = gameState.history[code];
            const name = countryNames[code];
            const flag = getFlagEmoji(code);
            
            const li = document.createElement("li");
            li.className = "played-item";
            li.innerHTML = `
                <span class="played-country-name">${flag} ${name}</span>
                <span class="played-badge ${data.status}">${data.status}</span>
            `;
            playedList.appendChild(li);
        });
    }
    
    endScreen.style.display = "flex";
}

// Reset Game Completely
function resetGame() {
    gameState.history = {};
    saveGame();
    updateScoreboard();
    
    // Reset colors on all SVGs
    document.querySelectorAll(".map-viewport svg path, .map-viewport svg g").forEach(elem => {
        elem.classList.remove("correct", "failed", "active-pulse");
    });
    
    // Remove all text labels from all SVGs
    document.querySelectorAll(".map-viewport svg text.map-country-label").forEach(elem => {
        elem.remove();
    });
    
    // Remove all red crosses from all SVGs
    document.querySelectorAll(".map-viewport svg g.map-country-cross").forEach(elem => {
        elem.remove();
    });
    
    document.getElementById("end-screen").style.display = "none";
}

// Persistent Storage
function saveGame() {
    localStorage.setItem("chronoQuest_save", JSON.stringify(gameState.history));
}

function loadGame() {
    const saved = localStorage.getItem("chronoQuest_save");
    if (saved) {
        try {
            gameState.history = JSON.parse(saved) || {};
            
            // Reapply coloring, labels, and crosses to map elements
            Object.keys(gameState.history).forEach(code => {
                const data = gameState.history[code];
                if (data && typeof data === 'object') {
                    updateCountryMapColor(code, data.status);
                    
                    // Delay slightly to ensure browser has layout and can calculate getBBox()
                    setTimeout(() => {
                        if (data.status === 'correct') {
                            addCountryLabel(code);
                        } else if (data.status === 'failed') {
                            addRedCross(code);
                        }
                    }, 50);
                } else if (data && typeof data === 'string') {
                    // Fallback for simple string state from very early runs
                    updateCountryMapColor(code, data);
                    setTimeout(() => {
                        if (data === 'correct') {
                            addCountryLabel(code);
                        } else if (data === 'failed') {
                            addRedCross(code);
                        }
                    }, 50);
                }
            });
        } catch (e) {
            console.error("Failed to load saved state", e);
            gameState.history = {}; // Reset to empty on parse failure to prevent lockout
        }
    }
}

// Event bindings & Startup
document.addEventListener("DOMContentLoaded", () => {
    // 1. Load SVG map
    initMaps();
    
    // 3. Load persistent game state
    loadGame();
    updateScoreboard();
    
    // 4. Attach layout buttons listeners
    document.getElementById("btn-finish").addEventListener("click", showEndScreen);
    document.getElementById("btn-modal-close").addEventListener("click", closeQuizModal);
    
    document.getElementById("btn-resume-explore").addEventListener("click", () => {
        document.getElementById("end-screen").style.display = "none";
    });
    
    document.getElementById("btn-restart-game").addEventListener("click", () => {
        if (confirm("Are you sure you want to reset all progress?")) {
            resetGame();
        }
    });
    
    document.getElementById("btn-reset-main").addEventListener("click", () => {
        if (confirm("Are you sure you want to reset all progress and start a new game?")) {
            resetGame();
        }
    });

    // Close overlays when clicking backdrop
    window.addEventListener("click", (e) => {
        if (e.target.id === "quiz-modal") {
            // Only allow closing backdrop if the quiz has completed (close footer is visible)
            const footer = document.getElementById("modal-footer");
            if (footer.style.display === "flex") {
                closeQuizModal();
            }
        }
    });

    // 5. Register Service Worker for PWA Offline & Installation Support
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('./sw.js')
            .then((reg) => console.log('[PWA] Service Worker registered successfully', reg.scope))
            .catch((err) => console.error('[PWA] Service Worker registration failed', err));
    }
});
