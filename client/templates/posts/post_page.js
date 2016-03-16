//Template.postPage.events({
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
//        Router.go('postPage');
//    }
//});

//Template.postPage.helpers({
//    comentarios: {
//        comentario: t.find({}, {sort:{fecha:1}}).value,
//    }
//});

//Template.players.helpers({
//    player: PlayerList.find({}, {sort:{score:-1}}),
//    nJugadores: PlayerList.find().count()
//});


// hacer la fecha reactiva manualmente
/*
var timeTick = new Tracker.Dependency();
Meteor.setInterval(function () {
    timeTick.changed();
}, 5000);

fromNowReactive = function (mmt) {
    timeTick.depend();
    return mmt.fromNow();
}

Template.postPage.helpers({
    fechaConvertida: function(fecha){
        return fromNowReactive(moment(fecha));
    }
});
// */


// mismo helper que el de arriba pero GLOBAL(no es reactivo)
/*
Template.registerHelper('convertirFecha',function(fecha){
    return moment(fecha).fromNow();
});
// */