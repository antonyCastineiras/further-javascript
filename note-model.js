(function(exports) {

	function Note(text) {
		this._text = text;
	}

	Note.prototype.getText = function() {
		return this._text;
	};

	Note.prototype.abbreviation = function() {
		return this._text.substring(0,20) + (this._text.length > 19 ? '...' : '');
	};

	exports.Note = Note;

})(this);

