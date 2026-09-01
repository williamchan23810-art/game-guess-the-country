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

// Precise mainland centroid coordinates for country labels and markers
const countryPositions = {
  "ad": {
    "id": "ad",
    "name": "Andorra",
    "x": 479.3,
    "y": 331.5,
    "width": 0.9,
    "height": 0.8
  },
  "ae": {
    "id": "ae",
    "name": "United Arab Emirates",
    "x": 626.4,
    "y": 392.9,
    "width": 13.5,
    "height": 10.6
  },
  "af": {
    "id": "af",
    "name": "Afghanistan",
    "x": 664.9,
    "y": 361.8,
    "width": 40.4,
    "height": 30.6
  },
  "ag": {
    "id": "ag",
    "name": "Antigua and Barbuda",
    "x": 301.5,
    "y": 414.6,
    "width": 0.6,
    "height": 0.5
  },
  "ai": {
    "id": "ai",
    "name": "Anguilla",
    "x": 297.9,
    "y": 411.2,
    "width": 0.5,
    "height": 0.3
  },
  "al": {
    "id": "al",
    "name": "Albania",
    "x": 531.5,
    "y": 336.6,
    "width": 4.9,
    "height": 11.1
  },
  "am": {
    "id": "am",
    "name": "Armenia",
    "x": 601.2,
    "y": 340.6,
    "width": 8.8,
    "height": 8.9
  },
  "ao": {
    "id": "ao",
    "name": "Angola",
    "x": 525.1,
    "y": 496.6,
    "width": 34.5,
    "height": 34.7
  },
  "ar": {
    "id": "ar",
    "name": "Argentina",
    "x": 296.3,
    "y": 580.2,
    "width": 55.9,
    "height": 109.9
  },
  "as": {
    "id": "as",
    "name": "American Samoa",
    "x": 1006.2,
    "y": 503.2,
    "width": 0.7,
    "height": 0.3
  },
  "at": {
    "id": "at",
    "name": "Austria",
    "x": 512.3,
    "y": 310.9,
    "width": 21.4,
    "height": 10.8
  },
  "au": {
    "id": "au",
    "name": "Australia",
    "x": 849.3,
    "y": 537.4,
    "width": 113.5,
    "height": 88.9
  },
  "aw": {
    "id": "aw",
    "name": "Aruba",
    "x": 278.5,
    "y": 427.7,
    "width": 0.5,
    "height": 0.5
  },
  "ax": {
    "id": "ax",
    "name": "Aland Islands",
    "x": 530.9,
    "y": 250.7,
    "width": 1.6,
    "height": 1.8
  },
  "az": {
    "id": "az",
    "name": "Azerbaijan",
    "x": 608.7,
    "y": 340.3,
    "width": 15.1,
    "height": 12.8
  },
  "ba": {
    "id": "ba",
    "name": "Bosnia and Herzegovina",
    "x": 524.5,
    "y": 326.1,
    "width": 10.8,
    "height": 10.6
  },
  "bb": {
    "id": "bb",
    "name": "Barbados",
    "x": 307.8,
    "y": 425.8,
    "width": 0.6,
    "height": 0.7
  },
  "bd": {
    "id": "bd",
    "name": "Bangladesh",
    "x": 728.4,
    "y": 394.8,
    "width": 12.9,
    "height": 17.6
  },
  "be": {
    "id": "be",
    "name": "Belgium",
    "x": 487.4,
    "y": 299,
    "width": 10.8,
    "height": 8.7
  },
  "bf": {
    "id": "bf",
    "name": "Burkina Faso",
    "x": 470.5,
    "y": 428.5,
    "width": 22.2,
    "height": 16.1
  },
  "bg": {
    "id": "bg",
    "name": "Bulgaria",
    "x": 546.4,
    "y": 330.7,
    "width": 17.5,
    "height": 11.4
  },
  "bh": {
    "id": "bh",
    "name": "Bahrain",
    "x": 616.7,
    "y": 387.7,
    "width": 0.5,
    "height": 1.4
  },
  "bi": {
    "id": "bi",
    "name": "Burundi",
    "x": 558.8,
    "y": 472.4,
    "width": 5,
    "height": 6
  },
  "bj": {
    "id": "bj",
    "name": "Benin",
    "x": 481.3,
    "y": 436.8,
    "width": 8.6,
    "height": 17.4
  },
  "bl": {
    "id": "bl",
    "name": "Saint Barthelemy",
    "x": 298.5,
    "y": 412.2,
    "width": 0.2,
    "height": 0.1
  },
  "bn": {
    "id": "bn",
    "name": "Brunei Darussalam",
    "x": 796.4,
    "y": 450.3,
    "width": 2.8,
    "height": 2.8
  },
  "bo": {
    "id": "bo",
    "name": "Bolivia",
    "x": 296.5,
    "y": 509.3,
    "width": 34.1,
    "height": 38.4
  },
  "bm": {
    "id": "bm",
    "name": "Bermuda",
    "x": 293.1,
    "y": 367.5,
    "width": 0.5,
    "height": 0.4
  },
  "bq": {
    "id": "bq",
    "name": "Bonaire,  Saint Eustachius and Saba",
    "x": 283.2,
    "y": 428.7,
    "width": 0.5,
    "height": 0.8
  },
  "br": {
    "id": "br",
    "name": "Brazil",
    "x": 322.2,
    "y": 505.6,
    "width": 110,
    "height": 114.8
  },
  "bs": {
    "id": "bs",
    "name": "Bahamas",
    "x": 257.4,
    "y": 386.5,
    "width": 2.5,
    "height": 3.3
  },
  "bt": {
    "id": "bt",
    "name": "Bhutan",
    "x": 728.6,
    "y": 383.1,
    "width": 9.4,
    "height": 5.1
  },
  "bv": {
    "id": "bv",
    "name": "Bouvet Island",
    "x": 484.5,
    "y": 644.8,
    "width": 0.4,
    "height": 0.4
  },
  "bw": {
    "id": "bw",
    "name": "Botswana",
    "x": 544.1,
    "y": 527,
    "width": 26.3,
    "height": 27.4
  },
  "by": {
    "id": "by",
    "name": "Belarus",
    "x": 553.3,
    "y": 284.1,
    "width": 26.8,
    "height": 23.1
  },
  "bz": {
    "id": "bz",
    "name": "Belize",
    "x": 226.1,
    "y": 414.3,
    "width": 3.2,
    "height": 7.6
  },
  "ca": {
    "id": "ca",
    "name": "Canada",
    "x": 198.9,
    "y": 250.8,
    "width": 239.5,
    "height": 166
  },
  "cc": {
    "id": "cc",
    "name": "Cocos  (Keeling)  Islands",
    "x": 746.7,
    "y": 497.1,
    "width": 0.1,
    "height": 0.2
  },
  "cd": {
    "id": "cd",
    "name": "Democratic Republic of Congo",
    "x": 535.9,
    "y": 474.4,
    "width": 53.5,
    "height": 52.7
  },
  "cf": {
    "id": "cf",
    "name": "Central African Republic",
    "x": 533.6,
    "y": 444.3,
    "width": 36.4,
    "height": 24.5
  },
  "cg": {
    "id": "cg",
    "name": "Republic of Congo",
    "x": 516.6,
    "y": 464.8,
    "width": 21,
    "height": 24.3
  },
  "ch": {
    "id": "ch",
    "name": "Switzerland",
    "x": 497.9,
    "y": 314.7,
    "width": 12.6,
    "height": 8
  },
  "ci": {
    "id": "ci",
    "name": "Côte d'Ivoire",
    "x": 459.3,
    "y": 441.8,
    "width": 17.1,
    "height": 17.9
  },
  "ck": {
    "id": "ck",
    "name": "Cook Islands",
    "x": 26.4,
    "y": 523.5,
    "width": 0.3,
    "height": 0.2
  },
  "cl": {
    "id": "cl",
    "name": "Chile",
    "x": 274.6,
    "y": 577.4,
    "width": 24.4,
    "height": 129.8
  },
  "cm": {
    "id": "cm",
    "name": "Cameroon",
    "x": 509.6,
    "y": 442.2,
    "width": 21.5,
    "height": 32.1
  },
  "cn": {
    "id": "cn",
    "name": "China",
    "x": 767.3,
    "y": 345.2,
    "width": 171.6,
    "height": 120.1
  },
  "co": {
    "id": "co",
    "name": "Colombia",
    "x": 270.2,
    "y": 451.4,
    "width": 34.1,
    "height": 46.8
  },
  "cr": {
    "id": "cr",
    "name": "Costa Rica",
    "x": 238.5,
    "y": 435.9,
    "width": 9.4,
    "height": 8.8
  },
  "cu": {
    "id": "cu",
    "name": "Cuba",
    "x": 251.7,
    "y": 401.4,
    "width": 30.2,
    "height": 10
  },
  "cv": {
    "id": "cv",
    "name": "Cape Verde",
    "x": 408.6,
    "y": 420.3,
    "width": 1,
    "height": 1.2
  },
  "cw": {
    "id": "cw",
    "name": "Curaçao",
    "x": 281.4,
    "y": 428.6,
    "width": 1.1,
    "height": 1
  },
  "cx": {
    "id": "cx",
    "name": "Christmas Island",
    "x": 771.4,
    "y": 492.4,
    "width": 0.4,
    "height": 0.4
  },
  "cy": {
    "id": "cy",
    "name": "Cyprus",
    "x": 568.7,
    "y": 358.2,
    "width": 6.3,
    "height": 3.7
  },
  "cz": {
    "id": "cz",
    "name": "Czech Republic",
    "x": 518.3,
    "y": 302,
    "width": 18.9,
    "height": 10.7
  },
  "de": {
    "id": "de",
    "name": "Germany",
    "x": 504.2,
    "y": 295.7,
    "width": 25.7,
    "height": 34.1
  },
  "dj": {
    "id": "dj",
    "name": "Djibouti",
    "x": 594.4,
    "y": 429.7,
    "width": 4.6,
    "height": 5
  },
  "dk": {
    "id": "dk",
    "name": "Denmark",
    "x": 501.6,
    "y": 271.8,
    "width": 7.9,
    "height": 14.8
  },
  "dm": {
    "id": "dm",
    "name": "Dominica",
    "x": 302.7,
    "y": 419.4,
    "width": 0.6,
    "height": 1.2
  },
  "do": {
    "id": "do",
    "name": "Dominican Republic",
    "x": 278,
    "y": 409.6,
    "width": 10.3,
    "height": 6.7
  },
  "dz": {
    "id": "dz",
    "name": "Algeria",
    "x": 479.5,
    "y": 380.2,
    "width": 58,
    "height": 57.7
  },
  "ec": {
    "id": "ec",
    "name": "Ecuador",
    "x": 255.7,
    "y": 467.9,
    "width": 16,
    "height": 18
  },
  "eg": {
    "id": "eg",
    "name": "Egypt",
    "x": 561.3,
    "y": 384.9,
    "width": 34.2,
    "height": 30.3
  },
  "ee": {
    "id": "ee",
    "name": "Estonia",
    "x": 547.3,
    "y": 259.8,
    "width": 13.2,
    "height": 11.4
  },
  "eh": {
    "id": "eh",
    "name": "Western Sahara",
    "x": 438.7,
    "y": 393.1,
    "width": 23.6,
    "height": 21
  },
  "er": {
    "id": "er",
    "name": "Eritrea",
    "x": 586.5,
    "y": 420,
    "width": 18.8,
    "height": 16.3
  },
  "es": {
    "id": "es",
    "name": "Spain",
    "x": 466.6,
    "y": 340.9,
    "width": 35.2,
    "height": 28.2
  },
  "et": {
    "id": "et",
    "name": "Ethiopia",
    "x": 588.5,
    "y": 437.2,
    "width": 42,
    "height": 32.2
  },
  "fi": {
    "id": "fi",
    "name": "Finland",
    "x": 548.1,
    "y": 218.7,
    "width": 30.6,
    "height": 68.8
  },
  "fj": {
    "id": "fj",
    "name": "Fiji",
    "x": 974.3,
    "y": 513.3,
    "width": 4,
    "height": 2.8
  },
  "fk": {
    "id": "fk",
    "name": "Falkland Islands",
    "x": 310.1,
    "y": 632.6,
    "width": 5.2,
    "height": 4.7
  },
  "fm": {
    "id": "fm",
    "name": "Federated States of Micronesia",
    "x": 919,
    "y": 443.7,
    "width": 0.6,
    "height": 0.5
  },
  "fo": {
    "id": "fo",
    "name": "Faroe Islands",
    "x": 455.5,
    "y": 239.7,
    "width": 1.5,
    "height": 2.2
  },
  "fr": {
    "id": "fr",
    "name": "France",
    "x": 479.6,
    "y": 314.3,
    "width": 36.2,
    "height": 35.8
  },
  "ga": {
    "id": "ga",
    "name": "Gabon",
    "x": 507.4,
    "y": 465.2,
    "width": 16.2,
    "height": 17.3
  },
  "gb": {
    "id": "gb",
    "name": "United Kingdom",
    "x": 468.7,
    "y": 280.3,
    "width": 22.1,
    "height": 41.6
  },
  "ge": {
    "id": "ge",
    "name": "Georgia",
    "x": 596.5,
    "y": 332.3,
    "width": 18.8,
    "height": 9.5
  },
  "gd": {
    "id": "gd",
    "name": "Grenada",
    "x": 301.8,
    "y": 428.9,
    "width": 0.5,
    "height": 0.7
  },
  "gf": {
    "id": "gf",
    "name": "French Guiana",
    "x": 325.8,
    "y": 451.9,
    "width": 8.3,
    "height": 10.2
  },
  "gg": {
    "id": "gg",
    "name": "Guernsey",
    "x": 467.7,
    "y": 303.5,
    "width": 0.4,
    "height": 0.3
  },
  "gh": {
    "id": "gh",
    "name": "Ghana",
    "x": 472,
    "y": 440.6,
    "width": 12.4,
    "height": 18
  },
  "gi": {
    "id": "gi",
    "name": "Gibraltar",
    "x": 459.9,
    "y": 354.7,
    "width": 0.1,
    "height": 0.2
  },
  "gl": {
    "id": "gl",
    "name": "Greenland",
    "x": 356.7,
    "y": 126.7,
    "width": 172.3,
    "height": 252.9
  },
  "gm": {
    "id": "gm",
    "name": "Gambia",
    "x": 431.9,
    "y": 425.1,
    "width": 8.4,
    "height": 2.1
  },
  "gn": {
    "id": "gn",
    "name": "Guinea",
    "x": 443,
    "y": 435,
    "width": 20.7,
    "height": 15.5
  },
  "go": {
    "id": "go",
    "name": "Glorioso Islands",
    "x": 607.6,
    "y": 495.4,
    "width": 0.1,
    "height": 0.1
  },
  "gp": {
    "id": "gp",
    "name": "Guadeloupe",
    "x": 302.7,
    "y": 416.7,
    "width": 1,
    "height": 0.8
  },
  "gq": {
    "id": "gq",
    "name": "Equatorial Guinea",
    "x": 504,
    "y": 458.4,
    "width": 5.5,
    "height": 3.8
  },
  "gr": {
    "id": "gr",
    "name": "Greece",
    "x": 540.3,
    "y": 344,
    "width": 18.6,
    "height": 19.1
  },
  "gs": {
    "id": "gs",
    "name": "South Georgia and South Sandwich Islands",
    "x": 371.3,
    "y": 644.9,
    "width": 6.2,
    "height": 4.2
  },
  "gt": {
    "id": "gt",
    "name": "Guatemala",
    "x": 221.7,
    "y": 418.3,
    "width": 11.2,
    "height": 11.8
  },
  "gu": {
    "id": "gu",
    "name": "Guam",
    "x": 881.3,
    "y": 425.1,
    "width": 0.8,
    "height": 1
  },
  "gw": {
    "id": "gw",
    "name": "Guinea-Bissau",
    "x": 432.3,
    "y": 429.8,
    "width": 8.5,
    "height": 5
  },
  "gy": {
    "id": "gy",
    "name": "Guyana",
    "x": 309.5,
    "y": 449.3,
    "width": 13.8,
    "height": 20.6
  },
  "hk": {
    "id": "hk",
    "name": "Hong Kong",
    "x": 795.2,
    "y": 398.7,
    "width": 1.2,
    "height": 0.8
  },
  "hm": {
    "id": "hm",
    "name": "Heard Island and McDonald Islands",
    "x": 681.3,
    "y": 638.5,
    "width": 1.6,
    "height": 1
  },
  "hn": {
    "id": "hn",
    "name": "Honduras",
    "x": 232.8,
    "y": 422,
    "width": 17.4,
    "height": 8.8
  },
  "hr": {
    "id": "hr",
    "name": "Croatia",
    "x": 521.1,
    "y": 322.9,
    "width": 16.5,
    "height": 14.2
  },
  "ht": {
    "id": "ht",
    "name": "Haiti",
    "x": 269.8,
    "y": 409,
    "width": 7.9,
    "height": 5.6
  },
  "hu": {
    "id": "hu",
    "name": "Hungary",
    "x": 529.6,
    "y": 313.2,
    "width": 19,
    "height": 11.5
  },
  "id": {
    "id": "id",
    "name": "Indonesia",
    "x": 757.3,
    "y": 463.3,
    "width": 30.5,
    "height": 32.2
  },
  "ie": {
    "id": "ie",
    "name": "Ireland",
    "x": 451.9,
    "y": 285.6,
    "width": 12.2,
    "height": 18.3
  },
  "il": {
    "id": "il",
    "name": "Israel",
    "x": 573.3,
    "y": 370.3,
    "width": 4.7,
    "height": 13
  },
  "im": {
    "id": "im",
    "name": "Isle of Man",
    "x": 462.1,
    "y": 281.9,
    "width": 1.3,
    "height": 1.7
  },
  "in": {
    "id": "in",
    "name": "India",
    "x": 707.1,
    "y": 398.6,
    "width": 81.9,
    "height": 83.5
  },
  "io": {
    "id": "io",
    "name": "British Indian Ocean Territory",
    "x": 678.2,
    "y": 483.4,
    "width": 0.4,
    "height": 0.6
  },
  "iq": {
    "id": "iq",
    "name": "Iraq",
    "x": 597.4,
    "y": 364.2,
    "width": 27.4,
    "height": 27.8
  },
  "ir": {
    "id": "ir",
    "name": "Iran",
    "x": 625.5,
    "y": 366.2,
    "width": 54.1,
    "height": 48.8
  },
  "is": {
    "id": "is",
    "name": "Iceland",
    "x": 421.5,
    "y": 221.6,
    "width": 30.6,
    "height": 20.7
  },
  "it": {
    "id": "it",
    "name": "Italy",
    "x": 510.1,
    "y": 331,
    "width": 33.3,
    "height": 34.8
  },
  "je": {
    "id": "je",
    "name": "Jersey",
    "x": 468.9,
    "y": 304.6,
    "width": 0.6,
    "height": 0.4
  },
  "jm": {
    "id": "jm",
    "name": "Jamaica",
    "x": 258,
    "y": 411.5,
    "width": 6,
    "height": 2.4
  },
  "jo": {
    "id": "jo",
    "name": "Jordan",
    "x": 579.1,
    "y": 370.9,
    "width": 12.2,
    "height": 13.7
  },
  "jp": {
    "id": "jp",
    "name": "Japan",
    "x": 857.8,
    "y": 349.5,
    "width": 31.2,
    "height": 28.3
  },
  "ju": {
    "id": "ju",
    "name": "Juan De Nova Island",
    "x": 594.9,
    "y": 511.2,
    "width": 0.1,
    "height": 0.1
  },
  "ke": {
    "id": "ke",
    "name": "Kenya",
    "x": 581.2,
    "y": 461.8,
    "width": 22.4,
    "height": 28.4
  },
  "kg": {
    "id": "kg",
    "name": "Kyrgyzstan",
    "x": 684.6,
    "y": 336.3,
    "width": 30.9,
    "height": 15
  },
  "kh": {
    "id": "kh",
    "name": "Cambodia",
    "x": 769.5,
    "y": 427.6,
    "width": 14.8,
    "height": 12.3
  },
  "ki": {
    "id": "ki",
    "name": "Kiribati",
    "x": 33.2,
    "y": 457.7,
    "width": 1.1,
    "height": 0.8
  },
  "km": {
    "id": "km",
    "name": "Comoros",
    "x": 596.6,
    "y": 495.6,
    "width": 0.7,
    "height": 1.6
  },
  "kn": {
    "id": "kn",
    "name": "Saint Kitts and Nevis",
    "x": 298.8,
    "y": 413.9,
    "width": 0.6,
    "height": 0.5
  },
  "kp": {
    "id": "kp",
    "name": "North Korea",
    "x": 832.8,
    "y": 339.4,
    "width": 17.8,
    "height": 19.4
  },
  "kr": {
    "id": "kr",
    "name": "South Korea",
    "x": 833.8,
    "y": 353.4,
    "width": 9.6,
    "height": 15
  },
  "xk": {
    "id": "xk",
    "name": "Kosovo",
    "x": 533.5,
    "y": 331.4,
    "width": 4.8,
    "height": 5.3
  },
  "kw": {
    "id": "kw",
    "name": "Kuwait",
    "x": 608.2,
    "y": 377.3,
    "width": 5.4,
    "height": 5
  },
  "ky": {
    "id": "ky",
    "name": "Cayman Islands",
    "x": 246.8,
    "y": 408,
    "width": 0.9,
    "height": 0.3
  },
  "kz": {
    "id": "kz",
    "name": "Kazakhstan",
    "x": 662.8,
    "y": 307.5,
    "width": 114.3,
    "height": 62.4
  },
  "la": {
    "id": "la",
    "name": "Lao People's Democratic Republic",
    "x": 766.4,
    "y": 411.1,
    "width": 21.2,
    "height": 25.2
  },
  "lb": {
    "id": "lb",
    "name": "Lebanon",
    "x": 575.5,
    "y": 362.4,
    "width": 4.1,
    "height": 5.4
  },
  "lc": {
    "id": "lc",
    "name": "Saint Lucia",
    "x": 303.8,
    "y": 423.8,
    "width": 0.5,
    "height": 1.1
  },
  "li": {
    "id": "li",
    "name": "Liechtenstein",
    "x": 501.7,
    "y": 313.2,
    "width": 0.4,
    "height": 0.9
  },
  "lk": {
    "id": "lk",
    "name": "Sri Lanka",
    "x": 701.6,
    "y": 440.9,
    "width": 6.1,
    "height": 10.9
  },
  "lr": {
    "id": "lr",
    "name": "Liberia",
    "x": 448.4,
    "y": 444.9,
    "width": 11.5,
    "height": 11.7
  },
  "ls": {
    "id": "ls",
    "name": "Lesotho",
    "x": 554.1,
    "y": 549.5,
    "width": 6.6,
    "height": 6.6
  },
  "lt": {
    "id": "lt",
    "name": "Lithuania",
    "x": 542,
    "y": 277.4,
    "width": 16.1,
    "height": 12.3
  },
  "lu": {
    "id": "lu",
    "name": "Luxembourg",
    "x": 492,
    "y": 302.1,
    "width": 2.2,
    "height": 3.1
  },
  "lv": {
    "id": "lv",
    "name": "Latvia",
    "x": 544,
    "y": 268.8,
    "width": 20.2,
    "height": 12.3
  },
  "ly": {
    "id": "ly",
    "name": "Libya",
    "x": 523.3,
    "y": 386.1,
    "width": 44.5,
    "height": 42.8
  },
  "ma": {
    "id": "ma",
    "name": "Morocco",
    "x": 454.9,
    "y": 369,
    "width": 34,
    "height": 27.2
  },
  "mc": {
    "id": "mc",
    "name": "Monaco",
    "x": 495.7,
    "y": 326.8,
    "width": 0.2,
    "height": 0.2
  },
  "md": {
    "id": "md",
    "name": "Moldova",
    "x": 554.5,
    "y": 314,
    "width": 9.9,
    "height": 12.4
  },
  "mg": {
    "id": "mg",
    "name": "Madagascar",
    "x": 606.4,
    "y": 516.8,
    "width": 20.3,
    "height": 39.9
  },
  "me": {
    "id": "me",
    "name": "Montenegro",
    "x": 529.3,
    "y": 330.8,
    "width": 5.4,
    "height": 6.4
  },
  "mf": {
    "id": "mf",
    "name": "Saint Martin",
    "x": 297.9,
    "y": 411.6,
    "width": 0.3,
    "height": 0.1
  },
  "mh": {
    "id": "mh",
    "name": "Marshall Islands",
    "x": 955.4,
    "y": 443,
    "width": 1,
    "height": 0.3
  },
  "mk": {
    "id": "mk",
    "name": "Macedonia",
    "x": 535.9,
    "y": 335,
    "width": 7.2,
    "height": 5.6
  },
  "ml": {
    "id": "ml",
    "name": "Mali",
    "x": 463.6,
    "y": 412.7,
    "width": 46.4,
    "height": 43.6
  },
  "mo": {
    "id": "mo",
    "name": "Macau",
    "x": 793.5,
    "y": 399.3,
    "width": 0.2,
    "height": 0.2
  },
  "mm": {
    "id": "mm",
    "name": "Myanmar",
    "x": 746.2,
    "y": 407.3,
    "width": 25.2,
    "height": 54.9
  },
  "mn": {
    "id": "mn",
    "name": "Mongolia",
    "x": 766.3,
    "y": 313.4,
    "width": 90.2,
    "height": 43.2
  },
  "mp": {
    "id": "mp",
    "name": "Northern Mariana Islands",
    "x": 883.9,
    "y": 420.1,
    "width": 0.4,
    "height": 0.5
  },
  "mq": {
    "id": "mq",
    "name": "Martinique",
    "x": 303.6,
    "y": 421.6,
    "width": 1.1,
    "height": 1.3
  },
  "mr": {
    "id": "mr",
    "name": "Mauritania",
    "x": 444.2,
    "y": 402.6,
    "width": 34.3,
    "height": 37.6
  },
  "ms": {
    "id": "ms",
    "name": "Montserrat",
    "x": 300.4,
    "y": 415.6,
    "width": 0.2,
    "height": 0.4
  },
  "mt": {
    "id": "mt",
    "name": "Malta",
    "x": 515.5,
    "y": 355.5,
    "width": 0.6,
    "height": 0.5
  },
  "mu": {
    "id": "mu",
    "name": "Mauritius",
    "x": 636.4,
    "y": 520.6,
    "width": 1.3,
    "height": 1.6
  },
  "mv": {
    "id": "mv",
    "name": "Maldives",
    "x": 681.2,
    "y": 451.2,
    "width": 0.2,
    "height": 0.3
  },
  "mw": {
    "id": "mw",
    "name": "Malawi",
    "x": 571.1,
    "y": 500.3,
    "width": 9,
    "height": 22.2
  },
  "mx": {
    "id": "mx",
    "name": "Mexico",
    "x": 188.8,
    "y": 394.1,
    "width": 85.2,
    "height": 55.7
  },
  "my": {
    "id": "my",
    "name": "Malaysia",
    "x": 796,
    "y": 452,
    "width": 27.3,
    "height": 17.1
  },
  "mz": {
    "id": "mz",
    "name": "Mozambique",
    "x": 574.6,
    "y": 516.5,
    "width": 29.8,
    "height": 48.5
  },
  "na": {
    "id": "na",
    "name": "Namibia",
    "x": 526.8,
    "y": 529.1,
    "width": 38,
    "height": 36.4
  },
  "nc": {
    "id": "nc",
    "name": "New Caledonia",
    "x": 939.4,
    "y": 523.6,
    "width": 8.3,
    "height": 6.7
  },
  "ne": {
    "id": "ne",
    "name": "Niger",
    "x": 497.5,
    "y": 412.7,
    "width": 44.3,
    "height": 34.7
  },
  "nf": {
    "id": "nf",
    "name": "Norfolk Island",
    "x": 946.2,
    "y": 547.7,
    "width": 0.2,
    "height": 0.3
  },
  "ng": {
    "id": "ng",
    "name": "Nigeria",
    "x": 499.2,
    "y": 437.4,
    "width": 33.5,
    "height": 27.1
  },
  "ni": {
    "id": "ni",
    "name": "Nicaragua",
    "x": 235.2,
    "y": 426.7,
    "width": 12.7,
    "height": 12.2
  },
  "nl": {
    "id": "nl",
    "name": "Netherlands",
    "x": 489.8,
    "y": 291.8,
    "width": 10.5,
    "height": 12.3
  },
  "no": {
    "id": "no",
    "name": "Norway",
    "x": 525.2,
    "y": 219.3,
    "width": 73.1,
    "height": 87.2
  },
  "np": {
    "id": "np",
    "name": "Nepal",
    "x": 710.9,
    "y": 380.3,
    "width": 22.8,
    "height": 12.8
  },
  "nr": {
    "id": "nr",
    "name": "Nauru",
    "x": 943.4,
    "y": 464.4,
    "width": 0.1,
    "height": 0.2
  },
  "nu": {
    "id": "nu",
    "name": "Niue",
    "x": 1008.5,
    "y": 517.1,
    "width": 0.4,
    "height": 0.5
  },
  "nz": {
    "id": "nz",
    "name": "New Zealand",
    "x": 953.2,
    "y": 598.6,
    "width": 22.1,
    "height": 23.7
  },
  "om": {
    "id": "om",
    "name": "Oman",
    "x": 631.8,
    "y": 403.4,
    "width": 22.1,
    "height": 24.9
  },
  "pa": {
    "id": "pa",
    "name": "Panama",
    "x": 250.1,
    "y": 439.4,
    "width": 16.4,
    "height": 6.7
  },
  "pe": {
    "id": "pe",
    "name": "Peru",
    "x": 264.4,
    "y": 489,
    "width": 35.5,
    "height": 51.9
  },
  "pf": {
    "id": "pf",
    "name": "French Polynesia",
    "x": 55.6,
    "y": 513,
    "width": 1.4,
    "height": 1.1
  },
  "pg": {
    "id": "pg",
    "name": "Papua New Guinea",
    "x": 884.2,
    "y": 481.5,
    "width": 28,
    "height": 22.6
  },
  "ph": {
    "id": "ph",
    "name": "Philippines",
    "x": 817.2,
    "y": 418.8,
    "width": 12.3,
    "height": 17.5
  },
  "pk": {
    "id": "pk",
    "name": "Pakistan",
    "x": 669.4,
    "y": 373.1,
    "width": 47.6,
    "height": 43.2
  },
  "pl": {
    "id": "pl",
    "name": "Poland",
    "x": 528.5,
    "y": 292.2,
    "width": 28,
    "height": 26.5
  },
  "pm": {
    "id": "pm",
    "name": "Saint Pierre and Miquelon",
    "x": 316.8,
    "y": 314.1,
    "width": 0.4,
    "height": 1.2
  },
  "pn": {
    "id": "pn",
    "name": "Pitcairn Islands",
    "x": 114.8,
    "y": 533,
    "width": 0.2,
    "height": 0.3
  },
  "pr": {
    "id": "pr",
    "name": "Puerto Rico",
    "x": 288.4,
    "y": 411.2,
    "width": 4.6,
    "height": 1.7
  },
  "ps": {
    "id": "ps",
    "name": "Palestinian Territories",
    "x": 573.7,
    "y": 368.8,
    "width": 2,
    "height": 3.9
  },
  "pt": {
    "id": "pt",
    "name": "Portugal",
    "x": 452.9,
    "y": 342.3,
    "width": 9.2,
    "height": 18.6
  },
  "pw": {
    "id": "pw",
    "name": "Palau",
    "x": 852.6,
    "y": 441.9,
    "width": 0.4,
    "height": 1
  },
  "py": {
    "id": "py",
    "name": "Paraguay",
    "x": 310.9,
    "y": 530.3,
    "width": 23.6,
    "height": 25.2
  },
  "qa": {
    "id": "qa",
    "name": "Qatar",
    "x": 618.5,
    "y": 389.8,
    "width": 2.4,
    "height": 4.9
  },
  "re": {
    "id": "re",
    "name": "Reunion",
    "x": 630.8,
    "y": 523.2,
    "width": 1.7,
    "height": 1.5
  },
  "ro": {
    "id": "ro",
    "name": "Romania",
    "x": 545,
    "y": 317.9,
    "width": 26.6,
    "height": 18.5
  },
  "rs": {
    "id": "rs",
    "name": "Serbia",
    "x": 533.6,
    "y": 325,
    "width": 11.6,
    "height": 15.3
  },
  "ru": {
    "id": "ru",
    "name": "Russia",
    "x": 780.3,
    "y": 220.9,
    "width": 457.2,
    "height": 231.2
  },
  "rw": {
    "id": "rw",
    "name": "Rwanda",
    "x": 558.7,
    "y": 468.3,
    "width": 5.7,
    "height": 4.9
  },
  "sa": {
    "id": "sa",
    "name": "Saudi Arabia",
    "x": 601.5,
    "y": 392.4,
    "width": 59,
    "height": 48.4
  },
  "sb": {
    "id": "sb",
    "name": "Solomon Islands",
    "x": 921.6,
    "y": 485.4,
    "width": 4,
    "height": 2.9
  },
  "sc": {
    "id": "sc",
    "name": "Seychelles",
    "x": 630.6,
    "y": 476,
    "width": 0.4,
    "height": 0.6
  },
  "sd": {
    "id": "sd",
    "name": "Sudan",
    "x": 559.7,
    "y": 419,
    "width": 47.1,
    "height": 39.3
  },
  "se": {
    "id": "se",
    "name": "Sweden",
    "x": 524.4,
    "y": 234.6,
    "width": 36.5,
    "height": 83.9
  },
  "sg": {
    "id": "sg",
    "name": "Singapore",
    "x": 766.3,
    "y": 459.1,
    "width": 1,
    "height": 0.5
  },
  "sh": {
    "id": "sh",
    "name": "Saint Helena",
    "x": 458.8,
    "y": 508,
    "width": 0.3,
    "height": 0.3
  },
  "si": {
    "id": "si",
    "name": "Slovenia",
    "x": 516.8,
    "y": 317.4,
    "width": 8.8,
    "height": 5.8
  },
  "sj": {
    "id": "sj",
    "name": "Svalbard and Jan Mayen",
    "x": 519.9,
    "y": 95.6,
    "width": 30.1,
    "height": 48.5
  },
  "sk": {
    "id": "sk",
    "name": "Slovakia",
    "x": 530.2,
    "y": 306.9,
    "width": 15.9,
    "height": 7.8
  },
  "sl": {
    "id": "sl",
    "name": "Sierra Leone",
    "x": 441.8,
    "y": 439.3,
    "width": 8.4,
    "height": 8.7
  },
  "sm": {
    "id": "sm",
    "name": "San Marino",
    "x": 509.9,
    "y": 326.1,
    "width": 0.3,
    "height": 0.4
  },
  "sn": {
    "id": "sn",
    "name": "Senegal",
    "x": 434.3,
    "y": 422,
    "width": 17.3,
    "height": 12.5
  },
  "so": {
    "id": "so",
    "name": "Somalia",
    "x": 604.5,
    "y": 448.5,
    "width": 29.3,
    "height": 38.4
  },
  "sr": {
    "id": "sr",
    "name": "Suriname",
    "x": 317.7,
    "y": 452,
    "width": 11.4,
    "height": 11.6
  },
  "ss": {
    "id": "ss",
    "name": "South Sudan",
    "x": 558.3,
    "y": 440.9,
    "width": 31.2,
    "height": 24.6
  },
  "st": {
    "id": "st",
    "name": "Sao Tome and Principe",
    "x": 493.4,
    "y": 462.3,
    "width": 0.8,
    "height": 1
  },
  "sv": {
    "id": "sv",
    "name": "El Salvador",
    "x": 225.4,
    "y": 424.1,
    "width": 6.7,
    "height": 3.6
  },
  "sx": {
    "id": "sx",
    "name": "Saint Martin",
    "x": 297.9,
    "y": 411.8,
    "width": 0.3,
    "height": 0.1
  },
  "sy": {
    "id": "sy",
    "name": "Syria",
    "x": 584.5,
    "y": 359.1,
    "width": 18.5,
    "height": 17
  },
  "sz": {
    "id": "sz",
    "name": "Swaziland",
    "x": 563.2,
    "y": 539.7,
    "width": 3.7,
    "height": 4.9
  },
  "tc": {
    "id": "tc",
    "name": "Turks and Caicos Islands",
    "x": 273.6,
    "y": 400.6,
    "width": 0.6,
    "height": 0.3
  },
  "td": {
    "id": "td",
    "name": "Chad",
    "x": 527.4,
    "y": 418.8,
    "width": 29.6,
    "height": 46.4
  },
  "tf": {
    "id": "tf",
    "name": "French Southern and Antarctic Lands",
    "x": 670.4,
    "y": 621.1,
    "width": 5,
    "height": 4.5
  },
  "tg": {
    "id": "tg",
    "name": "Togo",
    "x": 477.3,
    "y": 438.8,
    "width": 5.2,
    "height": 14.2
  },
  "th": {
    "id": "th",
    "name": "Thailand",
    "x": 759.8,
    "y": 425.9,
    "width": 23.2,
    "height": 42.5
  },
  "tj": {
    "id": "tj",
    "name": "Tajikistan",
    "x": 674.8,
    "y": 344.9,
    "width": 21.8,
    "height": 15.6
  },
  "tk": {
    "id": "tk",
    "name": "Tokelau",
    "x": 1001.1,
    "y": 486.9,
    "width": 0.1,
    "height": 0.1
  },
  "tl": {
    "id": "tl",
    "name": "Timor-Leste",
    "x": 828.8,
    "y": 487.9,
    "width": 6.7,
    "height": 3.4
  },
  "tm": {
    "id": "tm",
    "name": "Turkmenistan",
    "x": 642.1,
    "y": 344.3,
    "width": 39.7,
    "height": 27.4
  },
  "tn": {
    "id": "tn",
    "name": "Tunisia",
    "x": 501.6,
    "y": 362.4,
    "width": 11.3,
    "height": 23.9
  },
  "to": {
    "id": "to",
    "name": "Tonga",
    "x": 993.5,
    "y": 523.3,
    "width": 0.8,
    "height": 0.6
  },
  "tr": {
    "id": "tr",
    "name": "Turkey",
    "x": 574.4,
    "y": 344.5,
    "width": 52.5,
    "height": 22.4
  },
  "tt": {
    "id": "tt",
    "name": "Trinidad and Tobago",
    "x": 302.5,
    "y": 433.6,
    "width": 2.8,
    "height": 2.2
  },
  "tv": {
    "id": "tv",
    "name": "Tuvalu",
    "x": 977.9,
    "y": 486.7,
    "width": 0.1,
    "height": 0.3
  },
  "tw": {
    "id": "tw",
    "name": "Taiwan",
    "x": 814.5,
    "y": 395.1,
    "width": 5.2,
    "height": 10.2
  },
  "tz": {
    "id": "tz",
    "name": "Tanzania",
    "x": 572.8,
    "y": 480.8,
    "width": 31.3,
    "height": 30.1
  },
  "ua": {
    "id": "ua",
    "name": "Ukraine",
    "x": 562.3,
    "y": 307.5,
    "width": 50.5,
    "height": 33.7
  },
  "ug": {
    "id": "ug",
    "name": "Uganda",
    "x": 565.5,
    "y": 459.1,
    "width": 15.2,
    "height": 15.9
  },
  "um-dq": {
    "id": "um-dq",
    "name": "Jarvis Island",
    "x": 25.8,
    "y": 464,
    "width": 0.1,
    "height": 0.1
  },
  "um-fq": {
    "id": "um-fq",
    "name": "Baker Island",
    "x": 990,
    "y": 462.3,
    "width": 0,
    "height": 0
  },
  "um-hq": {
    "id": "um-hq",
    "name": "Howland Island",
    "x": 989.5,
    "y": 460.7,
    "width": 0,
    "height": 0.1
  },
  "um-jq": {
    "id": "um-jq",
    "name": "Johnston Atoll",
    "x": 1009.4,
    "y": 415.6,
    "width": 0,
    "height": 0
  },
  "um-mq": {
    "id": "um-mq",
    "name": "Midway Islands",
    "x": 987.4,
    "y": 380.9,
    "width": 0.1,
    "height": 0.1
  },
  "um-wq": {
    "id": "um-wq",
    "name": "Wake Island",
    "x": 942.6,
    "y": 408.1,
    "width": 0.1,
    "height": 0.1
  },
  "us": {
    "id": "us",
    "name": "United States",
    "x": 205.9,
    "y": 347.2,
    "width": 162,
    "height": 86.5
  },
  "uy": {
    "id": "uy",
    "name": "Uruguay",
    "x": 318.3,
    "y": 559,
    "width": 14.9,
    "height": 16
  },
  "uz": {
    "id": "uz",
    "name": "Uzbekistan",
    "x": 656.1,
    "y": 335.4,
    "width": 48.2,
    "height": 31.3
  },
  "va": {
    "id": "va",
    "name": "Vatican City",
    "x": 509.8,
    "y": 333.9,
    "width": 0,
    "height": 0
  },
  "vc": {
    "id": "vc",
    "name": "Saint Vincent and the Grenadines",
    "x": 303.1,
    "y": 425.6,
    "width": 0.4,
    "height": 0.6
  },
  "ve": {
    "id": "ve",
    "name": "Venezuela",
    "x": 288,
    "y": 444.9,
    "width": 38,
    "height": 32.3
  },
  "vg": {
    "id": "vg",
    "name": "British Virgin Islands",
    "x": 294.2,
    "y": 410.5,
    "width": 0.3,
    "height": 0.2
  },
  "vi": {
    "id": "vi",
    "name": "US Virgin Islands",
    "x": 293.2,
    "y": 412.6,
    "width": 0.9,
    "height": 0.3
  },
  "vn": {
    "id": "vn",
    "name": "Vietnam",
    "x": 771.8,
    "y": 417.4,
    "width": 20.5,
    "height": 43
  },
  "vu": {
    "id": "vu",
    "name": "Vanuatu",
    "x": 943.2,
    "y": 505.6,
    "width": 1.9,
    "height": 2.9
  },
  "wf": {
    "id": "wf",
    "name": "Wallis and Futuna",
    "x": 985.3,
    "y": 503.1,
    "width": 0.4,
    "height": 0.3
  },
  "ws": {
    "id": "ws",
    "name": "Samoa",
    "x": 1001.2,
    "y": 501.3,
    "width": 1.7,
    "height": 1
  },
  "ye": {
    "id": "ye",
    "name": "Yemen",
    "x": 609.2,
    "y": 418.2,
    "width": 29.3,
    "height": 18.5
  },
  "yt": {
    "id": "yt",
    "name": "Mayotte",
    "x": 601.6,
    "y": 499,
    "width": 0.5,
    "height": 0.9
  },
  "za": {
    "id": "za",
    "name": "South Africa",
    "x": 544.1,
    "y": 546.4,
    "width": 46.1,
    "height": 40.3
  },
  "zm": {
    "id": "zm",
    "name": "Zambia",
    "x": 553,
    "y": 500,
    "width": 32.8,
    "height": 28.2
  },
  "zw": {
    "id": "zw",
    "name": "Zimbabwe",
    "x": 556.6,
    "y": 517.1,
    "width": 21.8,
    "height": 20
  }
};

// Game State Machine
let gameState = {
    history: {}, // Maps countryCode -> { status: 'correct' | 'failed', attemptsUsed: number }
    activeCountryId: null,
    activeChances: 1,
    legendMap: {},
    nextLegendNumber: 1
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
    try {
        const container = document.getElementById("map-viewport") || document.getElementById("map-slice-1");
        
        if (container && typeof WORLD_MAP_SVG !== 'undefined') {
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

            // Color all countries based on their ID on startup
            container.querySelectorAll("path[id], g[id]").forEach(element => {
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
        }
    } catch (err) {
        console.error("Failed to initialize maps:", err);
    } finally {
        if (loader) loader.style.display = "none";
    }
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
            let x, y, width;
            const pos = countryPositions[countryId];
            if (pos) {
                x = pos.x;
                y = pos.y;
                width = pos.width;
            } else {
                const bbox = elem.getBBox();
                if (bbox.width <= 0 || bbox.height <= 0) return;
                x = bbox.x + bbox.width / 2;
                y = bbox.y + bbox.height / 2;
                width = bbox.width;
            }
            
            // Create group container for the cross
            const g = document.createElementNS("http://www.w3.org/2000/svg", "g");
            g.setAttribute("class", "map-country-cross");
            g.setAttribute("data-country-id", countryId);
            
            // Size of cross proportional to landmass width
            const size = Math.max(3.5, Math.min(8.5, width / 6));
            
            // Line 1: Top-Left to Bottom-Right
            const line1 = document.createElementNS("http://www.w3.org/2000/svg", "line");
            line1.setAttribute("x1", x - size);
            line1.setAttribute("y1", y - size);
            line1.setAttribute("x2", x + size);
            line1.setAttribute("y2", y + size);
            line1.setAttribute("stroke-width", Math.max(1.2, size / 3));
            
            // Line 2: Top-Right to Bottom-Left
            const line2 = document.createElementNS("http://www.w3.org/2000/svg", "line");
            line2.setAttribute("x1", x + size);
            line2.setAttribute("y1", y - size);
            line2.setAttribute("x2", x - size);
            line2.setAttribute("y2", y + size);
            line2.setAttribute("stroke-width", Math.max(1.2, size / 3));
            
            g.appendChild(line1);
            g.appendChild(line2);
            svg.appendChild(g);
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

// Check if a country is small/narrow and should use numbered circle callouts
function isSmallCountry(countryId) {
    const pos = countryPositions[countryId];
    const name = countryNames[countryId] || countryId;
    if (!pos) return false;
    return pos.width < 36 || (pos.width / name.length) < 2.8;
}

// Add SVG country text labels at centroid or numbered callout
function addCountryLabel(countryId) {
    // Remove existing labels for this country first to avoid duplicates
    removeCountryLabel(countryId);
    
    const elements = document.querySelectorAll(`.map-viewport svg #${countryId}, .map-viewport svg [id="${countryId}"]`);
    
    elements.forEach(elem => {
        const svg = elem.closest("svg");
        if (!svg) return;
        
        try {
            const pos = countryPositions[countryId];
            let x, y, width;
            if (pos) {
                x = pos.x;
                y = pos.y;
                width = pos.width;
            } else {
                const bbox = elem.getBBox();
                if (bbox.width <= 0 || bbox.height <= 0) return;
                x = bbox.x + bbox.width / 2;
                y = bbox.y + bbox.height / 2;
                width = bbox.width;
            }
            
            const name = countryNames[countryId] || countryId.toUpperCase();
            const needsCallout = isSmallCountry(countryId);
            
            if (needsCallout) {
                // Assign legend number
                if (!gameState.legendMap[countryId]) {
                    gameState.legendMap[countryId] = gameState.nextLegendNumber++;
                }
                const num = gameState.legendMap[countryId];
                
                const g = document.createElementNS("http://www.w3.org/2000/svg", "g");
                g.setAttribute("class", "map-country-callout");
                g.setAttribute("data-country-id", countryId);
                
                let circleX = x;
                let circleY = y;
                
                // If very small (islands, narrow strip), draw leader line into adjacent sea
                if (width < 14) {
                    circleX = x + 14;
                    circleY = y - 9;
                    
                    const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
                    line.setAttribute("x1", x);
                    line.setAttribute("y1", y);
                    line.setAttribute("x2", circleX);
                    line.setAttribute("y2", circleY);
                    line.setAttribute("class", "callout-line");
                    g.appendChild(line);
                }
                
                const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
                circle.setAttribute("cx", circleX);
                circle.setAttribute("cy", circleY);
                circle.setAttribute("r", "4.5");
                circle.setAttribute("class", "callout-circle");
                
                const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
                text.setAttribute("x", circleX);
                text.setAttribute("y", circleY);
                text.setAttribute("class", "callout-text");
                text.textContent = num;
                
                g.appendChild(circle);
                g.appendChild(text);
                svg.appendChild(g);
                
                updateLegendUI();
            } else {
                // Large country: display direct text on map
                const textNode = document.createElementNS("http://www.w3.org/2000/svg", "text");
                textNode.setAttribute("x", x);
                textNode.setAttribute("y", y);
                textNode.setAttribute("text-anchor", "middle");
                textNode.setAttribute("dominant-baseline", "middle");
                textNode.setAttribute("class", "map-country-label");
                textNode.setAttribute("data-country-id", countryId);
                
                const fontSize = Math.max(4.5, Math.min(8.5, width / 6.5));
                textNode.setAttribute("style", `font-size: ${fontSize}px;`);
                textNode.textContent = name;
                svg.appendChild(textNode);
            }
        } catch (e) {
            console.error("Failed to add label for " + countryId, e);
        }
    });
}

// Remove SVG country text labels and callouts
function removeCountryLabel(countryId) {
    document.querySelectorAll(`.map-viewport svg text.map-country-label[data-country-id="${countryId}"]`).forEach(elem => elem.remove());
    document.querySelectorAll(`.map-viewport svg g.map-country-callout[data-country-id="${countryId}"]`).forEach(elem => elem.remove());
    if (gameState.legendMap) {
        delete gameState.legendMap[countryId];
    }
    updateLegendUI();
}

// Update the Bottom-Left Map Legend UI
function updateLegendUI() {
    const legendPanel = document.getElementById("map-legend");
    const legendList = document.getElementById("legend-list");
    if (!legendPanel || !legendList) return;
    
    const entries = Object.keys(gameState.legendMap).map(id => ({
        id,
        num: gameState.legendMap[id],
        name: countryNames[id] || id
    })).sort((a, b) => a.num - b.num);
    
    if (entries.length === 0) {
        legendPanel.style.display = "none";
        legendList.innerHTML = "";
        return;
    }
    
    legendPanel.style.display = "block";
    legendList.innerHTML = "";
    
    entries.forEach(entry => {
        const div = document.createElement("div");
        div.className = "legend-item";
        div.setAttribute("data-country-id", entry.id);
        div.innerHTML = `<span class="legend-badge">${entry.num}</span><span class="legend-name">${entry.name}</span>`;
        
        // Clicking a legend item pulses the country on the map
        div.addEventListener("click", () => {
            clearPulseHighlight();
            document.querySelectorAll(`.map-viewport svg #${entry.id}, .map-viewport svg [id="${entry.id}"]`).forEach(elem => {
                elem.classList.add("active-pulse");
                setTimeout(() => elem.classList.remove("active-pulse"), 2500);
            });
        });
        
        legendList.appendChild(div);
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
    gameState.legendMap = {};
    gameState.nextLegendNumber = 1;
    saveGame();
    updateScoreboard();
    updateLegendUI();
    
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
