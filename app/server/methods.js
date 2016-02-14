Meteor.methods({
  createTask: function(task) {
    // FIXME: Use collection hooks
    task.createdAt = new Date()
    task.userId = Meteor.userId()

    Tasks.insert(task)
  }
});
