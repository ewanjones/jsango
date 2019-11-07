# JSANGO

Jsango aims to be the django of the node environment.


## Usage

```
Usage: index [options] [command]

Options:
  -V, --version        output the version number
  -h, --help           output usage information

Commands:
  runserver [options]  Run the Jsango dev server
```

### Runserver

```
Options:
  -s, --settings <filepath>  Specify a custom settings filepath (default:
                             "./settings.js")
  -h, --help                 output usage information
```


## Configuration


The settings object can be created in the root directory in this format:

```
module.exports = {
    SESSION: {
        SECRET: "",
        NAME: "",
    }
    ...
}
```

It has the following items:

**SESSION**

- SECRET {str} - the session key
- NAME {str} - name of the cookie
- EXPIRES {str} - the expiry time of the cookie ("" for no expiry)
- STORE_URL {str} - the persistent storage url

**STATIC_DIR**

The relative path from where you're running the command (usually the root directory) to where
the statics are located.

**ROUTES_DIR**

The relative path to the directory where the routes are located.

**DEV_SERVER**

- PORT {int} - the port to run the server on


## Development


Install the application by running:

```
git clone https://github.com/ewanjones/jsango.git
cd jsango
npm install .
```

Then run the development environment with `npm run dev` and then run the application using `./dist/index.js <command>`.
