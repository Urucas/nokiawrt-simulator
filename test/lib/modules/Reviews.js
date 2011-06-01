var Reviews = {	
	load: function() {
		if ($('#reviews_container').length) {
			Reviews.show();
			return;
		}
		_container(
			'reviews_list.html', 
			'main_container',
			'reviews_container',
			function() {
				Reviews.show();
			}						
		);
	},	
	show: function() {
		view.show('reviews_container');
	}	
}
