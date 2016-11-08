
(function(exports) {

	function Note() {
		this.text = document.getElementById('app').value;
	}

	Note.prototype.getText = function() {
		return this.text;
	};

	exports.Note = Note;

})(this);

