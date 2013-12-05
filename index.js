/**
 * Handlebars Helpers: {{disqus}}
 * Copyright (c) 2013 Jon Schlinkert
 * Licensed under the MIT License (MIT).
 */

// node_modules
var _ = require('lodash');


// Export helpers
module.exports.register = function (Handlebars, options, params) {

  'use strict';

  var opts = options;
  opts.data = opts.data || {};

  /**
   * {{disqus}}
   * => {{disqus site.disqus.shortname}}
   */
  Handlebars.registerHelper('disqus', function (options) {
    options = options || {};
    options.hash = options.hash || {};
    opts.data.disqus = opts.data.disqus || {};

    options = _.extend(options, opts.data.disqus, options.hash);

    var template = [
      '<script type="text/javascript">',
      '  /* * * CONFIGURATION VARIABLES: THIS CODE IS ONLY AN EXAMPLE * * */',
      '  var disqus_shortname   = "{{shortname}}";  // Required. This is your forum shortname',
      '  var disqus_identifier  = "{{default id ""}}";  // a unique identifier for each page where Disqus is present',
      '  var disqus_title       = "{{default title ""}}";  // a unique title for each page where Disqus is present',
      '  var disqus_url         = "{{default url ""}}";  // a unique URL for each page where Disqus is present',
      '',
      '  /* * * DON"T EDIT BELOW THIS LINE * * */',
      '  (function() {',
      '    var dsq = document.createElement("script"); dsq.type = "text/javascript"; dsq.async = true;',
      '    dsq.src = "//" + disqus_shortname + ".disqus.com/embed.js";',
      '    (document.getElementsByTagName("head")[0] || document.getElementsByTagName("body")[0]).appendChild(dsq);',
      '  })();',
      '</script>',
      '<noscript>Please enable JavaScript to view the <a href="http://disqus.com/?ref_noscript">comments powered by Disqus.</a></noscript>'
    ].join('\n');

    return new Handlebars.SafeString(Handlebars.compile(template)(options));
  });
};
