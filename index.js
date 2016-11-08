noteController = new NoteController();
note = new Note();
note.text = "Favourite drink: seltzer";
noteController.noteList.addNote(note);
noteListView = new NoteListView(noteController.noteList);