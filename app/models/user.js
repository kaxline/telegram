import DS from 'ember-data';

var User = DS.Model.extend({
      name: DS.attr('string')
    , email: DS.attr('string')
    , profileImage: DS.attr('string')
});

export default User;
