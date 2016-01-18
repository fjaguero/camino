Camino.MorningGratitude = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {
    // Get the morning gratitude from the current day
    var today = moment().startOf('day')
    var tomorrow = moment(today).add(1, 'days')

    return {
      gratitude: Gratitude.findOne({
        'userId': Meteor.userId(),
        'createdAt': {
          $gte: today.toDate(),
          $lt: tomorrow.toDate()
        },
        'type': 'morning'
      })
    }
  },

  render() {
    return (
      <div className="jumbotron">
          <div className="container">
            <div className="mit mit__container">
              <h2 className="mit__title">Morning gratitude</h2>
               <form className="mit__list" name="mit" >
                 <MitList
                   type="morning"
                   data={this.data.gratitude}
                  />
              </form>
             </div>
          </div>
      </div>
    )
  }

})
