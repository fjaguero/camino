Camino.MorningGratitude = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {
    let sub = Meteor.subscribe("gratitude")

    // Get the morning gratitude from the current day
    let today = moment().startOf('day')
    let tomorrow = moment(today).add(1, 'days')

    return {
      isLoading: ! sub.ready(),
      gratitude: Gratitude.findOne({
        'userId': Meteor.userId(),
        'createdAt': {
          $gte: today.toDate(),
          $lt: tomorrow.toDate()
        }
      })
    }
  },

  showForm() {
    return (
      <form className="mit__list" name="mit" >
        <MorningGratitudeList data={this.data.gratitude} /> 
      </form>
    )
  },

  showSpinner() {
    return <Spinner />
  },

  render() {
    return (
      <div className="jumbotron">
          <div className="container">
            <div className="mit section__container">
              <h2 className="mit__title">Morning gratitude</h2>
              {
                this.data.isLoading ? this.showSpinner() : this.showForm()
              }
             </div>
          </div>
      </div>
    )
  }

})
