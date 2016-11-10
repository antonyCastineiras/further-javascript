(function(exports) {
    function SingleNoteView(note) {
        this.note = note;

    }

    SingleNoteView.prototype.display = function() {
        document.getElementById('app').innerHTML = this.note.getText();
    }

    exports.SingleNoteView = SingleNoteView;
})(this);