Mit = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {
    let sub = Meteor.subscribe("mits");

    // Get the MITs from the current day
    let today = moment().startOf('day')
    let tomorrow = moment(today).add(1, 'days')

    return {
      mits: Mits.findOne({
        'createdAt': {
          $gte: today.toDate(),
          $lt: tomorrow.toDate()
        }
      })
    }
  },

  render() {
    return (
      <div className="mit mit__container">
        <h2 className="mit__title">Today targets</h2>
         <form className="mit__list" name="mit" >
           <MitList mits={this.data.mits} />
        </form>
       </div>
    );
  }

});
