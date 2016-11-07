function noteListModel () {

	this.notes = [];

}

(function(exports) {
	noteListModel.prototype.addNote = function(note) {
		this.notes.push(note);
	};

})(this);