Meteor.methods({

  // Tasks
  createTask: function(task) {
    // FIXME: Use collection hooks
    task.createdAt = new Date()
    task.userId = Meteor.userId()

    Tasks.insert(task)
  },

  // Morning Gratitude
  createGratitude: function(gratitude) {
    // FIXME: Use collection hooks
    gratitude.createdAt = new Date()
    gratitude.userId = Meteor.userId()

    Gratitude.insert(gratitude)
  },

  updateGratitude: function(id, newValue) {
    Gratitude.update(id, {
      $set: {"value": newValue}
    })
  },

  // MITs
  createMits: function(mits) {
    // FIXME: Use collection hooks
    mits.createdAt = new Date()
    mits.userId = Meteor.userId()

    Mits.insert(mits)
  },

  updateMit: function(id, newValue) {
    Mits.update(id, {
      $set: {"value": newValue}
    })
  }

});
