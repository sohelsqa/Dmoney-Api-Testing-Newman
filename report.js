const newman = require('newman');
newman.run({
    collection: require('./Dmoney Users.postman_collection.json'), 


    iterationCount: 1,
    reporters: 'htmlextra',
    reporter: {
        htmlextra: {
            export: './Reports/report.html', // If not specified, the file 

        }
    }

}, function (err) {
    if (err) { throw err; }
    console.log('collection run complete!');
});