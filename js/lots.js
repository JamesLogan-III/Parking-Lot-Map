	var lots = []; // Array of lot info
  lots = [
    {
      "id": "lot1",
      "lotName": "Union Station Parking Garage",
      "nicknames": [
        "USPG",
        "Union Station"
      ],
      "lat": 47.597520,
      "long": -122.328885,
      "svHeading": 90,
      "address": [
        "550 4th Ave S",
        "820 4th Ave S"
      ],
      "crossStreets": "corner of 4th & Weller",
      "garageHeight": "",
      "stalls": "422 stalls, 243 truck, 14 ADA",
      "manager": "Jorge",
      "hours": "M-F 6am-9pm / Sat 7am-5pm/ Sun closed",
      "attendant": "Yes",
      "dailyRates": "<ul class=\"ratesTable\"><li><span class=\"hourly\">0 - 1 hrs</span><span class=\"rate\">7</span></li><li><span class=\"hourly\">1 - 2 hrs</span><span class=\"rate\">9</span></li><li><span class=\"hourly\">2 - 3 hrs</span><span class=\"rate\">11</span></li><li><span class=\"hourly\">3 - 4 hrs</span><span class=\"rate\">13</span></li><li><span class=\"hourly\">4 - 5 hrs</span><span class=\"rate\">15</span></li><li><span class=\"hourly\">5 - 6 hrs</span><span class=\"rate\">17</span></li><li><span class=\"hourly\">6 - 7 hrs</span><span class=\"rate\">19</span></li><li><span class=\"hourly\">7+ hrs*</span><span class=\"rate\">21</span></li><li><span class=\"hourly\">*Max calendar day</span><span class=\"rate\">25.64</span></li></ul>",
      "taxIncluded": false,
      "earlyBird": "In by 9:30am, out by 6pm: $13<br/>10 hr max",
      "monthlyRates": "<span class=\"bulletLabel\">Access Card (24/7):</span><ul class=\"ratesTable\"><li><span class=\"hourly\">Regular</span><span class=\"rate\">200 plus tax ($244.20)</span></li><li><span class=\"hourly\">Executive</span><span class=\"rate\">275 plus tax ($335.78)</span></li><li><span class=\"hourly\">Motorcycle</span><span class=\"rate\">167 plus tax ($203.91)</span></li></ul><span class=\"bulletLabel\">Decal Only:</span><ul class=\"ratesTable\"><li><span class=\"hourly\">7th & 8th Floor</span><span class=\"rate\">167 plus tax ($203.91)</span></li><li><span class=\"hourly\">* (Must be out 3 hrs prior to Seahawks/Sounders games)</span></li><li><span class=\"hourly\">* $25.00 replacement decal/card fee</span></li></ul>",
      "events": "Event restrictions apply",
      "visible": true,
      "notes": "<strong>USPG South Entrance:</strong><br/>On 4th Ave South.<br/>Just North of the Salvation Army<br/>Just South of Seattle Blvd.<br/>Electric car charging stations not for public use"
    },
    {
      "id": "lot2",
      "lotName": "CenturyLink Field North Lot",
      "nicknames": [
        "clink north lot",
        "northlot"
      ],
      "lat": 47.598263,
      "long": -122.331626,
      "svHeading": 180,
      "address": [
        "221 S. King Street"
      ],
      "crossStreets": "corner of 2nd & King",
      "garageHeight": "Surface Lot",
      "stalls": "W-333 stalls, E-216 stalls, 14 ADA",
      "manager": "Julia",
      "hours": "M-Th 5a-9p / F 5a-12a / Sat 6a-12a / Sun 6a-9p",
      "attendant": "Yes",
      "dailyRates": "<span class=\"bulletLabel\">Daily (All Day):</span><ul class=\"ratesTable\"><li><span class=\"hourly\"> </span><span class=\"rate\">16</span></li></ul><span class=\"bulletLabel\">Evening/Weekend:</span><ul class=\"ratesTable\"><li><span class=\"hourly\"> </span><span class=\"rate\">7</span></li></ul><span class=\"bulletLabel\">RV/Bus (non-events):</span><ul class=\"ratesTable\"><li><span class=\"hourly\"> </span><span class=\"rate\">80</span></li></ul>",
      "taxIncluded": true,
      "earlyBird": "",
      "monthlyRates": "<span class=\"bulletLabel\">Hang Tag:</span><ul class=\"ratesTable\"><li><span class=\"hourly\">Monthly</span><span class=\"rate\">250</span></li><li><span class=\"hourly\">Half Month</span><span class=\"rate\">125 (After the 15th)</span></li><li><span class=\"hourly\">Purchase hang tag from attendant</span></li><li><span class=\"hourly\">Not valid during Seahawks or Sounders game days or other event days as posted with the attendant.</span></li>",
      "events": "Event rates supersede daily rates",
      "visible": true,
      "notes": "4 Electric car charging stations<br/>*No overnight parking"
    },
    {
      "id": "lot3",
      "lotName": "CenturyLink Field Garage",
      "nicknames": [
        "clink",
        "CLF",
        "Century Link"
      ],
      "lat": 47.592491,
      "long": -122.330944,
      "svHeading": 0,
      "address": [
        "330 S. Royal Brougham Way"
      ],
      "crossStreets": "Royal Brougham & Occidental",
      "garageHeight": "6'8 (1st and 2nd floor) 6'6 (other floors)",
      "stalls": "1624 stalls, 65 ADA (2nd Floor)",
      "manager": "Julia",
      "hours": "5:30am - 11:30pm (staffed until 9:00pm)",
      "attendant": "Yes",
      "dailyRates": "<span class=\"bulletLabel\">Daily (All Day):</span><ul class=\"ratesTable\"><li><span class=\"hourly\"> </span><span class=\"rate\">7</span></li></ul><span class=\"bulletLabel\">Evening/Weekend:</span><ul class=\"ratesTable\"><li><span class=\"hourly\"> </span><span class=\"rate\">7</span></li></ul>",
      "taxIncluded": true,
      "earlyBird": "",
      "monthlyRates": "",
      "visible": true,
      "events": "Event rates supersede daily rates",
      "notes": "2 Electric car charging stations<br/>*No overnight parking"
    },
    {
      "id": "lot4",
      "lotName": "Metropolitan Tower",
      "nicknames": [
        "Met Tower",
        "met"
      ],
      "lat": 47.6145821,
      "long": -122.3366565,
      "svHeading": 210,
      "address": [
        "1909 7th Ave",
        "1942 Westlake Ave"
      ],
      "crossStreets": "7th Ave between Virginia & Stewart",
      "garageHeight": "Lower: 6'8\", P5-P7: 6'4\"",
      "stalls": "289 stalls, 52 reserved, 17 ADA",
      "manager": "Sean",
      "hours": "M-F 6am-8pm / Sat-Sun 10am-6pm",
      "attendant": "2pm-8pm (cc pay station)",
      "dailyRates": "<ul class=\"ratesTable\"><li><span class=\"hourly\">0 - 1 hrs</span><span class=\"rate\">8</span></li><li><span class=\"hourly\">1 - 3 hrs</span><span class=\"rate\">9</span></li><li><span class=\"hourly\">3 - 5 hrs</span><span class=\"rate\">12</span></li><li><span class=\"hourly\">5 - 7 hrs</span><span class=\"rate\">15</span></li><li><span class=\"hourly\">7 - 10 hrs</span><span class=\"rate\">17</span></li><li><span class=\"hourly\">10 - 12 hrs</span><span class=\"rate\">19</span></li><li><span class=\"hourly\">12 - 24 hrs</span><span class=\"rate\">24</span></li></ul><span class=\"bulletLabel\">Weekends:</span><ul class=\"ratesTable\"><li><span class=\"hourly\"> </span><span class=\"rate\">8</span></li></ul>",
      "taxIncluded": false,
      "earlyBird": "In by 9:30am, out by 6:30pm: $13.00",
      "monthlyRates": "",
      "visible": true,
      "events": "Event restrictions don't apply",
      "notes": ""
    },
    {
      "id": "lot5",
      "lotName": "6th and King",
      "nicknames": [
        "king street lot",
        "king"
      ],
      "lat": 47.598371,
      "long": -122.327002,
      "svHeading": 180,
      "address": [
        "519 South King Street"
      ],
      "crossStreets": "Corner of 6th and King",
      "garageHeight": "Surface Lot",
      "stalls": "70 stalls, 2 ADA",
      "manager": "",
      "hours": "24/7",
      "attendant": "No (cc pay station)",
      "dailyRates": "<ul class=\"ratesTable\"><li><span class=\"hourly\">0 - 2 hrs</span><span class=\"rate\">4</span></li><li><span class=\"hourly\">2 - 3 hrs</span><span class=\"rate\">6</span></li><li><span class=\"hourly\">3 - 4 hrs</span><span class=\"rate\">8</span></li><li><span class=\"hourly\">4 - 6 hrs</span><span class=\"rate\">10</span></li><li><span class=\"hourly\">6 - 10 hrs</span><span class=\"rate\">12</span></li><li><span class=\"hourly\">10 - 12 hrs</span><span class=\"rate\">16</span></li></ul><span class=\"bulletLabel\">After Hours:</span><ul class=\"ratesTable\"><li><span class=\"hourly\">5pm-5am</span><span class=\"rate\">18</span></li></ul><span class=\"bulletLabel\">Evenings:</span><ul class=\"ratesTable\"><li><span class=\"hourly\">5pm-5am</span><span class=\"rate\">5</span></li></ul>",
      "taxIncluded": false,
      "earlyBird": "In by 10am, out by 6pm: $10.50, Starts at 5am, 10 hr max",
      "monthlyRates": "<span class=\"bulletLabel\">Decal:</span> $200 plus tax ($244.20)",
      "visible": true,
      "events": "Event restrictions don't apply",
      "notes": ""
    }
  ];
