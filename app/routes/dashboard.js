import Ember from 'ember';

export default Ember.Route.extend({
  setupController: function (controller, model) {
    controller.set('content', model);
    controller.set('posts', this.store.find('post'));
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
