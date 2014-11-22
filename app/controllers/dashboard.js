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
      alert(newPost.get('author').get('id'));
      newPost.save();
      self.set('msgText', null);
    }
  },

  //reverseChronSort: ['createdAt:desc'],
  //
  //reverseChronPosts: Ember.computed.sort('model', 'reverseChronSort'),

  //reverseChronPosts: function () {
  //  return this.get('arrangedContent');
  //},

   sortProperties: ['createdAt'],

  sortAscending: false,

  //sortFunction: function (a,b) {
  //  var dateA = new Date(a);
  //  var dateB = new Date(b);
  //  console.log(dateA < dateB ? -1 : 1);
  //  return dateA < dateB ? -1 : 1;
  //},

  msgLengthRemaining: function () {
    var msgText = this.get('msgText');
    var length = 0;
    if (msgText) {
      length = msgText.length;
    }
    return 140 - length;
  }.property('msgText')


});
