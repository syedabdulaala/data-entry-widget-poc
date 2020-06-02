
CKEDITOR.plugins.add( 'simplebox', {
    requires: 'widget',

    icons: 'simplebox',

    init: function( editor ) {
        editor.widgets.add( 'simplebox', {

            button: 'Create a simple box',

            template:
                '<div class="simplebox">' +
                    '<table class="table" id="table"> \
                        <thead class = "table-head"> \
                            <tr class = "table-row"> \
                                <th class = "handle">Column 1</th> \
                                <th class = "handle">Column 2</th> \
                                <th class = "handle">Column 3</th> \
                            </tr> \
                        </thead> \
                        <tbody class = "table-body"> \
                            <tr class = "table-row"> \
                                <td class = "table-data">Numeric</td> \
                                <td class = "table-data">Boolean</td> \
                                <td class = "table-data">Text</td> \
                            </tr> \
                        </tbody> \
                    </table>' +
                '</div>',
            editables: {
                table: {
                    selector: '.table',
                    allowedContent: true
                },
                tableHead: {
                    selector: '.table-head'
                },
                tableRow: {
                    selector: '.table-row'
                },
                handle: {
                    selector: '.handle'
                },
                tableBody: {
                    selector: '.table-body'
                },
                tableData: {
                    selector: '.table-data'
                },
            },
    
            allowedContent:true,
            upcast: function( element ) {
                return element.name == 'div' && element.hasClass( 'simplebox' );
            }

        } );
    }
} );




// editables: {
//     table: {
//         selector: '.table',
//         allowedContent: 'br strong em'
//     },
//     tableHead: {
//         selector: '.table-head'
//     },
//     tableRow: {
//         selector: '.table-row'
//     },
//     tableBody: {
//         selector: '.table-body'
//     },
//     tableData: {
//         selector: '.table-data'
//     },
// },


// import "./style.css";
// import tableDragger from "table-dragger";
// import ColumnResizer from "column-resizer";

// const appDiv = document.getElementById("app");
// const table = document.getElementById("table");

// // Column Dragging
// var dragger = tableDragger(table, {
//   mode: "column",
//   dragHandler: ".handle",
//   onlyBody: true
// });

// dragger.on("drop", function(from, to) {
//   console.log(from);
//   console.log(to);
// });

// // Column Resizing
// new ColumnResizer(table, {
//   liveDrag: true,
//   draggingClass: "rangeDrag",
//   gripInnerHtml: "<div class='rangeGrip'></div>",
//   minWidth: 8
// });
