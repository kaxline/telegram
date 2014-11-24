import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  // change author ids on post fixtures
  this.resource('auth', {path: '/'}, function () {
    this.route('reset-password');
    this.route('create-account');
    this.route('login', {path: '/'});
    this.route('logout');
  });
  this.route('dashboard');
  this.resource('profile', {path: '/:user_id'}, function () {
    this.route('posts', {path: '/'});
    this.route('following');
    this.route('followers');
    this.route('post', {path: 'post/:post_id'});
  });
});

export default Router;
