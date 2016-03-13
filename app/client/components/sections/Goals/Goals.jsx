Camino.Goals = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {
    let sub = Meteor.subscribe("goals");

    // Get the goals that affect the current day
    let today = moment().startOf('day')
    let tomorrow = moment(today).add(1, 'days')

    return {
      goals: Goals.findOne({
        'userId': Meteor.userId(),
        'createdAt': {
          $gte: today.toDate(),
          $lt: tomorrow.toDate()
        }
      })
    }
  },

  render() {
    let options = [
      { value: 'week', label: 'Week' },
      { value: 'month', label: 'Month' },
      { value: 'quarter', label: 'Quarter' },
      { value: 'year', label: 'Year' }
    ];

    return (
      <div className="jumbotron">
          <div className="container">
            <div className="goals section__container">
              <h2 className="goals__title">Create a Goal</h2>
               <form className="goals__list" name="mit" >
                 <input
                   type="text"
                 />
                 <Select options={options} />

              </form>
             </div>
          </div>
      </div>
    )
  }

})
