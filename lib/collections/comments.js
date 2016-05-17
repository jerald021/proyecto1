// TO DO
// -schemas de la collection
Comments = new Mongo.Collection('comments');

// Forma cutre de permitir crear posts si el usuario tiene ID / esta logueado
Comments.allow({
    insert: function(userId, doc){
        return !!userId;
    },
    update: function(userId, doc){
        return !!userId;
    }
});

Meteor.methods({
    commentInsert: function(commentAttributes) {
        console.log(commentAttributes);

        //check(this.userId, String);
        //check(commentAttributes, {
        //    comentario: String,
        //    fecha: String,
        //    autor: String
        //});
        var user = Meteor.user();
        var post = Posts.findOne(commentAttributes.postId);
        if (!post)
            throw new Meteor.Error('invalid-comment', 'You must comment on a post');
        comment = _.extend(commentAttributes, {
            userId: user._id,
            autor: user.username,
            fechaComentario: new Date()
        });

        return Comments.insert(comment);
    }
});

//Template.comentario.events({
//    'submit .formulario2': function(e, t){
//        var usuario = Meteor.user();
//
//        Posts.update(this._id, {$push:{
//            comentarios: {
//                comentario: t.find('.descripcion' ).value,
//                fecha: new Date(),
//                autor: usuario.username
//            }
//        }});
//        e.preventDefault();
//    }
//});