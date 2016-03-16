Template.postsList.helpers({
    posts: function() {
        return Posts.find({}, {sort: {fechaPost: -1}}); // cambiar luego el orden por karma
    }
});