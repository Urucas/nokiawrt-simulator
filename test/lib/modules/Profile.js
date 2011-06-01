var Profile = {	
	load: function() {
		if ($('#profile_container').length) {
			Profile.show();
			return;
		}
		_container(
			'profile.html', 
			'main_container',
			'profile_container',
			function() {
				kuesty.getProfile(Profile.init);
			}						
		);
	},
	init: function(data) {
		
		$('#profile_title').text(data.user);
		
		$('#profile_avatar').attr('src', data.avatar);
		$('#profile_name').text(data.nombre + ' ' + data.apellido);
		$('#profile_bio').text(data.descripcion);
		
		$('#profile_cantfriends').text(data.cantidad_amigos);
		$('#profile_cantreviews').text(data.cantidad_reviews);
		$('#profile_cantcheckins').text(data.cantidad_checkins);		
		
		Profile.show();
	},
	show: function() {
		//$('#footer_menu').show();
		view.show('profile_container');
	}	
}
