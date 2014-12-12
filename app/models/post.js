import DS from 'ember-data';

var Post = DS.Model.extend({
  content: DS.attr('string'),
  author: DS.belongsTo('user', {async: true}),
  createdAt: DS.attr('date'),
  originalPost: DS.belongsTo('post', {async: true, inverse: null}),
  repostedByCurrentUser: DS.attr('boolean')
});

export default Post;
