import DS from 'ember-data';

var Post = DS.Model.extend({
    content: DS.attr('string')
  , author: DS.belongsTo('user', {async: true})
  , originalAuthor: DS.belongsTo('user', {async: true})
  , originalAuthorName: DS.attr('string')
  , createdAt: DS.attr('date')
  , originalPost: DS.belongsTo('post', {async: true, inverse: null})
});

export default Post;
