const fs = require('fs').promises;


async function readConfigFile(filepath) {
    /*
     *  Return an object parsed from the given settings file.
     *
     *  :param filepath - the filepath to parse for settings
     *  :return Object - key: value mapping object
     *
     *  If an error occurs, the process will exit.
     */
    return fs.readFile(filepath, 'utf-8')
        .then((file) => {
            const lines = file.trim().split('\n')
            let config = {}

            lines.forEach(line => {
                if (!line.startsWith('//')) {
                    const [key, value] = line.trim().split('=').map(value => value.trim())
                    config[key] = value
                }
            })
            return config
        })
        .catch(err => {
            console.log(err.message)
            process.exit()
        })
}


module.exports = { readConfigFile }
