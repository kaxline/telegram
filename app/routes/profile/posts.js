import Ember from 'ember';

export default Ember.Route.extend({
  model: function () {
    var user = this.modelFor('profile');
    var userName = user.get('id');

    return this.store.filter('post', {author: userName}, function (post) {
      return post.get('author').then(function (fulfilledAuthor) {
        return fulfilledAuthor.get('id') === userName;
      });
    });
  }
});
