(function(exports) {
	function NoteController() {
		this.noteList = new NoteList();
	}

	NoteController.prototype.something = function(first_argument) {
		console.log("success");
	};

	NoteController.prototype.displayNotes = function() {
		appDiv = document.getElementById('app');
		appDiv.innerHTML = noteListView.notesString();
	}; 

	exports.NoteController = NoteController;
})(this);