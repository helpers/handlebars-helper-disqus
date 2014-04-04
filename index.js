/**
 * Handlebars Helpers: {{disqus}}
 * Copyright (c) 2013 Jon Schlinkert
 * Licensed under the MIT License (MIT).
 */

// Export helpers
module.exports.register = function (Handlebars) {

  /**
   * {{disqus}}
   * => {{disqus site.disqus.shortname}}
   */

  Handlebars.registerHelper('disqus', function (shortname) {
    var template = [
      '<script type="text/javascript">',
      '  /* * * DON"T EDIT BELOW THIS LINE * * */',
      '  (function() {',
      '    var dsq = document.createElement("script"); dsq.type = "text/javascript"; dsq.async = true;',
      '    dsq.src = "//{{shortname}}.disqus.com/embed.js";',
      '    (document.getElementsByTagName("head")[0] || document.getElementsByTagName("body")[0]).appendChild(dsq);',
      '  })();',
      '</script>',
      '<noscript>Please enable JavaScript to view the <a href="http://disqus.com/?ref_noscript">comments powered by Disqus.</a></noscript>'
    ].join('\n');

    return new Handlebars.SafeString(Handlebars.compile(template)({shortname: shortname}));
  });
};
