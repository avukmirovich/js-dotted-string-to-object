module.exports = function(input) {
    if (input.indexOf('.') === -1) {
        throw new Error('Invalid format');
    }

    var parts = input.split('.');

    if (parts.length < 2) {
        throw new Error('Invalid format');
    }

    var lastItem = parts.pop();
    var preLastItem = parts.pop();

    var result = {};
    var root = result;
    for (var i = 0; i < parts.length; i++) {
        var key = parts[i];
        var obj = {};
        root[key] = obj;
        root = obj;
    }

    root[preLastItem] = lastItem;
    return result;
};
