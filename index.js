/**
 * @file index
 * @author Jim Bulkowski <jim.b@paperelectron.com>
 * @project Pomegranate-express-html
 * @license MIT {@link http://opensource.org/licenses/MIT}
 */

'use strict';

/**
 *
 * @module index
 */

'use strict';

var ejs = require('ejs').__express

/**
 *
 * @module index
 */

exports.options = {
  workDir: './views'
}

exports.metadata = {
  name: 'HtmlViews',
  type: 'merge',
  param: 'ExpressConfig'
}

exports.plugin = {
  load: function(inject, loaded) {
    var viewDirectory = this.options.workDir;
    var viewEngine = {
      "View Engine": function(Express){
        Express.engine('ejs', ejs);
        Express.set('views', viewDirectory)
        Express.set('view engine', 'html')
      }
    }
    loaded(null, viewEngine)
  },
  start: function(done) {
    done()
  },
  stop: function(done) {
    done()
  }
}