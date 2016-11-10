(function(exports) {

	function NoteListView(noteList) {
		this.noteList = noteList;
	}

	NoteListView.prototype.notesString = function() {
		notes = this.noteList.notes
		list = '<ul id="noteList">'
		for (i=0;i<notes.length;i++) {
			list += '<li>' + notes[i].abbreviation() + '</li>'
		}
		return list + '</ul>'
	};

	exports.NoteListView = NoteListView;

})(this);