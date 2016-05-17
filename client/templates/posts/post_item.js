Template.postItem.helpers({
    domain: function() {
        var a = document.createElement('a');
        a.href = this.url;
        return a.hostname;
    },
    ownPost: function () {
        return this.userId === Meteor.userId();
    },
    commentsCount: function() {
        return Comments.find({postId: this._id}).count();
    }
});

Template.postItem.events({
    'click .eliminar': function(e) {
        Posts.remove(this._id);
        Router.go('postsList');
        e.preventDefault();
    }
});
//Template.postItem.events({
//    'click .eliminar': function(e) {
//        if (confirm("Estas seguro que quieres eliminarlo?")) {
//            var currentPostId = this._id;
//            Posts.remove(currentPostId);
//            Router.go('postsList');
//        }
//    }
//});