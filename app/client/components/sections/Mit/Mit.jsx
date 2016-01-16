Mit = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData: function() {
    // Get the MITs from the current day
    var today = moment().startOf('day')
    var tomorrow = moment(today).add(1, 'days')

    return {
      mits: Mits.findOne({
        'userId': Meteor.userId(),
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
