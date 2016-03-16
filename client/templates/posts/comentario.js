Template.comentario.events({
    'submit .formulario2': function(e, t){
        var usuario = Meteor.user();

        Posts.update(this._id, {$push:{
            comentarios: {
                comentario: t.find('.descripcion' ).value,
                fecha: new Date(),
                autor: usuario.username
            }
        }});
        e.preventDefault();
    }
});