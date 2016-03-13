Meteor.publish("mits", function (userId) {
  return Mits.find({
    'userId': this.userId
  });
});

Meteor.publish("gratitude", function (userId) {
  return Gratitude.find({
    'userId': this.userId
  });
});

Meteor.publish("tasks", function (userId) {
  return Tasks.find({
    'userId': this.userId
  });
});

Meteor.publish("goals", function (userId) {
  return Goals.find({
    'userId': this.userId
  });
});
