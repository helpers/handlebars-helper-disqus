# {{disqus}} [![NPM version](https://badge.fury.io/js/handlebars-helper-disqus.png)](http://badge.fury.io/js/handlebars-helper-disqus)

> Handlebars helper for adding [Disqus](https://disqus.com/) comments to your blog or web project.

First, [create a site profile](http://disqus.com/admin/create/) with Disqus.

## Installation

Install with [npm](npmjs.org)

```bash
npm i handlebars-helper-disqus
```

If you use [Assemble](https://github.com/assemble/assemble), make sure you register the helper so Assemble knows where to find it:

```js
options: {
  helpers: ['handlebars-helper-disqus']
}
```

## Usage

### 1. footer script

Add the following template to

```html
{{disqus "my-shortname"}}
```

### 2. comments

Next, add the following tag wherever you want the comments to display.

```html
<!-- Disqus Comments -->
<div id="disqus_thread"></div>
```

## Author

**Jon Schlinkert**

+ [github/Jon Schlinkert](http://github.com/Jon Schlinkert)
+ [twitter/Jon Schlinkert](http://twitter.com/Jon Schlinkert)

## License and Copyright

Licensed under the [MIT License](./LICENSE-MIT)
Copyright (c) 2014 Jon Schlinkert, contributors.