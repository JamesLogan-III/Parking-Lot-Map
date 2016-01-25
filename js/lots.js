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
    },
    {
      "id": "lot6",
      "lotName": "5th and Main",
      "nicknames": [
        "main",
        "5th"
      ],
      "lat": 47.6002722,
      "long": -122.3276678,
      "svHeading": 258,
      "address": [
        "412 South Main St."
      ],
      "crossStreets": "NW corner of 5th & Main",
      "garageHeight": "Surface Lot",
      "stalls": "54 stalls",
      "manager": "",
      "hours": "24/7",
      "attendant": "No (slot box)",
      "dailyRates": "<ul class=\"ratesTable\"><li><span class=\"hourly\">0 - 2 hrs</span><span class=\"rate\">6</span></li><li><span class=\"hourly\">2 - 4 hrs</span><span class=\"rate\">9</span></li><li><span class=\"hourly\">4 - 10 hrs</span><span class=\"rate\">12</span></li></ul><span class=\"bulletLabel\">Evenings:</span><ul class=\"ratesTable\"><li><span class=\"hourly\">5pm-5am</span><span class=\"rate\">6</span></li></ul><span class=\"bulletLabel\">Weekends:</span><ul class=\"ratesTable\"><li><span class=\"hourly\">5pm-5am</span><span class=\"rate\">6</span></li></ul>",
      "taxIncluded": true,
      "earlyBird": "",
      "monthlyRates": "<span class=\"bulletLabel\">Decal:</span> $200 plus tax ($244.20)<br/><strong>Mon-Fri until 5pm: Pass holders only (varies)</strong>",
      "visible": true,
      "events": "Event restrictions apply",
      "notes": ""
    },
    {
      "id": "lot7",
      "lotName": "Home Depot Lot (HD3)",
      "nicknames": [
        "homedepot lot",
        "home depot"
      ],
      "lat": 47.5786067,
      "long": -122.3341992,
      "svHeading": 97,
      "address": [
        "2746 1st Avenue South"
      ],
      "crossStreets": "corner of 1st & Lander",
      "garageHeight": "Surface Lot",
      "stalls": "62 stalls",
      "manager": "",
      "hours": "24/7",
      "attendant": "No (slot box)",
      "dailyRates": "<ul class=\"ratesTable\"><li><span class=\"hourly\">0 - 2 hrs</span><span class=\"rate\">8</span></li><li><span class=\"hourly\">2 - 4 hrs</span><span class=\"rate\">10</span></li><li><span class=\"hourly\">4 - 10 hrs</span><span class=\"rate\">14</span></li></ul><span class=\"bulletLabel\">Evenings:</span><ul class=\"ratesTable\"><li><span class=\"hourly\">5pm-5am</span><span class=\"rate\">10</span></li></ul>",
      "taxIncluded": true,
      "earlyBird": "",
      "monthlyRates": "<span class=\"bulletLabel\">Decal:</span> $145 plus tax ($177.05)",
      "visible": true,
      "events": "Event restrictions don't apply",
      "notes": ""
    },
    {
      "id": "lot8",
      "lotName": "KOMO Plaza",
      "nicknames": [
        "komo",
        "seatte center",
        "space needle",
        "fisher plaza"
      ],
      "lat": 47.619754,
      "long": -122.3482264,
      "svHeading": 177,
      "address": [
        "140 4th Avenue North"
      ],
      "crossStreets": "Garage across from the Space Needle",
      "garageHeight": "6'8\"",
      "stalls": "505 stalls",
      "manager": "Julia/Scott",
      "hours": "M-F 7am-1am / Sat-Sun 9am-1am",
      "attendant": "Yes: 1p - 7p (cc pay station)",
      "dailyRates": "<ul class=\"ratesTable\"><li><span class=\"hourly\">10 - 30 min</span><span class=\"rate\">7.5</span></li><li><span class=\"hourly\">30 min - 1 hr</span><span class=\"rate\">10</span></li><li><span class=\"hourly\">1 - 2 hrs</span><span class=\"rate\">12.5</span></li><li><span class=\"hourly\">2 - 3 hrs</span><span class=\"rate\">15</span></li><li><span class=\"hourly\">3 - 4 hrs</span><span class=\"rate\">17.5</span></li><li><span class=\"hourly\">4 - 10 hrs</span><span class=\"rate\">20</span></li><li><span class=\"hourly\">10 - 24 hrs</span><span class=\"rate\">28</span></li></ul><span class=\"bulletLabel\">Evenings:</span><ul class=\"ratesTable\"><li><span class=\"hourly\">5pm-Close</span><span class=\"rate\">9</span></li></ul><span class=\"bulletLabel\">Weekends:</span><ul class=\"ratesTable\"><li><span class=\"hourly\">Open-Close</span><span class=\"rate\">10</span></li></ul>",
      "taxIncluded": false,
      "earlyBird": "In by 9:30am: $10.00 - 10 Hour Max",
      "monthlyRates": "<span class=\"bulletLabel\">Access Card (24/7):</span><br/>Non-resident - $240 plus tax ($244.20)<br/>Resident - $220 plus tax ($268.62)",
      "visible": true,
      "events": "Event restrictions apply",
      "notes": ""
    },
    {
      "id": "lot9",
      "lotName": "Pit Lot",
      "nicknames": [
        "pit"
      ],
      "lat": 47.6136717,
      "long": -122.3194326,
      "svHeading": 128,
      "address": [
        "1420 10th Avenue"
      ],
      "crossStreets": "Across from Neumos",
      "garageHeight": "Surface Lot",
      "stalls": "84 stalls",
      "manager": "",
      "hours": "24/7",
      "attendant": "No (cc pay station)",
      "dailyRates": "<ul class=\"ratesTable\"><li><span class=\"hourly\">0 - 2 hrs</span><span class=\"rate\">5</span></li><li><span class=\"hourly\">2 - 4 hrs</span><span class=\"rate\">7</span></li><li><span class=\"hourly\">4 - 10 hrs</span><span class=\"rate\">11</span></li><li><span class=\"bulletLabel\">Weekends Only</span></li></ul><span class=\"bulletLabel\">Evenings:</span><ul class=\"ratesTable\"><li><span class=\"hourly\">5pm-5am</span><span class=\"rate\">10</span></li></ul>",
      "taxIncluded": false,
      "earlyBird": "",
      "monthlyRates": "<span class=\"bulletLabel\">Hang Tag (24/7):</span><br/>$180 plus tax ($219.60)<br />No assigned parking stalls unless noted by signs",
      "visible": true,
      "events": "Event restrictions apply",
      "notes": ""
    },
    {
      "id": "lot10",
      "lotName": "1000 E Pike Street",
      "nicknames": [
        "pike and 10th"
      ],
      "lat": 47.6140891,
      "long": -122.3189352,
      "svHeading": 1,
      "address": [
        "1420 10th Avenue",
      ],
      "crossStreets": "10th and East Pike, Across from Cafe Vita",
      "garageHeight": "Surface Lot",
      "stalls": "11 stalls",
      "manager": "",
      "hours": "24/7",
      "attendant": "No (cc pay station)",
      "dailyRates": "<ul class=\"ratesTable\"><li><span class=\"hourly\">0 - 2 hrs</span><span class=\"rate\">5</span></li><li><span class=\"hourly\">2 - 4 hrs</span><span class=\"rate\">7</span></li><li><span class=\"hourly\">4 - 10 hrs</span><span class=\"rate\">13</span></li></ul><span class=\"bulletLabel\">Evenings:</span><ul class=\"ratesTable\"><li><span class=\"hourly\">5pm-5am</span><span class=\"rate\">10</span></li><li><span class=\"bulletLabel\">3x stalls 6am-6pm</span></li></ul>",
      "taxIncluded": false,
      "earlyBird": "",
      "monthlyRates": "<span class=\"bulletLabel\">Hang Tag (24/7):</span><br/>$180 plus tax ($219.60)<br />No assigned parking stalls unless noted by signs",
      "visible": true,
      "events": "Event restrictions apply",
      "notes": ""
    },
    {
      "id": "lot11",
      "lotName": "5th and Jackson",
      "nicknames": [
        "jackson",
        "5th"
      ],
      "lat": 47.5994716,
      "long": -122.3294787,
      "svHeading": 0,
      "address": [
        "500 South Jackson Street"
      ],
      "crossStreets": "5th & Jackson",
      "garageHeight": "Surface Lot",
      "stalls": "79 stalls, 21 reserved-5pm-11pm",
      "manager": "",
      "hours": "24/7",
      "attendant": "No (cc pay station)",
      "dailyRates": "<ul class=\"ratesTable\"><li><span class=\"hourly\">0 - 1 hrs</span><span class=\"rate\">6</span></li><li><span class=\"hourly\">1 - 2 hrs</span><span class=\"rate\">8</span></li><li><span class=\"hourly\">2 - 4 hrs</span><span class=\"rate\">12</span></li><li><span class=\"hourly\">4 - 6 hrs</span><span class=\"rate\">14</span></li><li><span class=\"hourly\">6 - 10 hrs</span><span class=\"rate\">18</span></li></ul><span class=\"bulletLabel\">Evenings:</span><ul class=\"ratesTable\"><li><span class=\"hourly\">5pm-5am</span><span class=\"rate\">6</span></li></ul>",
      "taxIncluded": false,
      "earlyBird": "10am-6pm $10.50 - 10 hrs max",
      "monthlyRates": "<span class=\"bulletLabel\">Decal:</span> $200 plus tax ($244.20)",
      "visible": true,
      "events": "Event restrictions don't apply",
      "notes": ""
    },
    {
      "id": "lot12",
      "lotName": "Merrill Place",
      "nicknames": [
        "merrill"
      ],
      "lat": 47.5982831,
      "long": -122.3350429,
      "svHeading": 353,
      "address": [
        "76 South King Street"
      ],
      "crossStreets": "corner of 1st & King",
      "garageHeight": "Lower: 6'10\"",
      "stalls": "127 stalls",
      "manager": "Sean",
      "hours": "M-F 6:30am-11pm / Sat 4am-12am, Sun Closed",
      "attendant": "Yes",
      "dailyRates": "<ul class=\"ratesTable\"><li><span class=\"hourly\">0 - 1 hrs</span><span class=\"rate\">7</span></li><li><span class=\"hourly\">1 - 2 hrs</span><span class=\"rate\">10</span></li><li><span class=\"hourly\">2 - 3 hrs</span><span class=\"rate\">14</span></li><li><span class=\"hourly\">3 - 4 hrs</span><span class=\"rate\">18</span></li><li><span class=\"hourly\">10 - 24 hrs</span><span class=\"rate\">24</span></li></ul>",
      "taxIncluded": true,
      "earlyBird": "In by 9:30am, out by 6pm: $15.00 - 10 Hour Max",
      "monthlyRates": "<span class=\"bulletLabel\">Decal and Remote (24/7):</span><br/>Regular - $200 plus tax ($244.20)<br/>Reserved - $345 no tax<br/>$40 remote fee",
      "visible": true,
      "events": "Event restrictions apply",
      "notes": ""
    },
    {
      "id": "lot13",
      "lotName": "Church Garage",
      "nicknames": [
        "church"
      ],
      "lat": 47.6189262,
      "long": -122.354122,
      "svHeading": 111,
      "address": [
        "150 Denny Way"
      ],
      "crossStreets": "corner of Denny & Warren",
      "garageHeight": "",
      "stalls": "146 stalls, 129 parkable,  7 ADA",
      "manager": "Andrew",
      "hours": "Sun-Th 6am-10pm / Fri-Sat 6am-11pm",
      "attendant": "During events (cc pay station)",
      "dailyRates": "<ul class=\"ratesTable\"><li><span class=\"hourly\">0 - 2 hrs</span><span class=\"rate\">5</span></li><li><span class=\"hourly\">2 - 4 hrs</span><span class=\"rate\">7</span></li><li><span class=\"hourly\">4 - 10 hrs</span><span class=\"rate\">10</span></li></ul>",
      "taxIncluded": true,
      "earlyBird": "In by 9:30am: $9.00 - Starting at 5am 10 Hour Max",
      "monthlyRates": "<span class=\"bulletLabel\">Hang Tag and Remote (24/7):</span><br/>Regular - $130 plus tax ($158.70)<br/><span class=\"bulletLabel\">Hang Tag (FUMC):</span>M-F - $95 plus tax ($116)<br/>$50 remote fee",
      "visible": true,
      "events": "Church event restrictions apply",
      "notes": ""
    },
    {
      "id": "lot14",
      "lotName": "Broadway Building",
      "nicknames": [
        "broadway"
      ],
      "lat": 47.6156716,
      "long": -122.3200356,
      "svHeading": 276,
      "address": [
        "1650 Broadway"
      ],
      "crossStreets": "corner of East Pine & Broadway",
      "garageHeight": "",
      "stalls": "131 stalls, 7 reserved, 2 ADA, 5 2hr",
      "manager": "Andrew",
      "hours": "",
      "attendant": "(cc & cash pay station)",
      "dailyRates": "<ul class=\"ratesTable\"><li><span class=\"hourly\">0 - 1 hrs</span><span class=\"rate\">4</span></li><li><span class=\"hourly\">1 - 2 hrs</span><span class=\"rate\">6</span></li><li><span class=\"hourly\">2 - 3 hrs</span><span class=\"rate\">8</span></li><li><span class=\"hourly\">3 - 4 hrs</span><span class=\"rate\">10</span></li><li><span class=\"hourly\">4 - 5 hrs</span><span class=\"rate\">12</span></li><li><span class=\"hourly\">5 - 12 hrs</span><span class=\"rate\">14</span></li></ul><span class=\"bulletLabel\">Evenings / Weekends:</span><ul class=\"ratesTable\"><li><span class=\"hourly\">5pm-11am</span><span class=\"rate\">8</span></li></ul>",
      "taxIncluded": false,
      "earlyBird": "In by 9:30am: $10.00 - Starting at 6am 10 Hour Max",
      "monthlyRates": "<span class=\"bulletLabel\">Decal and Remote (24/7):</span><br/>Non-Tenant $225 plus tax ($274.5)<br/>Tenant - $135 plus tax ($164.70)<br/>Motorcycle - $167 plus tax ($203.91)<br/>$40 remote fee (Hunters Capital $50)",
      "visible": true,
      "events": "Event restrictions apply",
      "notes": "Validate 1 hour from Blicks<br/>Hunters Capital: 1640 Broadway, Suite 200"
    },
    {
      "id": "lot15",
      "lotName": "King County Metro Garage",
      "nicknames": [
        "6th & Royal Brougham"
      ],
      "lat": 47.5911718,
      "long": -122.3259715,
      "svHeading": 257,
      "address": [
        "1233 6th Avenue South",
      ],
      "crossStreets": "6th & Royal Brougham",
      "garageHeight": "",
      "stalls": "",
      "manager": "Julia",
      "hours": "Events Only",
      "attendant": "Yes",
      "dailyRates": "<ul class=\"ratesTable\"><li><span class=\"hourly\">Events only pricing varies</span></li></ul>",
      "taxIncluded": true,
      "earlyBird": "",
      "monthlyRates": "",
      "visible": true,
      "events": "Events only - rate varies",
      "notes": ""
    },
    {
      "id": "lot16",
      "lotName": "Liberty Lot",
      "nicknames": [
        "liberty",
        "pike place"
      ],
      "lat": 47.6092824,
      "long": -122.3404446,
      "svHeading": 58,
      "address": [
        "1516 1st Avenue",
      ],
      "crossStreets": "corner of 1st & Pike",
      "garageHeight": "Surface Lot",
      "stalls": "51 stalls, 2 ADA",
      "manager": "Julia",
      "hours": "24/7",
      "attendant": "No (2 cc paystations)",
      "dailyRates": "<ul class=\"ratesTable\"><li><span class=\"hourly\">0 - 40 mins</span><span class=\"rate\">10</span></li><li><span class=\"hourly\">40 - 60 mins</span><span class=\"rate\">12</span></li><li><span class=\"hourly\">1 - 2 hrs</span><span class=\"rate\">16</span></li><li><span class=\"hourly\">2 - 3 hrs</span><span class=\"rate\">19</span></li><li><span class=\"hourly\">3 - 4 hrs</span><span class=\"rate\">23</span></li><li><span class=\"hourly\">4 - 10 hrs</span><span class=\"rate\">27</span></li></ul><span class=\"bulletLabel\">Evenings:</span><ul class=\"ratesTable\"><li><span class=\"hourly\">5pm-5am</span><span class=\"rate\">13</span></li></ul>",
      "taxIncluded": false,
      "earlyBird": "",
      "monthlyRates": "",
      "visible": true,
      "events": "Event restrictions don't apply",
      "notes": "Very high fraud activity in this lot.<br />Scammers pose as attendants."
    },
    {
      "id": "lot17",
      "lotName": "Popich",
      "nicknames": [
        "popich",
        "uwajimaya employee lot"
      ],
      "lat": 47.5949569,
      "long": -122.32616,
      "svHeading": 205,
      "address": [
        "821 Airport Way South",
      ],
      "crossStreets": "corner of 6th & Airport",
      "garageHeight": "Surface Lot",
      "stalls": "32 stalls",
      "manager": "",
      "hours": "24/7",
      "attendant": "",
      "dailyRates": "",
      "taxIncluded": false,
      "earlyBird": "",
      "monthlyRates": "Uwajimaya employees only with hang tag passes",
      "visible": true,
      "events": "Event restrictions don't apply",
      "notes": ""
    },
    {
      "id": "lot18",
      "lotName": "Stadium Innovation Center",
      "nicknames": [
        "stadium innovation center",
        "sicg"
      ],
      "lat": 47.5895885,
      "long": -122.3351319,
      "svHeading": 66,
      "address": [
        "1531 Utah Avenue South",
      ],
      "crossStreets": "corner of 6th & Airport",
      "garageHeight": "",
      "stalls": "221 stalls, 6 ADA",
      "manager": "",
      "hours": "Mon-Sun 6am – 10pm",
      "attendant": "Security on P1",
      "dailyRates": "<ul class=\"ratesTable\"><li><span class=\"hourly\">0 - 2 hrs</span><span class=\"rate\">4</span></li><li><span class=\"hourly\">2 - 3 hrs</span><span class=\"rate\">6</span></li><li><span class=\"hourly\">3 - 4 hrs</span><span class=\"rate\">8</span></li><li><span class=\"hourly\">4 - 5 hrs</span><span class=\"rate\">10</span></li><li><span class=\"hourly\">5 - 6 hrs</span><span class=\"rate\">12</span></li><li><span class=\"hourly\">6 - 7 hrs</span><span class=\"rate\">14</span></li><li><span class=\"hourly\">7 - 8 hrs</span><span class=\"rate\">16</span></li><li><span class=\"hourly\">8 - 24 hrs</span><span class=\"rate\">18</span></li></ul><span class=\"bulletLabel\">Evenings/Weekends:</span><ul class=\"ratesTable\"><li><span class=\"hourly\"></span><span class=\"rate\">5</span></li></ul>",
      "taxIncluded": false,
      "earlyBird": "In by 9:30am, out by 6pm: $9 - 10 Hour max",
      "monthlyRates": "<br/><span class=\"bulletLabel\">Access Card (24/7):</span><ul class=\"ratesTable\"><li><span class=\"hourly\">Regular M-F 6-6</span><span class=\"rate\">195 plus tax ($238.10)</span></li><li><span class=\"hourly\">Executive 24/7</span><span class=\"rate\">250 plus tax ($305.25)</span></li><li><span class=\"hourly\">Access card: $25</span></li></ul>",
      "visible": true,
      "events": "Event restrictions don't apply",
      "notes": ""
    },
    {
      "id": "lot19",
      "lotName": "Light Rail Lot",
      "nicknames": [
        "light rail",
        "mlk",
        "rainer beach"
      ],
      "lat": 47.5220768,
      "long": -122.2793292,
      "svHeading": 49,
      "address": [
        "9020 Martin Luther King, Jr. Way South",
      ],
      "crossStreets": "Across from Rainer Beach light Rail Station",
      "garageHeight": "Surface lot",
      "stalls": "49 stalls",
      "manager": "",
      "hours": "",
      "attendant": "",
      "dailyRates": "",
      "taxIncluded": false,
      "earlyBird": "",
      "monthlyRates": "<br/><span class=\"bulletLabel\">Decal (24/7):</span><ul class=\"ratesTable\"><li><span class=\"hourly\">Regular</span><span class=\"rate\">75 plus tax ($91.58)</span></li></ul>",
      "visible": true,
      "events": "Event restrictions don't apply",
      "notes": "Park south of the H.E. Goldberg building (near Valdez Ave S)"
    },
    {
      "id": "lot20",
      "lotName": "Norton Garage",
      "nicknames": [
        "norton building"
      ],
      "lat": 47.6034826,
      "long": -122.3351447,
      "svHeading": 42,
      "address": [
        "800 1st Avenue",
      ],
      "crossStreets": "corner 1st & Columbia",
      "garageHeight": "6'6\"",
      "stalls": "26 stalls",
      "manager": "Sean",
      "hours": "M-F 6:30am-6:30pm",
      "attendant": "",
      "dailyRates": "<ul class=\"ratesTable\"><li><span class=\"hourly\">0 - 20 mins</span><span class=\"rate\">5</span></li><li><span class=\"hourly\">20 - 60 mins</span><span class=\"rate\">8</span></li><li><span class=\"hourly\">1 - 2 hrs</span><span class=\"rate\">11</span></li><li><span class=\"hourly\">2 - 3 hrs</span><span class=\"rate\">14</span></li><li><span class=\"hourly\">3 - 4 hrs</span><span class=\"rate\">18</span></li><li><span class=\"hourly\">4 - 10 hrs</span><span class=\"rate\">20</span></li><li><span class=\"hourly\">10 - 12 hrs</span><span class=\"rate\">24</span></li></ul><span class=\"bulletLabel\">Overnight:</span><ul class=\"ratesTable\"><li><span class=\"hourly\">5pm-6:30am pre-paid</span><span class=\"rate\">5</span></li></ul>",
      "taxIncluded": true,
      "earlyBird": "$15 In by 9am, 10 Hour max",
      "monthlyRates": "<ul class=\"ratesTable\"><li><span class=\"hourly\">Decal Only (Normal Hours)</span><span class=\"rate\">285 includes tax</span></li><li><span class=\"hourly\">Motorcycle</span><span class=\"rate\">142 tax included</span></li><li><span class=\"hourly\">Access card: $25</span><span class=\"rate\">10</span></li></ul>",
      "visible": true,
      "events": "Event restrictions don't apply",
      "notes": "Valet Only<br/>p/u decals & cards from 13th floor NW bldg (Ann)"
    },
    {
      "id": "lot21",
      "lotName": "Lot 41",
      "nicknames": [
        "dicks",
        "westland"
      ],
      "lat": 47.5763583,
      "long": -122.3341973,
      "svHeading": 282,
      "address": [
        "2937 1st Avenue South",
      ],
      "crossStreets": "Between Dick's Restaurant Supply and Westland Distillery",
      "garageHeight": "Surface Lot",
      "stalls": "39 stalls",
      "manager": "",
      "hours": "24/7",
      "attendant": "No (cc pay station)",
      "dailyRates": "<ul class=\"ratesTable\"><li><span class=\"hourly\">0 - 2 hrs</span><span class=\"rate\">4</span></li><li><span class=\"hourly\">2 - 4 hrs</span><span class=\"rate\">6</span></li><li><span class=\"hourly\">4 - 10 hrs</span><span class=\"rate\">9</span></li></ul>",
      "taxIncluded": true,
      "earlyBird": "In by 9:30am, out by 6pm: $5",
      "monthlyRates": "<ul class=\"ratesTable\"><li><span class=\"hourly\">Decal (20 Stalls)</span><span class=\"rate\">90 plus tax ($109.89)</span></li></ul>",
      "visible": true,
      "events": "Event restrictions don't apply",
      "notes": ""
    },
    {
      "id": "lot22",
      "lotName": "SODO Commerce Center",
      "nicknames": [
        "sodo",
        "commerce"
      ],
      "lat": 47.5762178,
      "long": -122.3367185,
      "svHeading": 114,
      "address": [
        "2937 1st Avenue South",
      ],
      "crossStreets": "Corner of Colorado Ave S and S Hanford St",
      "garageHeight": "Surface Lot",
      "stalls": "114 stalls, 3 motorcycles",
      "manager": "",
      "hours": "24/7",
      "attendant": "No (cc pay station)",
      "dailyRates": "",
      "taxIncluded": true,
      "earlyBird": "",
      "monthlyRates": "<ul class=\"ratesTable\"><li><span class=\"hourly\">Decal (24/7)</span><span class=\"rate\">90 plus tax ($109.89)</span></li></ul>",
      "visible": true,
      "events": "Event restrictions don't apply",
      "notes": "If lot is full, monthly parkers can use HD3"
    },
    {
      "id": "lot23",
      "lotName": "4th and Diagonal",
      "nicknames": [
        "starbucks",
        "costco"
      ],
      "lat": 47.5669412,
      "long": -122.3294364,
      "svHeading": 257,
      "address": [
        "2937 1st Avenue South",
      ],
      "crossStreets": "Corner of Colorado Ave S and S Hanford St",
      "garageHeight": "Surface Lot",
      "stalls": "",
      "manager": "",
      "hours": "",
      "attendant": "",
      "dailyRates": "2 hour max time limit stalls<br/>30 minute max stalls<br/>Retail parkers only<br/>No in/out privileges",
      "taxIncluded": true,
      "earlyBird": "",
      "monthlyRates": "",
      "visible": true,
      "events": "",
      "notes": ""
    },
    {
      "id": "lot24",
      "lotName": "Home Plate Center",
      "nicknames": [
        "HPCG",
        "home plate"
      ],
      "lat": 47.5890146,
      "long": -122.3341988,
      "svHeading": 249,
      "address": [
        "1501 1st Ave S"
      ],
      "crossStreets": "1501 (Enter off Utah), 1521 (Enter off 1st)",
      "garageHeight": "6'8\"",
      "stalls": "",
      "manager": "",
      "hours": "Mon-Sun 6am-10pm",
      "attendant": "Yes",
      "dailyRates": "<ul class=\"ratesTable\"><li><span class=\"hourly\">0 - 1 hrs</span><span class=\"rate\">4</span></li><li><span class=\"hourly\">1 - 2 hrs</span><span class=\"rate\">6</span></li><li><span class=\"hourly\">2 - 3 hrs</span><span class=\"rate\">8</span></li><li><span class=\"hourly\">3 - 4 hrs</span><span class=\"rate\">10</span></li><li><span class=\"hourly\">4 - 5 hrs</span><span class=\"rate\">12</span></li><li><span class=\"hourly\">5 - 6 hrs</span><span class=\"rate\">14</span></li><li><span class=\"hourly\">6 - 10 hrs</span><span class=\"rate\">16</span></li></ul>",
      "taxIncluded": true,
      "earlyBird": "",
      "monthlyRates": "<span class=\"bulletLabel\">Transmitter (During garage hours):</span><ul class=\"ratesTable\"><li><span class=\"hourly\"></span><span class=\"rate\">195 plus tax ($238.06)</span></li></ul>",
      "events": "Event restrictions apply",
      "visible": true,
      "notes": ""
    },
    {
      "id": "lot25",
      "lotName": "Stadium Place Lot",
      "nicknames": [
        "spg",
        "stadium place lot"
      ],
      "lat": 47.5981521,
      "long": -122.3315781,
      "svHeading": 229,
      "address": [
        "Stadium Place South"
      ],
      "crossStreets": "East side of Wave Bldg, enter 2nd Ave.",
      "garageHeight": "Surface Lot",
      "stalls": "13",
      "manager": "",
      "hours": "24/7",
      "attendant": "No (pay station)",
      "dailyRates": "<ul class=\"ratesTable\"><li><span class=\"hourly\">0 - 1 hrs</span><span class=\"rate\">4</span></li><li><span class=\"hourly\">Additional hrs</span><span class=\"rate\">2</span></li><li><span class=\"hourly\">Evening</span><span class=\"rate\">5</span></li></ul>",
      "taxIncluded": false,
      "earlyBird": "",
      "monthlyRates": "",
      "events": "Event restrictions apply",
      "visible": true,
      "notes": "Small strip of stalls on the west side of the North Lot. It is not street parking."
    },
    {
      "id": "lot26",
      "lotName": "Home Depot Lot (HD1)",
      "nicknames": [
        "hd1",
        "home depot"
      ],
      "lat": 47.5798013,
      "long": -122.3361765,
      "svHeading": 192,
      "address": [
        "2401 Utah Avenue South",
      ],
      "crossStreets": "corner of 1st Ave South & South Lander",
      "garageHeight": "Surface Lot",
      "stalls": "151, 8 ADA",
      "manager": "",
      "hours": "",
      "attendant": "Yes",
      "dailyRates": "2 hour max time limit stalls<br/>2 hour max stalls<br/>Retail parkers only<br/>No in/out privileges<br />HD2 is Employee Parking",
      "taxIncluded": false,
      "earlyBird": "",
      "monthlyRates": "",
      "visible": true,
      "events": "",
      "notes": ""
    },
    {
      "id": "lot27",
      "lotName": "Starbucks Center Lot ",
      "nicknames": [
        "starbucks"
      ],
      "lat": 47.5807207,
      "long": -122.3341995,
      "svHeading": 297,
      "address": [
        "2401 Utah Avenue South",
      ],
      "crossStreets": "corner of 1st Ave South & South Stacy",
      "garageHeight": "Surface Lot",
      "stalls": "",
      "manager": "",
      "hours": "",
      "attendant": "",
      "dailyRates": "<br/>2 Hour max stalls<br/>Retail parkers only<br/>No in/out privileges<br />HD2 is Employee Parking<br /><span class=\"bulletLabel\">Daycare Stalls:</span><br/>7 stalls with 30min time limit<br/>5 stalls from 7am-8:30am & 5:30pm",
      "taxIncluded": false,
      "earlyBird": "",
      "monthlyRates": "",
      "visible": true,
      "events": "",
      "notes": ""
    },
    {
      "id": "lot28",
      "lotName": "Uwajimaya Village Apartments",
      "nicknames": [
        "uwajimaya"
      ],
      "lat": 47.5964653,
      "long": -122.3263666,
      "svHeading": 279,
      "address": [
        "521 South Weller Street",
      ],
      "crossStreets": "Uwajimaya Parking lot and garage",
      "garageHeight": "",
      "stalls": "",
      "manager": "",
      "hours": "",
      "attendant": "",
      "dailyRates": "<span class=\"bulletLabel\">Monday-Friday 7am-11pm</span><ul class=\"ratesTable\"><li><span class=\"hourly\">1 hrs</span><span class=\"rate\">7.50</span></li></ul><span class=\"bulletLabel\">Saturday-Sunday 8am-10pm</span><ul class=\"ratesTable\"><li><span class=\"hourly\">2 hrs</span><span class=\"rate\">15.00</span></li></ul><br/>Lost ticket: $22.50",
      "taxIncluded": true,
      "earlyBird": "",
      "monthlyRates": "<span class=\"bulletLabel\">Residential Parking - Hang Tags</span>",
      "visible": true,
      "events": "",
      "notes": ""
    },
    {
      "id": "lot29",
      "lotName": "Walker Lot",
      "nicknames": [
        "8th & Holgate"
      ],
      "lat": 47.5860687,
      "long": -122.323698,
      "svHeading": 191,
      "address": [
        "8th Ave South & South Holgate",
      ],
      "crossStreets": "Corner of  8th Ave South & South Holgate",
      "garageHeight": "Surface Lot",
      "stalls": "",
      "manager": "",
      "hours": "Events Only",
      "attendant": "Yes",
      "dailyRates": "<ul class=\"ratesTable\"><li><span class=\"hourly\">Events only pricing varies</span></li></ul>",
      "taxIncluded": true,
      "earlyBird": "",
      "monthlyRates": "",
      "visible": true,
      "events": "Events only - rate varies",
      "notes": "One mile away from stadiums, all cement lot<br/>Lot closes two hours after event<br/>Subject to tailgating rules"
    }
  ];

  lots = lots.sort(function(a, b){
    var nameA=a.lotName.toLowerCase(), nameB=b.lotName.toLowerCase()
      if (nameA < nameB) //sort string ascending
      return -1
        if (nameA > nameB)
          return 1
        return 0 //default return value (no sorting)
  });