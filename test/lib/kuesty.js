function _kuesty(){
	
	this.ajax = new _ajax();
	this.version = 1;
	this.baseURL = "http://kuesty.com/api";
	this.userId	= 1;
	
	// checks the internet connection
	this.testConnection = function(geo) {
		var ajax = this.ajax;		
		var obj  = this;		
		ajax.testConn(function() {
			obj.checkVersion();	
		}, function(){
			obj.connectionError();
		});
	}
	
	this.connectionError = function() {
		alert("connection error");
		window.close();	
	}
	
	// checks the app version, only for symbian	devices
	this.checkVersion = function() {
		var url = this.baseURL + "/getversion/";		
		var obj = this;
		this.ajax.get(url, function(data){						
			if(data.version != kuesty.version) {
				obj.update(data.download_path);
				return;
			}
			obj.init();					
		});		
	}
	
	this.update = function(url) {
		alert(url);
	}
	
	this.init = function() {
		$('#splash').hide();		
		Home.load();	
	}
	
	this.geoPosition = {'latitude':0, 'longitude':0};
	
	this.getGeoPosition = function(success_callback, error_callback) {
		if(!geo_position_js.init()) {
			alert("Functionality not available");
			error_callback();
			return;
		}
		var obj = this;
		geo_position_js.getCurrentPosition(
			function(p){			
				obj.geoPosition.latitude = p.coords.latitude;
				obj.geoPosition.longitude = p.coords.longitude;
				//success_callback(obj.geoPosition);
				obj.getNearby(obj.geoPosition, success_callback);
								
			},function(p){
				alert('error='+p.code);
				error_callback();
			},
			{enableHighAccuracy:true}
		);
	}
	
	this.getFriends = function( callback ){
		
		id = this.userId;
		var url = this.baseURL + '/getfriends?iduser=' + id;
		console.log( url );
		var obj = this;
		this.ajax.get(url, function(data){
			callback( data );
		});

	}
	
	this.lastSearch = {};
	this.search = function() {
		
		try{ window.clearInterval(this.captureKeyInterval);
		}catch(e){}
		
		var s = document.getElementById('home_search').value;
			s = jQuery.trim(s);
		
		var search = this.lastSearch;
			search.q = encodeURI(s);
			search.page = 0;
			
		var url = this.baseURL + '/getlocales?nombre=' + search.q + '&localidad=1&rubro=2';
		var obj = this;		
		this.ajax.get(url, function(data){
			obj.lastSearch.data = data;			
			Search.load(data);
		});
	}
	
	this.highlights = { data : null };
	this.getHighlights = function(callback) {
		var highlights = this.highlights.data;
		if(highlights.length) {
			callback(highlights);
			return;
		}
		var url = this.baseURL + '/gethighlights/?';
		var obj = this;		
		this.ajax.get(url, function(data){
			obj.highlights.data = data;			
			callback(data);
		});
	}
	
	this.captureKeyInterval;
	this.captureSearchKey = function(e) {		
		
		try{ window.clearInterval(this.captureKeyInterval);
		}catch(e){}
		
		var KeyID = (window.event) ? event.keyCode : e.keyCode;		
		var s = document.getElementById('home_search').value;
			s = jQuery.trim(s);
					
		if(s != "") {
			this.captureKeyInterval = setInterval("kuesty.search()", "3000");
		}
	}
	
	this.nearbyPlaces = [];
	this.getNearby = function(geo, callback) {
		var url = this.baseURL + '/getnearby/?lat=' + geo.latitude + '&long=' + geo.longitude;
		var obj = this; 
		this.ajax.get(url, function(data){
			callback(data, geo);
		});
	}

	this.user = {};
	this.getProfile = function(callback) {
		var url = this.baseURL + '/getprofile/?';
		var obj = this;
		this.ajax.get(url, function(data){
			if(data.error == 1) {
				alert('errorazo');
				console.log(data.error);	
				return;
			}
			obj.user = data;
			callback(data);
		});
	}
}

try {
	var kuesty = new _kuesty();
	var view = new _view();
	
}catch(e) { alert(e); }

function onLoad() {	
	try {	
		geo_position_js.init();
		//kuesty.getGeoPosition(kuesty.testConnection,kuesty.testConnection)
		geo_position_js.getCurrentPosition(initgeosuccess,initgeoerror);
		// descomentar la que sigue y comentar el init
		//kuesty.testConnection();
		kuesty.init();	
	}catch(e){
		alert(e);
		kuesty.testConnection();		 
	}	
}

function initgeosuccess(p)
{
	alert(p.coords.latitude+"-"+p.coords.longitude);
}

function initgeoerror(e)
{
	alert(e.message);
}		

try {
	// nokia button vibrate
	sysinfo = document.getElementById("sysinfo");
    document.addEventListener('click', tactileFeedback, false);
}catch(e) { }
