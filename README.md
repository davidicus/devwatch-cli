# DevWatch CLI

Command line interface for creating and building static sites or blogs. Powered by Node.js and nerd sweat.

## Basic Usage

```
    Usage:
    dw [flag]        dw calls the cli options chosen by passing a flag

    Options:
    -i, --init       install a new Devwatch blog in current directory
    -h, --help       print help menu
    -v, --version    print current version of kick-init package
    -w, --watch      watch the project for changes, site recompiles on change

    Examples:
    # creates a new blog in current directory
    $ dw --init
    # Print help menu
    $ dw -h
```

### Create New Project

To get started create and `cd` into a new project directory. The directory must be empty in order to clone in the boilerplate for the new site.

```
$ mkDir newProj && cd newProj
```

Once inside the new directory enter invoke the cli and pass in the `-i, --init` flag to kick of the project. This command will download the project shell into your new directory.

```
$ dw -i
```

### Work An Existing Project

Once you have your project up and running you can pass in the `-w, --watch` command in order to turn on the dev server and have the app watch for changes. When changes are sensed a site compile will occur.

```
$ dw -w
```

### Deploying Your Site

For deployment I suggest using [Netlify](https://www.netlify.com/). The provide free tier of hosting which comes with CI tools, a free CDN, and options for using Lambda functions and form processing. Definitely a great way to extend the functionality of your blog or site.
