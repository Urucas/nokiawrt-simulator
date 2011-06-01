var Aboutus = {	

	load: function() {
		if ($('#about_container').length) {
			Aboutus.show();
			return;
		}
		_container(
			'aboutus.html', 
			'main_container',
			'about_container',
			function() {
				Aboutus.show();
			}						
		);
	},	
	show: function() {
		view.show('about_container');
	}	
}
