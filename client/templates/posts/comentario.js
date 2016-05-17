//Template.comentarioForm.helpers({
//    domain: function() {
//        var a = document.createElement('a');
//        a.href = this.url;
//        return a.hostname;
//    }
//});

/*
Template.comentario.events({
    'submit .formulario2': function(e, t){
        e.preventDefault();
        //var usuario = Meteor.user();
        var contenido = t.find('.descripcion' ).value;

        var comment = {
            comentario: contenido,
            //postId: template.data._id
        };

        //Posts.update(this._id, {$push:{
        //    comentarios: {
        //        comentario: t.find('.descripcion' ).value,
        //        //fecha: new Date(),
        //        //autor: usuario.username
        //    }
        //}});

        Meteor.call('commentInsert', comment, function(error, commentId) {
            if (error){
                throwError(error.reason);
            } else {
                contenido;
            }
        });

    }
});*/

//TO DO
// al crear un nuevo post en 1 post la fecha de creacion del post se modifica a la fecha actual del comentario
Template.comentarioForm.helpers({
    comments: function() {
        return Comments.find({postId: this._id});
        //return Comments.find({postId: this._id});
    }
});

Template.comentarioForm.events({
    'submit .formulario2': function(e, t){
        e.preventDefault();
        var comment = {
            descripcion: t.find('.descripcion').value,
            postId: this._id
            //fechaPost: new Date(),
            //autor: Meteor.user().username
        };

        Meteor.call('commentInsert', comment, function(error, result) {
            // display the error to the user and abort
            if (error)
                return alert(error.reason);
            //return alert(Books.simpleSchema().namedContext().invalidKeys());

            if (result.commentExists)
                alert('Este comentario ya ha sido creado ;(');
        });

        //Router.go('postsList');
    }
});