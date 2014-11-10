import DS from 'ember-data';

var User = DS.Model.extend({
  firstName: DS.attr('string'),
  lastName: DS.attr('string'),
  profileImage: '',
  fullName: function () {
    return (this.get('firstName') + ' ' + this.get('lastName')).trim();
  }.property('firstName', 'lastName'),
  username: DS.attr('string'),
  password: DS.attr('string'),
  following: DS.hasMany('user'),
  followers: DS.hasMany('user'),
  posts: DS.hasMany('post')
});

User.reopenClass({
  FIXTURES: [
    {
      id: 1,
      firstName: 'Keith',
      lastName: 'Axline',
      profileImage: '',
      username: 'kaxline',
      password: 'password1',
      following: [2,3],
      followers: [2,3],
      posts: [4]
    },
    {
      id: 2,
      firstName: 'Joe',
      lastName: 'Smith',
      profileImage: '',
      username: 'jsmith',
      password: 'password1',
      following: [1,3],
      followers: [1,3],
      posts: [5]
    },
    {
      id: 3,
      firstName: 'Sam',
      lastName: 'Jackson',
      profileImage: '',
      username: 'sjackson',
      password: 'password1',
      following: [1,2],
      followers: [1,2],
      posts: [6]
    }
  ]
});

export default User;
