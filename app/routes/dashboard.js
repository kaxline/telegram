import Ember from 'ember';

export default Ember.Route.extend({
  activate: function () {
    // turn on these lines when done testing

    //if (!this.get('session.user')) {
    //  this.transitionTo('auth.login');
    //}
  },

  beforeModel: function () {
    var self = this;
    // these lines are for testing only
    var testUser = this.store.find('user', 'kaxline');
    return testUser.then(function (fulfilledUser) {
      self.set('session.user', fulfilledUser);
    });
    //
  },

  model: function () {
    var user = this.get('session.user');
    var userName = user.get('id');

    return this.store.filter('post', {author: userName}, function (post) {
      return post.get('author').then(function (fulfilledAuthor) {
        return fulfilledAuthor.get('id') === userName;
      });
    });
  },

  renderTemplate: function () {
    this._super();
    var body = $('body');
    if (body.hasClass('auth')) {
      body.removeClass('auth');
    }
    body.addClass('dashboard');
  }
});
