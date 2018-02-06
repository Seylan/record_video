var findRemoveSync = require('find-remove')

findRemoveSync(__dirname + '/dist/trash', {age: {seconds: 60}});

setInterval(findRemoveSync.bind(this,__dirname + '/dist/trash', {age: {seconds: 60}}), 120)