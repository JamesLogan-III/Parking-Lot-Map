	'use strict';
	var streetViewRoot = 'https://maps.googleapis.com/maps/api/streetview?size=370x150&location=';
	var streetViewHeading = '&heading=';

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
			if (vm.initalized && !vm.markersLoaded) {
				vm.showMarkers();
			}
		}
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
		this.show = true;

		this.lotInfo = '';
		// Build content for the infoWindow popup
		this.lotinfoHTML = '<div class="infoWindow"><h4 class="infoWindowTitle">'+ this.name() + '<br/><span>' + this.address()[0] + '</span>';
		if (!this.manager() == "") this.lotinfoHTML += '<span style="float: right;">Manager:<br />' + this.manager() + '</span>';
		this.lotinfoHTML += '</h4>';
		this.lotinfoHTML += '<img src="' + streetViewRoot + this.lat() + ',' + this.long() + streetViewHeading + this.svHeading() +'" />';
		this.lotinfoHTML += '<strong>Details:</strong><ul>';
		this.lotinfoHTML += '<li><span class="bulletLabel">Cross Streets:</span> ' + this.crossStreets() + '</li>';
		if (!this.garageHeight() == "") this.lotinfoHTML += '<li><span class="bulletLabel">Height:</span> ' + this.garageHeight() + '</li>';
		if (!this.stalls() == "") this.lotinfoHTML += '<li><span class="bulletLabel">Stalls:</span> ' + this.stalls() + '</li>';
		if (!this.attendant() == "") this.lotinfoHTML += '<li><span class="bulletLabel">Attendant:</span> ' + this.attendant() + '</li>';
		if (!this.hours() == "") this.lotinfoHTML += '<li><span class="bulletLabel">Hours:</span> ' + this.hours() + '</li>';
		this.lotinfoHTML += '</ul>'
		if (this.taxIncluded()) {
			this.lotinfoHTML += '<strong>Taxes Included</strong><br />';
		} else {
			this.lotinfoHTML += '<strong>Taxes Not Included</strong><br />';
		}
		this.lotinfoHTML += '<strong>Rates:</strong><ul>';
		if (!this.dailyRates() == "") this.lotinfoHTML += '<li><span class="bulletLabel">Daily Rates:</span> ' + this.dailyRates() + '</li>';
		if (!this.earlyBird() == "") this.lotinfoHTML += '<li><span class="bulletLabel">Early Bird:</span> ' + this.earlyBird() + '</li>';
		if (!this.monthlyRates() == "") this.lotinfoHTML += '<li><span class="bulletLabel">Monthly Rates:</span> ' + this.monthlyRates() + '</li>';
		if (!this.events() == "") this.lotinfoHTML += '<li><span class="bulletLabel">' + this.events() + '</span></li>';
		this.lotinfoHTML += '</ul>'
		if (!this.notes() == "") this.lotinfoHTML += '<strong>Notes:</strong> <p>' + this.notes() + '</p>';
		this.lotinfoHTML += '<div class="iw-bottom-gradient"></div></div>';
		this.lotinfoHTML = ko.observable(this.lotinfoHTML);

		// Is loaded flag
		this.initialized = ko.observable(false);

		var lotMarker = new google.maps.Marker({
			position: new google.maps.LatLng(this.lat(), this.long()),
			title: lotData.lotName
		});

		google.maps.event.addListener(lotMarker, 'click', (function(lot, parent) {
			return function() {
				parent.showLot(lot);
			};
		}) (this, parent));
		this.lotMarker = lotMarker;
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

		self.init = function() {
			//load lots
			lots.forEach(function(lot) {
				self.lotList.push(new Lot(lot, self));
			});

			// if no markers have been shown, show them
			if (!self.markersLoaded) {
				self.showMarkers();
			}
			self.initialized = true;
		};

		self.showLot = function(lot) {
			//set content of infoWindow, show it and center the map
			googleMap.infoWindow.setContent(lot.lotinfoHTML());
			googleMap.infoWindow.open(googleMap.map, lot.lotMarker);
			googleMap.map.setCenter(lot.lotMarker.getPosition());
		};

		self.showMarkers = function() {
			ko.utils.arrayForEach(self.lotList(), function(lot) {
				if (lot.show) {
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

	$( document ).ready(function() {
		vm.init();
		ko.applyBindings(vm);
	});

	// redraw the markers on filter field Keyup
	$("input").keyup(function() {
	    vm.showMarkers();
	});

	// Initialize map on page load
	google.maps.event.addDomListener(window, 'load', googleMap.initMap(vm));
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