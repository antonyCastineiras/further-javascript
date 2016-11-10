(function(exports) {

	function NoteListView(noteList) {
		this.noteList = noteList;
	}

	NoteListView.prototype.notesString = function() {
		notes = this.noteList.notes
		links = ""
		for (i=0;i<notes.length;i++) {
			links += "<a href='#notes/"+notes[i].id+"'>" + notes[i].text.substring(0,19) + "</a><br>"
		}
		return links
	};

	NoteListView.prototype.getNoteId = function() {
		return location.hash.split('#')[1].split('/')[1];
	};
	

	exports.NoteListView = NoteListView;

})(this);