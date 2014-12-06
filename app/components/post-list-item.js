import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    showRepost: function () {
      this.set('hover', true);
    },
    hideRepost: function () {
      this.set('hover', false);
    },
    repost: function () {
      var self = this;
      var post = self.get('post');
      var newPost = this.store.createRecord('post', {
        content: post.get('content'),
        author: self.get('loggedInUser'),
        createdAt: new Date(),
        originalPost: post
      });
      newPost.save();
      self.set('post.repostedByCurrentUser', true);
      self.send('hideRepost');
    },
    deletePost: function () {
      var store = this.get('store');
      store.find('post', this.get('post.id')).then(function (foundPost) {
        foundPost.destroyRecord();
      });
    }
  },

  isRepost: function () {
    var originalPost = this.get('post.originalPost.content') ? true : false;
    return originalPost;
  }.property('post.originalPost'),

  displayName: function () {
    return this.get('post.originalPost.author.name') || this.get('post.author.name');
  }.property('post.author.name'),

  displayDate: function () {
    return this.get('post.originalPost.createdAt') || this.get('post.createdAt');
  }.property('post.createdAt'),

  loggedInUserOwnsPost: function () {
    return this.get('loggedInUser.id') === this.get('post.author.id');
  }.property('loggedInUser', 'post.author.id'),

  loggedInUserHasReposted: function () {
    return this.get('post.repostedByCurrentUser');
  }.property('post.repostedByCurrentUser'),

  repostName: function () {
    return this.get('loggedInUser.name');
  }.property('post.repostedByCurrentUser'),

  displayRepostOption: function () {
    var repostedByCurrentUser = !this.get('post.repostedByCurrentUser') ? false : true;
    return !this.get('loggedInUserOwnsPost') || repostedByCurrentUser;
  }.property('loggedInUserOwnsPost', 'post.repostedByCurrentUser')

});
