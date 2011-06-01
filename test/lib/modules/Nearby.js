var Nearby = {	
	load: function() {
		if ($('#nearby_container').length) {
			Nearby.init();
			return;
		}
		_container(
			'nearby.html', 
			'main_container',
			'nearby_container',
			function() {
				Nearby.init();
			}						
		);
	},
	init: function() {		
		kuesty.getGeoPosition(Nearby.prepare, Nearby.geoError);
	},	
	geoError: function() {
		
	},
	prepare: function(places,position) {
		//alert('prepare');
		console.log(places);
		console.log(position);
		
		//for testing only
		//places = {"locales":[{"id":"214","nombre":"Parrilla y Restaurante Sportivo America","descripcion":"Men&uacute; Libre-Parrillada-Pastas-Mediod&iacute;a y Noche-Estacionamiento","direccion":"Tucum&aacute;n 2159 - Rosario - SANTA F&Eacute; ","telefono":"","telefono2":null,"telefono3":null,"latitud":"-32.9393539429","longitud":"-60.6513938904","logo":"img\/713983611369272\/logo.jpg","rubro":"2","localidad":"1","web":"713983611369272","mail":null,"ultima_modificacion":null,"id_user_creador":null,"subrubro":"8551","rating":"0"},{"id":"230","nombre":"Rock &amp; FellerS","descripcion":"Resto Bar","direccion":"C&oacute;rdoba 2019 - Rosario - SANTA F&Eacute; ","telefono":"","telefono2":null,"telefono3":null,"latitud":"-32.9441375732","longitud":"-60.6516532898","logo":"","rubro":"2","localidad":"1","web":"710933610618055","mail":null,"ultima_modificacion":null,"id_user_creador":null,"subrubro":"8551","rating":"0"}]};
		var len = places.locales.length;
		var xhtml = ""
		for(var i=0;i<len;i++){
			var local = places.locales[i];
			xhtml += '<div class="details">'
            xhtml += '        <button class="thumb"  onclick="window.location=\'reviews.html\';"><img src="img/ejemplo_foto_reviews.png" border="0" alt="Cafe Pahito" title="Cafe Pahito" /></button>'
            xhtml += '        <h2><button onclick="window.location=\'reviews.html\';">'+local.nombre+'</button></h2>'
            xhtml += '        <div class="puntos">'
            xhtml += '            <div><button type="button" class="activo"></button></div>'
            xhtml += '            <div><button type="button" class="activo"></button></div>'
            xhtml += '            <div><button type="button" class="activo"></button></div>'
            xhtml += '            <div><button type="button"></button></div>'
            xhtml += '            <div><button type="button"></button></div>'
            xhtml += '            <p>'+local.rating+' Reviews</p>'
            xhtml += '            <br clear="all" />'
            xhtml += '        </div>'
            xhtml += '        <p>'+local.direccion+'</p>'
            xhtml += '        <p class="info">'+local.descripcion+'</p>'
            xhtml += '        <p class="info">Hours Today <b>12:00pm</b>-<b>2:00am</b></p>'
            xhtml += '        <br clear="all" />'
            xhtml += '    </div>'
		}
		$("#nearby_list_container").html(xhtml);
		
	/* Copiado de ARGENPROP y tocado un poco */
	
	/* --------------------------------- MAPA NOT NOW -----------------------------------------
		var zoom = 15;
	 	
		lugares = places.locales;
		
		if($("#map_container").html() == "") {
			//tengo que crear el mapa
			var myLatlng = new google.maps.LatLng(position.latitude, position.longitude);
			var myOptions = {
		   		zoom: zoom,
		   		center: myLatlng,
		   		mapTypeId: google.maps.MapTypeId.ROADMAP,
				mapTypeControl: false,
				navigationControl: true,
				navigationControlOptions: {
			    	style: google.maps.NavigationControlStyle.ANDROID,
					position: google.maps.ControlPosition.TOP
			  	},
				scaleControl: false    						
			}
			_map = new google.maps.Map(
				document.getElementById("map_container"), 
				myOptions
			);
			_map.markers = [];
				
		}else {
			//el mapa ya esta creado y le cambio los markers
			_map.center = new google.maps.LatLng(position.latitude, position.longitude);
			var markers = _map.markers;
			
			for(key in markers) {
				markers[key].setMap(null);
			}
			_map.markers = [];				
		}
		
		var image = 'img/map_pin.png';
		infoWindow = new google.maps.InfoWindow({
				content: ''
				//size: new google.maps.Size(75, 75)
			});
		/*if (infoWindow) {
			infoWindow = new google.maps.InfoWindow({
				content: '',
				size: new google.maps.Size(75, 75)
			});
		}else infoWindow.close();
		
		// creo los puntos
		for(key in lugares) {	
		
			if (lugares[key].latitud == null) {
				continue;
			}
					
   			var myLatLng = new google.maps.LatLng(lugares[key].latitud, lugares[key].longitud);
   			var beachMarker = new google.maps.Marker({
       			position: myLatLng,
       			map: _map,
				id : key,
       			icon: image,	
				flat: true			
   			});
			_map.markers.push(beachMarker);
			
			google.maps.event.addListener(beachMarker,'click',function(){
				
				_map.setCenter(this.position);
				
				var lugar = lugares[key];
				var content = '<div class="cloud" feedback="100" '
				
				content += 'onclick="alert(' + lugar.id + ')"';
				
				content+= '>';
				content+= '<p feedback="100"><b feedback="100">' + lugar.nombre + '</b></p>';
				content+= '<p feedback="100">' + lugar.direccion + '</p>';
				content+= '</div>';		
				infoWindow.content = content;		
				infoWindow.open(_map, this);
					
			});
			
		}
		_map.setZoom(zoom);	
		/* fin copiado de ARGENPROP 
		 --------------------------------- MAPA-----------------------------------------*/
		
		Nearby.show();
	},
	show: function() {
		view.show('nearby_container');
	}	
}
