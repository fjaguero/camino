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
    var mitsId = uuid.new()

    mits.forEach(function(mit) {
      mit.completed = false
      mit.userId = Meteor.userId()
      mit.createdAt = new Date()
      mit.mitsId = mitsId

      Mits.insert(mit)
    })

  },

  updateMits: function(mits) {
    mits.forEach(function(mit) {
      Mits.update(mit._id, {
        $set: {"value": mit.value}
      })
    })

  },

  updateMitStatus: function(id, newStatus) {
    Mits.update(id, {
      $set: {"completed": newStatus}
    })
  },

  // Goals
  createGoal: function(goal) {
    goal.createdAt = new Date()
    goal.userId = Meteor.userId()
    goal.completed = false
    
    Goals.insert(goal)
  },

  deleteGoal: function(id) {
    Goals.remove(id)
  },

  updateGoals: function(id, newValue) {
    Goals.update(id, {
      $set: {"value": newValue}
    })
  },

  completeGoal: function(id) {
    Goals.update(id, {
      $set: {"completed": true}
    })
  }

});