function isTextCorrect() {
	note = new Note("some text");
	if (note.getText() === "some text") {
		console.log('is text correct: true')
	} else {
		console.log('is text correct: failed');
	}
}

function itDisplaysNotes() {
	noteController.displayNotes();
	list = document.getElementById('noteList');
	if (list.innerHTML === "<li>Favourite drink: seltzer</li>") {
		console.log("it displays notes: true")
	} else {
		console.log("it displays notes: failed")
	}
}

function itDisplaysASingleNote() {
	note = new Note("something");
	singleNote = new SingleNoteView(note);
	singleNote.display();
	if(document.getElementById('app').textContent === note.text ) {
		console.log("it displays a single note: passed")
	} else {
		throw new Error("it displays a single note: failed");
	}
}

isTextCorrect();
itDisplaysNotes();
itDisplaysASingleNote();