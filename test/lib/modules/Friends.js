var Friends = {	

	load: function() {
		if ($('#friends_container').length) {
			Friends.show();
			return;
		}
		_container(
			'friends.html', 
			'main_container',
			'friends_container',
			function() {
				Friends.init();
			}						
		);
	},	
	
	init: function(){
		
		kuesty.getFriends( Friends.showFriends );
	},
	
	showFriends: function( userFriends ){
		
//		$( '#id_user' ).html( "hola gato => " + friends.id_user1 );
		alert( userFriends );
		
		var len = userFriends.friends.length;
		var xhtml = ""
		for(var i=0;i<len;i++){
			var friend = userFriends.friends[i];
			
			$( '#id_user' ).html( "hola gato => " + friend.id_user1 );
			xhtml += "hola gato => " + friend.id_user1

		}
		$("#id_user").html(xhtml);
		
		
		
//		var len = places.locales.length;
//		var xhtml = ""
//		for(var i=0;i<len;i++){
//			var local = places.locales[i];
//			xhtml += '<div class="details">'
//            xhtml += '        <button class="thumb"  onclick="window.location=\'reviews.html\';"><img src="img/ejemplo_foto_reviews.png" border="0" alt="Cafe Pahito" title="Cafe Pahito" /></button>'
//            xhtml += '        <h2><button onclick="window.location=\'reviews.html\';">'+local.nombre+'</button></h2>'
//            xhtml += '        <div class="puntos">'
//            xhtml += '            <div><button type="button" class="activo"></button></div>'
//            xhtml += '            <div><button type="button" class="activo"></button></div>'
//            xhtml += '            <div><button type="button" class="activo"></button></div>'
//            xhtml += '            <div><button type="button"></button></div>'
//            xhtml += '            <div><button type="button"></button></div>'
//            xhtml += '            <p>'+local.rating+' Reviews</p>'
//            xhtml += '            <br clear="all" />'
//            xhtml += '        </div>'
//            xhtml += '        <p>'+local.direccion+'</p>'
//            xhtml += '        <p class="info">'+local.descripcion+'</p>'
//            xhtml += '        <p class="info">Hours Today <b>12:00pm</b>-<b>2:00am</b></p>'
//            xhtml += '        <br clear="all" />'
//            xhtml += '    </div>'
//		}
//		$("#nearby_list_container").html(xhtml);
		
		
		Friends.show();
		
	},

	show: function() {
		view.show('friends_container');
	}	
}
