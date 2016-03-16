Comments = new Mongo.Collection('comments');

// Forma cutre de permitir crear posts si el usuario tiene ID / esta logueado
Comments.allow({
    insert: function(userId, doc){
        return !!userId;
    }
});