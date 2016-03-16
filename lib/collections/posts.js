Posts = new Mongo.Collection('posts');

Posts.allow({
    update: function(userId, doc){
        return !!userId;
    }
});

Posts.allow({
    remove: function(userId, doc){
        return !!userId;
    }
});

Meteor.methods({
    postInsert: function(postAttributes) {
        check(this.userId, String);
        check(postAttributes, {
            title: String,
            url: String,
            descripcion: String
        });


        if (Meteor.isServer) {
            postAttributes.title += "(server)";
            // wait for 5 seconds
            Meteor._sleepForMs(5000);
        } else {
            postAttributes.title += "(client)";
        }


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