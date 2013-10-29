var hyperspace = require('hyperspace');
var fs = require('fs');
var html = fs.readFileSync(__dirname + '/cat.html', 'utf8');

module.exports = function () {
    return hyperspace(html, function (row) {
        return {
            '.name': {
                href: '/cats/' + row.key.replace(/^cat-/, ''),
                _text: row.name
            },
            '.owner': row.owner,
            '.location': row.location
        };
    });
};
