import Ember from 'ember';

export default Ember.Route.extend({
  model: function () {
    return this.store.find('post', {author: 'kaxline'});
  },
  renderTemplate: function () {
    this.render('user/posts');
  }
});
