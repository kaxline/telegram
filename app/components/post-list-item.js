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
      this.sendAction('repost', this.get('post'), this.get('model'));
      this.send('hideRepost');
    },
    delete: function () {
      this.sendAction('deletePost', this.get('post'), this.get('model'));
    }

  },

  isRepost: function () {
    return this.get('post.originalAuthorName') ? true : false;
  }.property('post.originalAuthorName'),

  displayName: function () {
    return this.get('post.originalPost.author.name') || this.get('post.originalAuthorName') || this.get('post.author.name');
  }.property('post.originalPost.author.name', 'post.author.name'),

  displayDate: function () {
    return this.get('post.originalPost.createdAt') || this.get('post.createdAt');
  }.property('post.originalPost.createdAt', 'post.createdAt'),

  postAuthor: function () {
    return this.get('post.originalPost.author') || this.get('post.author');
  }.property('post.originalPost', 'post.author'),

  postLink: function () {
    return this.get('post.originalPost') || this.get('post');
  }.property('post.originalPost', 'post'),

  loggedInUserOwnsPost: function () {
    return this.get('loggedInUser.id') === this.get('post.author.id');
  }.property('loggedInUser.id', 'post.author.id'),

  loggedInUserHasReposted: function () {
    return this.get('post.repostedByCurrentUser');
  }.property('post.repostedByCurrentUser'),

  displayRepostOption: function () {
    var repostedByCurrentUser = !this.get('post.repostedByCurrentUser') ? false : true;
    return !this.get('loggedInUserOwnsPost') || repostedByCurrentUser;
  }.property('loggedInUserOwnsPost', 'post.repostedByCurrentUser')

});
