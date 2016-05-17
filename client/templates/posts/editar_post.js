Template.editarPost.events({
    'submit .formulario': function(e, t){
        e.preventDefault();

        var currentId = this._id;
        var postEditado = {
            title: t    .find('.input1').value,
            url: t.find('.input2').value,
            descripcion: t.find('.input3').value
        };

        Posts.update(currentId, {$set: postEditado}, function(error) {
            if (error) {
                // display the error to the user
                alert(error.reason);
            }
            else {
                Router.go('postPage', {_id: currentId});
            }
        });
    }
});