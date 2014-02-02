document.leaveIntent = function (options) {

    Helper = {

        /**
         * Recursively merge two objects
         * @param {Object} targetObject
         * @param {Object} sourceObject
         */
        mergeObject: function (targetObject, sourceObject) {
            for (var property in sourceObject) {
                try {
                    targetObject[property] = (sourceObject[property].constructor == Object) ? this.mergeObject(targetObject[property], sourceObject[property]) : sourceObject[property];
                } catch (e) {
                    targetObject[property] = sourceObject[property];
                }
            }
            return targetObject;
        }
    }

    var default_options = {
        height: 10,                         // top height (y axis) to detect when user is abut to leave, value must be integer
        beforeLeave: function (result) {}   // a callback function, the function will be called before user tries to leave window
    };

    options = Helper.mergeObject(default_options, options);

    /*
     * bind mouse move event and find y for current cursor
     * it also calculates difference if page has scroll bar
     */
    document.onmousemove = function (event) {
        var y = event.pageY - window.pageYOffset;
        var x = event.pageX - window.pageXOffset;
        if (y <= options.height) {
            options.beforeLeave({
                pageY: y,
                pageX: x
            });
        }
    };
};
