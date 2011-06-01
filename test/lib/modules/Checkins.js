var Checkins = {	
	load: function() {
		if ($('#checkins_container').length) {
			Checkins.show();
			return;
		}
		_container(
			'checkins.html', 
			'main_container',
			'checkins_container',
			function() {
				Checkins.show();
			}						
		);
	},
	show: function() {
		view.show('checkins_container');
	}	
}
