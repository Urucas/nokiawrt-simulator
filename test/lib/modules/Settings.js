var Settings = {	

	load: function() {
		if ($('#settings_container').length) {
			Settings.show();
			return;
		}
		_container(
			'settings.html', 
			'main_container',
			'settings_container',
			function() {
				Settings.show();
			}						
		);
	},	
	show: function() {
		view.show('settings_container');
	}	
}
