(function(exports) {

	function Note(text) {
		this._text = text;
		this._id = noteController.noteList.notes.length;
	}

	Note.prototype.getText = function() {
		return this._text;
	};

	Note.prototype.abbreviation = function() {
		return this._text.substring(0,20) + (this._text.length > 19 ? '...' : '');
	};

	Note.prototype.id = function() {
		return this._id;
	};

	exports.Note = Note;

})(this);

