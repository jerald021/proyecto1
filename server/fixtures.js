if (Posts.find().count() === 0) {
    //posts
    Posts.insert({
        title: 'Introducing Telescope',
        url: 'http://sachagreif.com/introducing-telescope/',
        fechaPost: new Date()
    });

    Posts.insert({
        title: 'Meteor',
        url: 'http://meteor.com',
        fechaPost: new Date()
    });

    Posts.insert({
        title: 'The Meteor Book',
        url: 'http://themeteorbook.com',
        fechaPost: new Date()
    });

    //comentarios
    //var now = new Date().getTime();
    //
    //var tomId = Meteor.users.insert({
    //    profile: { name: 'Tom Coleman'}
    //});
    //var tom = Meteor.users.findOne(tomId);
    //
    //var sachaId = Meteor.users.insert({
    //    profile: { name: 'Sacha Greif' }
    //});
    //var sacha = Meteor.users.findOne(sachaId);
}