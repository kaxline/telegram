import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel: function () {
    var route = this;
    var promise = this.store.find('user', {isAuthenticated: true});
    return promise.then(function (users) {
      if (users && users.get('length') > 0) {
        var user = users.get('firstObject');
        route.set('session.user', user);
      }
      return users;
    });
  },
  actions: {
    repost: function (originalPost) {
      var self = this;
      var newPost = this.store.createRecord('post', {
          content: originalPost.get('content')
        , author: self.get('session.user')
        , originalAuthorName: originalPost.get('author.id')
        //, originalAuthor: originalPost.get('author')
        , createdAt: new Date()
        , originalPost: originalPost
      });
      newPost.get('author').then(function (fulfilledAuthor) {
        newPost.get('originalAuthor').then(function (fulfilledOriginalAuthor) {
          newPost.get('originalPost').then(function (fulfilledPost) {
            newPost.save();
          });
        });
      });
      //TODO reconcile how to handle this with data on the server
      originalPost.set('repostedByCurrentUser', true);
    },
    deletePost: function (post) {
      post.destroyRecord();
    }
  }
});
