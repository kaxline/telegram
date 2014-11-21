import Ember from 'ember';

export default Ember.Route.extend({
  activate: function () {
    // turn on these lines when done testing

    //if (!this.get('session.user')) {
    //  this.transitionTo('auth.login');
    //}
  },

  model: function () {
    // these lines are for testing only
    var testUser = this.store.find('user', 'kaxline');
    this.get('session').set('user', testUser);
    //

    // using 'kaxline' for testing but should be dynamic
    return this.store.find('post', {author: 'kaxline'});


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
