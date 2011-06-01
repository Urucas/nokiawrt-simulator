var Highligts = {	
	load: function() {		
		if ($('#highligts_container').length) {
			Highligts.show();
			return;
		}
		_container(
			'highligts.html', 
			'main_container',
			'highligts_container',
			function() {				
				kuesty.getHighlights(Highligts.init);
			}						
		);
	},	
	init: function(data) {
		var locales = data.locales;
		var obj = this;
		var xhtml = "";
		if (locales.length) {
			var len = locales.length;
			for (var i = 0; i < len; i++) {
				var local = locales[i];
				xhtml += '<div class="details">';
				var logo = local.logo != "" ? local.logo : "img/ejemplo_foto_reviews.png";
				xhtml += '<button class="thumb"><img src="' + logo + '" border="0"/></button>';
				xhtml += '<h2><button>' + local.nombre + '</button></h2>';
				xhtml += '<div class="puntos">';
				xhtml += obj.generateStars(local.rating);				
				var cant_reviews = isNaN(local.cantidad_reviews) ? 0 : parseInt(local.cantidad_reviews);
				xhtml += '<br />';
				xhtml += '<p>' + cant_reviews + ' Reviews</p>';
				var cant_checkins = isNaN(local.cantidad_checkins) ? 0 : parseInt(local.cantidad_checkins);
				xhtml += '<p>' + cant_checkins + ' Checkins</p>';
				xhtml += '<br clear="all" />';
				xhtml += '</div>';
				xhtml += '<p>' + local.direccion + '</p>';				
				xhtml += '<p class="info">' + local.descripcion + '</p>';
				xhtml += '<br clear="all" />';
				xhtml += '</div>';
			}
		}
		else {
			xhtml += '<p class="search_empty">No se han encontrado restaurantes!</p>';
		}		
		$('#search_results').html(xhtml);		
		Search.show();
	},
	generateStars: function(rating) {
		var stars    = '';
		var negative = 5 - rating;		
		for(var i=1; i <= rating; i++) {
			stars += '<div><button type="button" class="activo"></button></div>';	
		}
		for(var i=1; i <= negative; i++) {
			stars += '<div><button type="button"></button></div>';	
		}		
		return stars;
	},
	show: function() {		
		view.show('highligts_container');
	}	
}
