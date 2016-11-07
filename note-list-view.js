(function() {

	noteListModel.prototype.printList = function() {
		body = document.getElementById('body');
		list = document.createElement('ul');
		list.id = "noteList";
		body.appendChild(list);
		for(i=0;i<this.notes.length;i++) {
			note = document.createElement('li');
			note.textContent = this.notes[i].text;
			list = document.getElementById('noteList');
			list.appendChild(note);
		}
	};

})(this);