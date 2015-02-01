import DS from 'ember-data';

var User = DS.Model.extend({
      name: DS.attr('string')
    , email: DS.attr('string')
    , profileImage: DS.attr('string')
    , isFollowed: DS.attr('boolean')
});

export default User;
