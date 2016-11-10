noteController = new NoteController(new NoteList());
note = new Note();
note.text = "Favourite drink: seltzer";
noteController.noteList.addNote(note);
noteListView = new NoteListView(noteController.noteList);