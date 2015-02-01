import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel: function () {
    var route = this;
    var promise = this.store.find('user', {operation: 'isAuthenticated'});
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
    },
    error: function (error, transition) {
      console.log('application route error handling');
      transition.abort();
      this.transitionTo('pageNotFound', 'Error handling route.');
    },
    logout: function () {
      console.log('logout');
      var self = this;
      var loggedInUser = self.get('session.user');
      $.get(
        '/api/users/logout',
        null,
        function (data, textStatus, jqXHR) {
          self.store.unloadRecord(loggedInUser);
          self.set('session.user', null);
          self.transitionTo('auth.login');
        }
      );
    },
    follow: function (user) {
      console.log('follow');
      var loggedInUser = this.get('session.user');
      if (!loggedInUser) {
        return this.transitionTo('auth.login');
      }
      user.set('operation', 'follow');
      user.save().then(function () {
        console.log('user followed');
      }, function () {
        console.error('Error following user.');
      });
    },
    unfollow: function (user) {
      var self = this;
      user.set('operation', 'unfollow');
      user.save().then(function () {
        console.log('user unfollowed');
      }, function () {
        console.error('Error unfollowing user.');
      });
    }
  }
});
