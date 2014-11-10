import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('index', {path: '/'}, function () {
    this.route('reset-password');
    this.route('create-account', {path: '/'});
    this.route('login');
  });
  this.resource('user', {path: '/:username'}, function () {
    this.route('posts');
    this.route('following');
    this.route('followers');
    this.route('post', {path: 'post/:post_id'});
  });
});

export default Router;
