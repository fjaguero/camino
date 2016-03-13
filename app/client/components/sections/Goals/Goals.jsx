Camino.Goals = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {
    Meteor.subscribe("goals");

    return {
      goals: Goals.find({
        'userId': Meteor.userId()
      }).fetch()
    }
  },

  render() {
    return (
      <div className="jumbotron">
          <div className="container">
            <div className="goals section__container">
              <GoalsList goals={this.data.goals} />
          </div>
          </div>
      </div>
    )
  }

})
