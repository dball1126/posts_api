const fs = require('fs');
const getNewId = (array) => {
    if (array.length > 0){
        return array[array.length -1].id + 1
    } else {
        return 1
    }
}

const newDate = () => newDate().toString();

function mustBeInArray(array, id) {
    
    console.log(array)
    return new Promise((resolve, reject) => {
        const row = array.find(r => r.id === id)
        // console.log(row)
        if (!row) {
            reject({ 
                message: 'ID is not good',
                status: 404
            })
        } 
        
        resolve(row)
    })
}

function writeJSONFile(filename, content) {
    fs.writeFileSync(filename, JSON.stringify(content), 'utf8', 
    (err) => {
        if (err) {
            console.log(err)
        }
    })
}

module.exports = {
    getNewId,
    newDate,
    mustBeInArray,
    writeJSONFile
}