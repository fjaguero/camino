Camino.Goals = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {
    let sub = Meteor.subscribe("goals")

    return {
      isLoading: ! sub.ready(),
      goals: Goals.find({
        'userId': Meteor.userId()
      }).fetch()
    }
  },

  showContent() {
    return (
      <div className="goals section__container">
        <GoalsList goals={this.data.goals} />
      </div>
    )
  },

  showSpinner() {
    return <Spinner />
  },

  render() {
    return (
      <div className="jumbotron">
        <div className="container">
          {
            this.data.isLoading ? this.showSpinner() : this.showContent()
          }
        </div>
      </div>
    )
  }

})
