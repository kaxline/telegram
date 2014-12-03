import Ember from 'ember';

export default Ember.Route.extend({
  model: function () {
    var user = this.modelFor('profile');
    var userName = user.get('id');

    // Using this filter for frontend testing in order to have the user object
    // fulfilled on the 'author' key of each post.
    return this.store.filter('post', {author: userName}, function (post) {
      return post.get('author').then(function (fulfilledAuthor) {
        return fulfilledAuthor.get('id') === userName;
      });
    });
  }
});
