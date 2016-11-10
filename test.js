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
	if(document.getElementById('app').textContent === note.getText() ) {
		console.log("it displays a single note: passed")
	} else {
		throw new Error("it displays a single note: failed");
	}
}

function itAbbreviatesText() {
	note = new Note("some text that is longer than 20 characters");
	noteController.noteList.addNote(note);
	noteController.displayNotes();
	list = document.querySelector('#noteList li');
	if (list.textContent.length === 23) {
		console.log("it abbreviates text: passed")
	} else {
		throw new Error("it abbreviates text: failed")
	}
}

function notesHaveIds() {
	testNoteList = new NoteList();
	note0 = new Note("This is note0");
	testNoteList.addNote(note0);
	note1 = new Note("This is note1");
	testNoteList.addNote(note1);
	if (note0.id() === 0) {
		console.log("note0 has an id: passed");
	} else {
		throw new Error("note0 has an id: passed");
	}
	if (note1.id() === 1) {
		console.log("note1 has an id: passed");
	} else {
		throw new Error("note1 has an id: passed");
	}
}

isTextCorrect();
itDisplaysNotes();
itDisplaysASingleNote();
itAbbreviatesText();
notesHaveIds();