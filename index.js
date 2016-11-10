noteController = new NoteController(new NoteList());
note = new Note("This is a slightly longer note");
note.text = "Favourite drink: seltzer";
noteController.noteList.addNote(note);
noteListView = new NoteListView(noteController.noteList);