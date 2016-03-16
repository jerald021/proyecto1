//TO DO
// al crear un nuevo post en 1 post la fecha de creacion del post se modifica a la fecha actual del comentario
Template.crearPost.events({
    'submit .formulario': function(e, t){
        e.preventDefault();
        var post = {
            title: t.find('.input1').value,
            url: t.find('.input2').value,
            descripcion: t.find('.input3').value,
            //fechaPost: new Date(),
            //autor: Meteor.user().username
        };

        //Posts.insert({
        //    title: t.find('.input1').value,
        //    url: t.find('.input2').value,
        //    descripcion: t.find('.input3').value,
        //    fechaPost: new Date(),
        //    autor: Meteor.user().username
        //});

        Meteor.call('postInsert', post, function(error, result) {
            // display the error to the user and abort
            if (error)
                return alert(error.reason);

            if (result.postExists)
                alert('Este enlace ya ha sido creado ;(');

            Router.go('postPage', {_id: result._id});
        });

        //Router.go('postsList');
    }
});