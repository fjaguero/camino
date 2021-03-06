Mit = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {
    let sub = Meteor.subscribe("mits")

    // Get the MITs from the current day
    let today = moment().startOf('day')
    let tomorrow = moment(today).add(1, 'days')

    return {
      isLoading: ! sub.ready(),
      mits: Mits.find({
        'createdAt': {
          $gte: today.toDate(),
          $lt: tomorrow.toDate()
        }
      }).fetch()
    }
  },

  showForm() {
    return (
      <div className="mit__list" name="mit" >
        <MitList mits={this.data.mits} />
      </div>
    )
  },

  showSpinner() {
    return <Spinner />
  },

  render() {
    return (
      <div className="mit section__container">
        <h2 className="mit__title">Today targets</h2>
          {
            this.data.isLoading ? this.showSpinner() : this.showForm()
          }
       </div>
    );
  }

})
