import Ember from 'ember';

export default Ember.Route.extend({
  model: function (params) {
    return this.store.find('post', params.post_id);
  },

  serialize: function (model, params) {
    return {
      user_id: model.get('author.id'),
      post_id: model.get('id')
    };
  }
});