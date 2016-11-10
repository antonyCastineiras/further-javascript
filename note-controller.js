(function(exports) {
	function NoteController() {
		this.noteList = new NoteList();
	}

	NoteController.prototype.displayNotes = function() {
		appDiv = document.getElementById('app');
		appDiv.innerHTML = noteListView.notesString();
	}; 

	NoteController.prototype.getNote = function(id) {
		notes = noteController.noteList.notes
		for (i=0;i<notes.length;i++) {
			if (notes[i].id === id) {
				return notes[i];
			}
		}
	};

	window.addEventListener("hashchange", function() {
		currentNoteId = parseInt(noteListView.getNoteId());
		note = noteController.getNote(currentNoteId);
		div = document.getElementById('singleNoteView');
		singleNoteView = new SingleNoteView(note);
		div.innerHTML = singleNoteView.noteText();
	});

	document.getElementsByTagName('form')[0].addEventListener('submit', function(event) {
		event.preventDefault();
		console.log(event)
		note = new Note();
		noteController.noteList.addNote(note);
		noteController.displayNotes();
	});

	exports.NoteController = NoteController;
})(this);