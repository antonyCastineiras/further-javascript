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

isTextCorrect();
itDisplaysNotes();