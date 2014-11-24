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
      newPost.save();
      self.set('msgText', null);
    }
  },

  sortProperties: ['createdAt'],

  sortAscending: false,

  msgLengthRemaining: function () {
    var msgText = this.get('msgText');
    var length = 0;
    if (msgText) {
      length = msgText.length;
    }
    return 140 - length;
  }.property('msgText')


});
