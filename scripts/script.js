$(document).ready(function(){
	var saratoga_springs = {lat: 40.327376, lng: -111.904441}; 
	var center = {lat: 40.357730, lng: -111.824447};
	var map = new google.maps.Map(document.getElementById('map'), {
	  zoom: 11,
	  center: center,
	});
	var marker = new google.maps.Marker({
	  position: saratoga_springs,
	  map: map
	});
});


