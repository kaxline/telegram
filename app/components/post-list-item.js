import Ember from 'ember';

export default Ember.Component.extend({
  pubTime: Ember.computed.alias('post.createdAt')
});
