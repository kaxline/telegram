import Ember from 'ember';

export default Ember.ArrayController.extend({
  actions: {
    publish: function () {
      var self = this;
      var newPost = this.store.createRecord('post', {
        content: self.get('msgText'),
        author: self.get('session.user'),
        createdAt: new Date()
      });
      newPost.get('author').then(function () {
        newPost.save();
        self.set('msgText', null);
      });
    }
  },

  sortProperties: ['createdAt'],

  sortAscending: false,

  msgLengthRemaining: function () {
    return 140 - (this.get('msgText') || '').length;
  }.property('msgText')


});
