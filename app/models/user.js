import DS from 'ember-data';

var User = DS.Model.extend({
  name: DS.attr('string'),
  email: DS.attr('string'),
  profileImage: DS.attr('string'),
  password: DS.attr('string'),
  following: DS.attr('array'),
  followers: DS.attr('array')
});

User.reopenClass({
  FIXTURES: [
    {
      id: 'kaxline',
      name: 'Keith Axline',
      email: 'kaxline@gmail.com',
      profileImage: '',
      password: 'password1',
      following: ['jsmith'],
      followers: ['sjackson', 'jsmith']
    },
    {
      id: 'jsmith',
      name: 'Joe Smith',
      email: 'joe.smith@gmail.com',
      profileImage: '',
      password: 'password1',
      following: ['sjackson', 'kaxline'],
      followers: ['kaxline']
    },
    {
      id: 'sjackson',
      name: 'Sam Jackson',
      email: 'sam.jackson@gmail.com',
      profileImage: '',
      password: 'password1',
      following: ['kaxline', 'jsmith'],
      followers: ['jsmith']
    }
  ]
});

export default User;
