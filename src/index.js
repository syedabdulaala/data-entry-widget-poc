function onLoad() {
    initCkEditor();
}

function bindColumnDragger(tableElement) {
    var dragger = tableDragger.default(tableElement, {
        mode: "column",
        dragHandler: ".handle",
        onlyBody: true
    });

    dragger.on("drop", function (from, to) {
        console.log(from);
        console.log(to);
    });
}

let editor;
function initCkEditor() {
    const editorElement = document.getElementById('editor');
    editorElement.setAttribute('contenteditable', 'true');
    editor = CKEDITOR.inline(editorElement);

    editor.on('instanceReady', () => {
        editor.widgets.onWidget('simplebox', 'ready', (a, b, c) => {
            console.log('ready', a, b, c);
            const table = editor.document.getById('table').$;
            bindColumnDragger(table);
        });
    });
}

function onInsertWidget(event) {
    editor.execCommand('simplebox');
}