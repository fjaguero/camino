Camino.Goals = React.createClass({
  mixins: [ReactMeteorData],

  // Fetch the data. Reactive and real-time by default.
  getMeteorData() {
    let sub = Meteor.subscribe("goals")

    return {
      isLoading: ! sub.ready(),
      goals: Goals.find({
        'userId': Meteor.userId()
      }).fetch()
    }
  },

  // Pass the data to the view
  showGoals() {
    return (
      <div className="goals section__container">
        <GoalsList goals={this.data.goals} />
      </div>
    )
  },

  // Show a loading spinner
  showSpinner() {
    return <Spinner />
  },

  // Render the Goals view
  render() {
    return (
      <div className="jumbotron">
        <div className="container">
          {
            this.data.isLoading ? this.showSpinner() : this.showGoals()
          }
        </div>
      </div>
    )
  }

})
