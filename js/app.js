function appInit() {
	'use strict';
	var streetViewRoot = 'https://maps.googleapis.com/maps/api/streetview?size=370x150&location=';
	var streetViewHeading = '&heading=';
	var camerasList = [];

	// URL pattern : https://data.seattle.gov/resource/9wcw-sztr.json?$where=within_circle(location,%2047.597520,%20-122.328885,%20500)
	// Washington DOT traffic Cameras
	var sdotRoot = 'https://data.seattle.gov/resource/9wcw-sztr.json?$where=within_circle(location,%20';
	var	space = ',%20';
	var gettingTrafficCameraData = false;
	var dataErrors = ([]);

	// draw the map on the page create infoWindow, add initMap function to load map and place Markers
	var googleMap = {
		map: {},
		options: {
			center: {lat: 47.597906, lng: - 122.328533},
			zoom: 14,
			scrollwheel: false,
			mapTypeControl: true,
			mapTypeControlOptions: {
				position: google.maps.ControlPosition.LEFT_TOP,
				style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
				mapTypeIds: [
					google.maps.MapTypeId.SATELLITE,
					google.maps.MapTypeId.ROADMAP
				]
			},
			zoomControl: true,
			zoomControlOptions: {
				position: google.maps.ControlPosition.LEFT_BOTTOM
			},
			streetViewControl: true,
			streetViewControlOptions: {
				position: google.maps.ControlPosition.LEFT_BOTTOM
			}
		},
		infoWindow: new google.maps.InfoWindow(),
		infoWindowContent: '',
		initMap: function(vm) {
			googleMap.map = new google.maps.Map(document.getElementById('map'), googleMap.options);

		}
		/* initMap: function(vm) {
			googleMap.map = new google.maps.Map(document.getElementById('map'), googleMap.options);
			if (vm.initalized && !vm.markersLoaded) {
				vm.showMarkers();
			}
		}*/
	};

	// Lot object contains all data from the json file
	var Lot = function(lotData, parent) {
		this.id = ko.observable(lotData.id);
		this.name = ko.observable(lotData.lotName);
		this.nicknames = ko.observableArray(lotData.nicknames);
		this.lat = ko.observable(lotData.lat);
		this.long = ko.observable(lotData.long);
		this.svHeading = ko.observable(lotData.svHeading);
		this.address = ko.observableArray(lotData.address);
		this.crossStreets = ko.observable(lotData.crossStreets);
		this.garageHeight = ko.observable(lotData.garageHeight);
		this.stalls = ko.observable(lotData.stalls);
		this.manager = ko.observable(lotData.manager);
		this.hours = ko.observable(lotData.hours);
		this.attendant = ko.observable(lotData.attendant);
		this.dailyRates = ko.observable(lotData.dailyRates);
		this.taxIncluded = ko.observable(lotData.taxIncluded);
		this.earlyBird = ko.observable(lotData.earlyBird);
		this.monthlyRates = ko.observable(lotData.monthlyRates);
		this.visible = ko.observable(lotData.visible);
		this.events = ko.observable(lotData.events);
		this.notes = ko.observable(lotData.notes);
		this.camerasList = ko.observableArray([]);
		this.hasNoCams = ko.observable();
		this.show = true;

		this.lotInfo = '';
		// Build content for the infoWindow popup
		this.lotinfoHTML = '<div class="infoWindow"><h4 class="infoWindowTitle">'+ this.name() + '<br/><span>' + this.address()[0] + '</span>';
		if (this.manager() !== "") this.lotinfoHTML += '<span style="float: right;">Manager:<br />' + this.manager() + '</span>';
		this.lotinfoHTML += '</h4>';
		this.lotinfoHTML += '<img src="' + streetViewRoot + this.lat() + ',' + this.long() + streetViewHeading + this.svHeading() +'" />';
		this.lotinfoHTML += '<strong>Details:</strong><ul>';
		this.lotinfoHTML += '<li><span class="bulletLabel">Cross Streets:</span> ' + this.crossStreets() + '</li>';
		if (this.garageHeight() !== "") this.lotinfoHTML += '<li><span class="bulletLabel">Height:</span> ' + this.garageHeight() + '</li>';
		if (this.stalls() !== "") this.lotinfoHTML += '<li><span class="bulletLabel">Stalls:</span> ' + this.stalls() + '</li>';
		if (this.attendant() !== "") this.lotinfoHTML += '<li><span class="bulletLabel">Attendant:</span> ' + this.attendant() + '</li>';
		if (this.hours() !== "") this.lotinfoHTML += '<li><span class="bulletLabel">Hours:</span> ' + this.hours() + '</li>';
		this.lotinfoHTML += '</ul>';
		if (this.taxIncluded()) {
			this.lotinfoHTML += '<strong>Taxes Included</strong><br />';
		} else {
			this.lotinfoHTML += '<strong>Taxes Not Included</strong><br />';
		}
		this.lotinfoHTML += '<strong>Rates:</strong><ul>';
		if (this.dailyRates() !== "") this.lotinfoHTML += '<li><span class="bulletLabel">Daily Rates:</span> ' + this.dailyRates() + '</li>';
		if (this.earlyBird() !== "") this.lotinfoHTML += '<li><span class="bulletLabel">Early Bird:</span> ' + this.earlyBird() + '</li>';
		if (this.monthlyRates() !== "") this.lotinfoHTML += '<li><span class="bulletLabel">Monthly Rates:</span> ' + this.monthlyRates() + '</li>';
		if (this.events() !== "") this.lotinfoHTML += '<li><span class="bulletLabel">' + this.events() + '</span></li>';
		this.lotinfoHTML += '</ul>';
		if (this.notes() !== "") this.lotinfoHTML += '<strong>Notes:</strong> <p>' + this.notes() + '</p>';
		this.lotinfoHTML += '<div class="iw-bottom-gradient"></div></div>';
		this.lotinfoHTML = ko.observable(this.lotinfoHTML);

		// Is loaded flag
		this.initialized = ko.observable(false);

		var lotMarker = new google.maps.Marker({
			position: new google.maps.LatLng(this.lat(), this.long()),
			animation: google.maps.Animation.DROP,
			title: lotData.lotName,
			icon: 'images/marker-icon-2.png'
		});


		google.maps.event.addListener(lotMarker, 'click', (function(lot, parent) {
			return function() {
				parent.showLot(lot);
			};
		}) (this, parent));
		this.lotMarker = lotMarker;
	};

	var Camera = function(camera, parent) {
		this.cameraLabel = ko.observable(camera.cameralabel);
		this.imageURL = ko.observable(camera.imageurl);
		this.webURL = ko.observable(camera.weburl);

	};

	var getTrafficCameras = function(lot) {
		//alert('lot data ='+ lot.lat() + ' '+lot.long());
		console.log('CamerasList.length at start = '+ lot.camerasList().length);
		console.log('gettingTrafficCameraData at start = '+ gettingTrafficCameraData );
		// check to see if already getting camera data or have already gotten it for this location
		if (!gettingTrafficCameraData && lot.camerasList().length === 0) {
			gettingTrafficCameraData = true;
			dataErrors = ([]); //empty the error array
			console.log('gettingTrafficCameraData = '+ gettingTrafficCameraData );
			$.ajax({
	          dataType: "json",
	          url: sdotRoot + lot.lat() + space + lot.long() + ',%20500)',
	          success: function(data) {
	          	var cameras;
	          	console.log('gettingTrafficCameraData from '+sdotRoot + lot.lat() + space + lot.long() + ',%20500)');
	           	if (data.length > 0 ) {
					console.log("Got traffic Cam data");
					lot.hasNoCams(false);
					cameras = data;
					cameras.forEach(function(camera) {
						lot.camerasList.push(new Camera(camera, self));
					});
					console.log('CamerasList.length at end = '+ lot.camerasList().length);
					gettingTrafficCameraData = false;
				} else {
					console.log('No traffic camera data - There are no Traffic cameras within 500 Meters of this lot - ' + lot.name());
					lot.hasNoCams(true);
					gettingTrafficCameraData = false;
					//("There are no Traffic cameras within 500 Meters of this lot - " + lot.name());
	           	}
	           	gettingTrafficCameraData = false;
	          },
	          error: function() {
	            console.log("Error getting traffic Camera data");
	            gettingTrafficCameraData = false;
	            self.dataErrors.push("Error Getting traffic camera data, Please check your Internet connection.");
	          }
	        });
		}
	};

	// viewModel
	var ViewModel = function() {
		var self = this;
		self.searchFilter = ko.observable('');
		self.currentLot = ko.observable();
		self.connectionError = ko.observable(false);
		self.initialized = false;
		self.markersLoaded = false;
		self.lotList = ko.observableArray([]);
		self.cameraList = ko.observableArray([]);
		self.dataErrors =  ko.observableArray([]);



		self.init = function() {
			//load map and lots
			googleMap.initMap();

			lots.forEach(function(lot) {
				self.lotList.push(new Lot(lot, self));
			});

			self.currentLot(self.lotList()[0]);

			// if no markers have been shown, show them
			if (!self.markersLoaded) {
				self.showMarkers();
			}
			self.initialized = true;
		};

		self.showLot = function(lot) {
			//set content of infoWindow, show it and center the map, make it bounce for 2 seconds, set the current lot and request traffic cameras
			googleMap.infoWindow.setContent(lot.lotinfoHTML());
			lot.lotMarker.setAnimation(google.maps.Animation.BOUNCE);
			googleMap.infoWindow.open(googleMap.map, lot.lotMarker);
			googleMap.map.setCenter(lot.lotMarker.getPosition());
			self.currentLot(lot);
			console.log('currentLot = ' + self.currentLot().name());
			console.log('call getTrafficCameras for '+ lot.name());
			// empty the cameraList arry
			//self.cameraList.removeAll();
			getTrafficCameras(lot);

			window.setTimeout(function() {
				lot.lotMarker.setAnimation(null);
			}, 2000);
		};

		self.showMarkers = function() {
			ko.utils.arrayForEach(self.lotList(), function(lot) {
				if (lot.show) {
					console.log('This is the setmap call in the loop for the showmarkers call'+ googleMap.map);
					lot.lotMarker.setMap(googleMap.map);
				} else {
					lot.lotMarker.setMap(null);
				}
			});
			self.markersLoaded = true;
		};

		// a second KO array to handle searches
		self.filterLots = ko.computed(function(){
			var filter = self.searchFilter().toLowerCase();
			return ko.utils.arrayFilter(self.lotList(), function(lot){
				if (lot.name().toLowerCase().indexOf(filter) >= 0) {
					lot.show = true;
					return lot.visible(true);
				} else {
					lot.show = false;
					self.showMarkers();
					return lot.visible(false);
				}
			});
		}, ViewModel);

	};

	var vm = new ViewModel();

	var loadMap = function () {
		if (typeof google !== 'undefined') {
			console.log("LoadMap vm.init");
			vm.init();
			ko.applyBindings(vm);
		} else {
		   console.log("Error loading Google Maps");
		   $('.map').hide();
		   $('body').prepend('<p class="error">There was an error loading Google Maps. Please check your internet connection or try again later.</p>');
		 }
	};

	// Initialize map on page load
	console.log("google.maps.event Line 254");
	loadMap();
	//google.maps.event.addDomListener(window, 'load', googleMap.initMap(vm));


	// NOTE: the code below is used to manipulate the CSS of the Infowindow object from Google Maps, It has no impact on the use of KnockoutJS for interaction

	/*
	 * The google.maps.event.addListener() event waits for
	 * the creation of the infowindow HTML structure 'domready'
	 * and before the opening of the infowindow defined styles
	 * are applied.
	 */
	google.maps.event.addListener(googleMap.infoWindow, 'domready', function() {
		// Reference to the DIV which receives the contents of the infowindow using jQuery
		var iwOuter = $('.gm-style-iw');

		/* The DIV we want to change is above the .gm-style-iw DIV.
		* So, we use jQuery and create a iwBackground variable,
		* and took advantage of the existing reference to .gm-style-iw for the previous DIV with .prev().
		*/
		var iwBackground = iwOuter.prev();

		// Remove the background shadow DIV
		iwBackground.children(':nth-child(2)').css({'display' : 'none'});

		// Remove the white background DIV
		iwBackground.children(':nth-child(4)').css({'display' : 'none'});

		var iwCloseBtn = iwOuter.next();

		// Apply the desired effect to the close button
		iwCloseBtn.css({
			opacity: '1', // by default the close button has an opacity of 0.7
			right: '12px', top: '3px', // button repositioning
			border: '7px solid #FF9C00', // increasing button border and new color
			'border-radius': '13px', // circular effect
			'box-shadow': '0 0 5px #3990B9' // 3D effect to highlight the button
		});

		// If the content of infowindow not exceed the set maximum height, then the gradient is removed.
		if($('.infoWindow').height() < 640){
			$('.iw-bottom-gradient').css({display: 'none'});
		}

		// The API automatically applies 0.7 opacity to the button after the mouseout event.
		// This function reverses this event to the desired value.
		iwCloseBtn.mouseout(function(){
			$(this).css({opacity: '1'});
		});
	});
}