(function(exports) {
	function NoteController(noteList) {
		this.noteList = noteList;
		this.noteListView = new NoteListView(this.noteList);
	}

	NoteController.prototype.something = function(first_argument) {
		console.log("success");
	};

	NoteController.prototype.displayNotes = function() {
		appDiv = document.getElementById('app');
		appDiv.innerHTML = this.noteListView.notesString();
	}; 

	exports.NoteController = NoteController;
})(this);