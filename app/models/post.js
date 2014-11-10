import DS from 'ember-data';

var Post = DS.Model.extend({
  content: DS.attr('string'),
  author: DS.belongsTo('user'),
  createdAt: DS.attr('date')
});

Post.reopenClass({
  FIXTURES: [
    {
      id: 4,
      content: 'Body of post 1',
      author: 'kaxline',
      createdAt: new Date()
    },
    {
      id: 5,
      content: 'Body of post 2',
      author: 'jsmith',
      createdAt: new Date()
    },
    {
      id: 6,
      content: 'Body of post 3',
      author: 'sjackson',
      createdAt: new Date()
    }
  ]
});

export default Post;
