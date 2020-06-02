
CKEDITOR.plugins.add('simplebox', {
    requires: 'widget',
    icons: 'simplebox',
    init: function (editor) {
        editor.widgets.add('simplebox', {
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
            allowedContent: true,
            upcast: function (element) {
                return element.name == 'div' && element.hasClass('simplebox');
            }
        });
    }
});