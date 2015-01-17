import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    repost: function (originalPost, loggedInUser) {
      var newPost = this.store.createRecord('post', {
        content: originalPost.get('content'),
        author: loggedInUser,
        createdAt: new Date(),
        originalPost: originalPost
      });
      newPost.save();
      //TODO reconcile how to handle this with data on the server
      originalPost.set('repostedByCurrentUser', true);
    },
    deletePost: function (post) {
      post.destroyRecord();
    }
  }
});
