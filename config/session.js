/**
 * Session Configuration
 * (sails.config.session)
 *
 * Use the settings below to configure session integration in your app.
 * (for additional recommended settings, see `config/env/production.js`)
 *
 * For all available options, see:
 * https://sailsjs.com/config/session
 */

module.exports.session = {

  /***************************************************************************
  *                                                                          *
  * Session secret is automatically generated when your new app is created   *
  * Replace at your own risk in production-- you will invalidate the cookies *
  * of your users, forcing them to log in again.                             *
  *                                                                          *
  ***************************************************************************/
  secret: 'cbedbfd08d663528aa47744c561aa546',

  adapter: 'connect-mongo',
  url: 'mongodb://fullstackadmin:caucau28@cluster0-shard-00-00-xznc0.mongodb.net:27017,cluster0-shard-00-01-xznc0.mongodb.net:27017,cluster0-shard-00-02-xznc0.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority',
  // url: 'mongodb://fullstackadmin:fullstackadmin111@ds353457.mlab.com:53457/heroku_xwmw4z62',
  // url: 'mongodb://fullstackadmin:fullstackadmin111@ds017195.mlab.com:17195/fullstacksocial',
  collection: 'sessions',

  /***************************************************************************
  *                                                                          *
  * Customize when built-in session support will be skipped.                 *
  *                                                                          *
  * (Useful for performance tuning; particularly to avoid wasting cycles on  *
  * session management when responding to simple requests for static assets, *
  * like images or stylesheets.)                                             *
  *                                                                          *
  * https://sailsjs.com/config/session                                       *
  *                                                                          *
  ***************************************************************************/
  // isSessionDisabled: function (req){
  //   return !!req.path.match(req._sails.LOOKS_LIKE_ASSET_RX);
  // },

};
