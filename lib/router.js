Router.configure({
    layoutTemplate: 'layout',
    loadingTemplate: 'loading',
    notFoundTemplate: 'notFound',
    waitOn: function() {
        return [Meteor.subscribe('posts'), Meteor.subscribe('comments')];
    }
});

Router.route('/', { name: 'postsList'});

Router.route('/posts/:_id', {
    name: 'postPage',
    data: function() {
        return Posts.findOne(this.params._id);
    }
});

Router.route('/nuevo-post', { name:'crearPost',
    onBeforeAction: function () {
        if(!Meteor.user()){
            this.render('privateArea');
        }
        else{
            this.render('crearPost')
        }
    }
});

Router.route('/:_id/editar-post', {
    name:'editarPost',
    data: function() {
        return Posts.findOne(this.params._id);
    }
});

Router.onBeforeAction('dataNotFound', {only: 'postPage'});