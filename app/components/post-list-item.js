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
      store.find('post', this.get('post.id')).then(function (foundPost) {
        foundPost.destroyRecord();
      });
    }
  },

  isRepost: function () {
    var originalPost = this.get('originalPost') ? true : false;
    return originalPost;
  }.property('originalPost'),

  displayName: function () {
    return this.get('isRepost') ? this.get('originalPost.author.name') : this.get('post.author.name');
  }.property('isRepost', 'post.author.name'),

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
