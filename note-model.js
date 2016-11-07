function Note() {
	this.text = document.getElementById('noteText').value;
}

(function(exports) {
	Note.prototype.getText = function() {
		return this.text;
	};
})(this);

