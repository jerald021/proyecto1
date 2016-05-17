Posts = new Mongo.Collection('posts');

//SimpleSchema.messages({
//    "wrongTitle": "El titulo es incorrecto"
//});

var Schemas = {};
Schemas.Post = new SimpleSchema({
    title: {
        type: String,
        label: "Titulo",
        max: 100,
        //custom: function () {
        //    if(title == ""){
        //        return "wrongTitle";
        //    }
        //}
    },
    url: {
        type: String,
        label: "url",
        max: 100
    },
    descripcion: {
        type: String,
        label: "descripcion",
        max: 1000,
        optional: true
    },
    userId:{
        type: String,
        label: "userId",
        max: 100
    },
    autor:{
        type: String,
        label: "autor",
        max: 100
    },
    fechaPost:{
        type: String,
        label: "fechaPost",
        max: 100
    }
});

Posts.attachSchema(Schemas.Post);//linka el esquema posterior con la collection indicada


// prueba de un insert

//Posts.insert({
//    title: "titulo1",
//    url: "http://www.asdasdsad.com",
//    descripcion: "esto es una descripcion"
//},
//function(error, result) {
//    Posts.simpleSchema().namedContext().invalidKeys()
//});

Posts.allow({
    update: function(userId, post){
        return ownsDocument(userId, post);
    },
    remove: function(userId, post){
        return ownsDocument(userId, post);
    }
});

Posts.deny({
   update: function (userId, post, fieldNames) {
       //solo permitimos que edite esto campos
       return (_.without(fieldNames, 'title', 'url', 'descripcion').length > 0);
   }
});

Meteor.methods({
    postInsert: function(postAttributes) {

        // comprobacion con el metodo check del formulario

        //check(this.userId, String);
        //check(postAttributes, {
        //    title: String,
        //    url: String,
        //    descripcion: String
        //});

        // testeando el tiempo de respuesta del servidor(sleep de 5secs)

        //if (Meteor.isServer) {
        //    postAttributes.title += "(server)";
        //    // wait for 5 seconds
        //    Meteor._sleepForMs(5000);
        //} else {
        //    postAttributes.title += "(client)";
        //}

        var postWithSameLink = Posts.findOne({url: postAttributes.url});
        if (postWithSameLink) {
            return {
                postExists: true,
                _id: postWithSameLink._id
            }
        }

        var user = Meteor.user();
        var post = _.extend(postAttributes, {
            userId: user._id,
            autor: user.username,
            fechaPost: new Date()
        });

        var postId = Posts.insert(post);

        return {
            _id: postId
        };
    }
});

// Forma cutre de permitir crear posts si el usuario tiene ID / logueado
//Posts.allow({
//    insert: function(userId, doc){
//        return !!userId;
//    }
//});