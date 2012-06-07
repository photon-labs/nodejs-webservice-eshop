var Sequelize = require("sequelize")
var utility = require("../utility")
var exception = require('../exception');

var sequelize = new Sequelize('dbs', utility.getDBUserName(), utility.getDBPassword(), {
    // custom host; default: localhost
    host: utility.getDBHost(),

    // custom port; default: 3306
    port: utility.getDBPort(),

    // disable logging; default: true
    logging: true,

    // max concurrent database requests; default: 50
    maxConcurrentQueries: 100,

    // specify options, which are used when sequelize.define is called
    // the following example is basically the same as:
    // sequelize.define(name, attributes, { timestamps: false })
    // so defining the timestamps for each model will be not necessary
    define: { timestamps: false },

    // similiar for sync: you can define this to always force sync for models
    sync: { force: true }
})

var Project = sequelize.import(__dirname + "/models/Project")
var Task = sequelize.import(__dirname + "/models/Task")
var User = sequelize.import(__dirname + "/models/User")
var Person = sequelize.import(__dirname + "/models/Person")


/*
Project.sync().on('success', function() {
  console.info('project sync');
}).on('failure', function(error) {
  console.info('project failed = ', error);
})
Task.sync().on('success', function() {
  console.info('task sync');
}).on('failure', function(error) {
  console.info('task failed = ', error);
})

Project.drop();
Task.drop();

*/
/*
var project = Project.build({
  title: 'my awesome project',
  description: 'woot woot. this will make me a rich man'
})

var task = Task.build({
  title: 'specify the project idea',
  description: 'bla',
  deadline: new Date()
})

console.info('project = ', project);

console.info('task = ', task);

// now instantiate an object
//var task = Task.build({title: 'very important task'})
console.info('Title = ', task.title);
// ==> 'very important task'
console.info('Rating = ', task.rating);
// ==> 3

project.save().on('success', function() {
  console.info('Project saved');
})

task.save().on('failure', function(error) {
  console.info('task failed = ', error);
})


// you can also build, save and access the object with chaining:
Task.build({ title: 'foo', description: 'bar', deadline: new Date()})
.save().on('success', function(anotherTask) {
  // you can now access the currently saved task with the variable anotherTask... nice!
})

task.updateAttributes({
  title: 'a very different title now'
}).on('success', function() {})

var Foo = sequelize.import(__dirname + "/models/Foo")

console.info('Method1 = ', Foo.method1());
console.info('Method2 = ', Foo.build().method2());


var chainer = new Sequelize.Utils.QueryChainer

chainer
  .add(Task.drop())
  .add(Task.sync())

for(var i = 0; i < 2; i++)
  chainer.add(Task.create({}))

chainer
  .run()
  .on('success', function(){})
  .on('failure', function(errors){})

*/
  
//Project.hasOne(User)
//Project.hasOne(User, { foreignKey: 'p_id' })
//Project.hasOne(User, { as: 'Initiator' })

Project.hasMany(User, { foreignKey: 'p_id' });
//User.hasMany(Project);

//sequelize.sync();

Project.find(0).on('success', function(project) {
    console.info('project = ', project);
    project.getUsers().on('success', function(users) {
      // associatedTasks is an array of tasks
      for (var i = 0; i < users.length; i++) {
        console.info('users = ', users[i].name);
      }
    })
})

/*
User.find(1).on('success', function(user) {
    console.info('user = ', user.name);
}) */

//console.info(User.getIni());
//console.info(User.build().getInitiator());

exports.getProjects = function(req, res) {
}