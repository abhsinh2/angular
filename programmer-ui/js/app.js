define(["apicem/widgets/form/TextField", "apicem/widgets/form/Button" ], function(TextField, Button) {

	function _init() {
		var myText = new TextField(".sample-content-textfield", {
			placeholder : "Hello World"
		});
		var myButton = new Button(".sample-content-button", {
			setText : "Alert Me"
		});
		myButton.click(function() {
			window.alert(myText.getVal());
		});
	}

	return {
		init : function() {
			_init();
		}
	};
});