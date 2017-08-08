var fs = require('fs')


fs.readFile('baby-names.csv', function (err, data) {
    if (err) {
        console.log(err)
        throw err
    }
    var parsedData  = data.toString('utf-8')
    //console.log(parsedData.split('/n')[0])

    fs.writeFile('baby-name-copy.csv', parsedData, function(err) {
        if(err) {
            console.log(err)
        }
    })

})
