# {{disqus}} [![NPM version](https://badge.fury.io/js/handlebars-helper-disqus.png)](http://badge.fury.io/js/handlebars-helper-disqus)

> Handlebars helper for adding [Disqus](https://disqus.com/) comments to your web project.

Start by [creating a site profile](http://disqus.com/admin/create/) with Disqus.

## Installation

Use [npm](npmjs.org) to install the package: `npm i handlebars-helper-disqus`.

## Register the helper

In your project's Gruntfile, to register the helper add `handlebars-helper-disqus` to the `helpers` property in the [Assemble](http://assemble.io) task or target options:

```javascript
grunt.initConfig({
  assemble: {
    options: {
      // the 'handlebars-helper-disqus' npm module must also be listed in
      // devDependencies for assemble to automatically resolve the helper
      helpers: ['handlebars-helper-disqus', 'foo/*.js']
    },
    files: {
      'dist/': ['src/templates/*.hbs']
    }
  }
});
```
## Usage

With the helper registered, you may now begin using it in your templates.

```html
{{disqus shortname="my-shortname"}}
```

Next, add the following tag wherever you want the comments to display.

```html
<!-- Disqus Comments -->
<div id="disqus_thread"></div>
```

## Options

#### shortname
Type: `String`
Default: `undefined`

Required. This is your forum shortname. Example: `{{disqus shortname="my-shortname"}}`.

#### id
Type: `String`
Default: `undefined`

A unique identifier for each page where Disqus is present. Example: `{{disqus shortname="my-shortname" id=page.dest}}`.

#### title
Type: `String`
Default: `undefined`

A unique title for each page where Disqus is present. Example: `{{disqus shortname="my-shortname" title=page.title}}`.

#### url
Type: `String`
Default: `undefined`

A unique URL for each page where Disqus is present. Example: `{{disqus shortname="my-shortname" url=page.dest}}`.


## Author

**Jon Schlinkert**

+ [github/Jon Schlinkert](http://github.com/Jon Schlinkert)
+ [twitter/Jon Schlinkert](http://twitter.com/Jon Schlinkert)

## License and Copyright

Licensed under the [MIT License](./LICENSE-MIT)
Copyright (c) Jon Schlinkert, contributors.