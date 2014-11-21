import Ember from 'ember';

export default Ember.Controller.extend({
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

  msgLengthRemaining: function () {
    var msgText = this.get('msgText');
    var length;
    if (!msgText) {
      length = 0;
    } else {
      length = msgText.length;
    }
    return 140 - length;
  }.property('msgText')
});
