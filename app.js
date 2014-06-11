App = Ember.Application.create({});

var posts = [{
  id: '1',
  person: "Pawan",
  display: "Pawan" ,
  comment: ""
  }, {
  id: '2',
  person: "Priya",
  display: "Priya" ,
  comment: ""
  }];

var expenses =[{
        id: '1',
        name : 'Pawan',
        amount: '100',
        date: new Date(),
        description: 'Pub'
        
},
{
     id: '2',
        name : 'Priya',
        amount: '100',
        date: new Date(),
        description: 'Pub'
        
}
];

App.Router.map(function() {
  this.resource('about');
  this.resource('posts', function() {
    this.resource('post', { path: ':post_id' });
  });
  this.resource('expenses', function() {
    this.resource('expense', { path: ':expense_id' });
  });
  
});

App.PostsRoute = Ember.Route.extend({
  model: function() {
    return posts;
  }
});
App.ExpensesRoute = Ember.Route.extend({
  model: function() {
    return expenses;
  }
});

App.PostRoute = Ember.Route.extend({
  model: function(params) {
    return posts.findBy('id', params.post_id);
  }
});
App.ExpenseRoute = Ember.Route.extend({
  model: function(params) {
    return expenses.findBy('id', params.expense_id);
  }
});
App.PostController = Ember.ObjectController.extend({
  isEditing: false,

  edit: function() {
    this.set('isEditing', true);
  },

  doneEditing: function() {
    this.set('isEditing', false);
    this.get('store').commit();
  }
});

App.UsersCreateRoute = Ember.Route.extend({
  model: function(){
    // the model for this route is a new empty Ember.Object
    return Em.Object.create({});
  },

  // in this case (the create route), we can reuse the user/edit template
  // associated with the usersCreateController
  renderTemplate: function(){
    this.render('user.edit', {
      controller: 'usersCreate'
    });
  }
});

App.UsersCreateController = Ember.ObjectController.extend({
  actions: {
    save: function(){
      // just before saving, we set the creationDate
      this.get('store').set('person', 'xyz');

      // create a record and save it to the store
      var newUser = this.store.createRecord('posts', this.get('store'));
      newUser.save();

      // redirects to the user itself
      this.transitionToRoute('store', newUser);
    }
  }
});

var showdown = new Showdown.converter();

Ember.Handlebars.helper('format-markdown', function(input) {
  return new Handlebars.SafeString(showdown.makeHtml(input));
});

Ember.Handlebars.helper('format-date', function(date) {
  return moment(date).fromNow();
});
