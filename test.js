function isTextCorrect() {
	document.getElementById('app').value = "some text"
	note = new Note();
	if (note.getText() === "some text") {
		console.log('is text correct: true')
	} else {
		console.log('is text correct: failed');
	}
}

function itDisplaysNotes() {
	note = {text: "something"};
	noteListModel = new noteListModel();
	noteListModel.addNote(note)
	noteListModel.printList();
	list = document.getElementById('noteList');
	if (list.innerHTML === "<li>something</li>") {
		console.log("it displays notes: true")
	} else {
		console.log("it displays notes: failed")
	}
}

function itDisplaysASingleNote() {
	note = new Note();
	note.text = "something"
	singleNote = new SingleNoteView(note);
	singleNote.display();
	console.log(document.getElementById('app').textContent);
	if(document.getElementById('app').textContent === note.text ) {
		console.log("it displays a single note: passed")
	} else {
		throw new Error("it displays a single note: failed");
	}
}

isTextCorrect();
itDisplaysNotes();