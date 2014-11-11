import DS from 'ember-data';

var Session = DS.Model.extend({
  isLoggedIn: DS.attr('boolean')
});

Session.reopenClass({
  FIXTURES: [
    {
      id: 20,
      isLoggedIn: true
    }
  ]
});

export default Session;
