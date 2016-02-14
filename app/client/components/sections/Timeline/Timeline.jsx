Camino.Timeline = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {
    let sub = Meteor.subscribe("tasks");

    // Get the tasks for the current day
    let today = moment().startOf('day')
    let tomorrow = moment(today).add(1, 'days')

    let tasks = Tasks.find({
      'userId': Meteor.userId(),
      'createdAt': {
        $gte: today.toDate(),
        $lt: tomorrow.toDate()
      }
    }).fetch();

    console.log('TASKS =>')
    console.log(tasks)

    return {'tasks': tasks}
  },

  render() {
    return (
      <TimelineTable tasks={this.data.tasks || []} />
    )
  }

});
