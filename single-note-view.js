(function(exports) {
    function SingleNoteView(note) {
        this.note = note;

    }

    SingleNoteView.prototype.display = function() {
        document.getElementById('app').innerHTML = this.note.text;
    }

    exports.SingleNoteView = SingleNoteView;
})(this);