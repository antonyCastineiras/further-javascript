
(function(exports) {

	function Note() {
		this.id = noteController.noteList.notes.length;
		this.text = document.getElementById('text').value;
	}

	Note.prototype.getText = function() {
		return this.text;
	};

	exports.Note = Note;

})(this);

