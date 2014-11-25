import DS from 'ember-data';

var Post = DS.Model.extend({
  content: DS.attr('string'),
  author: DS.belongsTo('user', {async: true}),
  createdAt: DS.attr('date'),
  repostedBy: DS.attr('array')
});

Post.reopenClass({
  FIXTURES: [
    {
      id: 4,
      content: 'Body of post 1',
      author: 'kaxline',
      createdAt: new Date('01/14/14'),
      repostedBy: []
    },
    {
      id: 7,
      content: 'Bleep blop bloop',
      author: 'kaxline',
      createdAt: new Date('11/21/14'),
      repostedBy: []
    },
    {
      id: 8,
      content: 'Some stuff',
      author: 'kaxline',
      createdAt: new Date('11/22/14'),
      repostedBy: []
    },
    {
      id: 5,
      content: 'Body of post 2',
      author: 'jsmith',
      createdAt: new Date('11/13/14'),
      repostedBy: []
    },
    {
      id: 6,
      content: 'Body of post 3',
      author: 'sjackson',
      createdAt: new Date('11/15/14'),
      repostedBy: []
    }
  ]
});

export default Post;
