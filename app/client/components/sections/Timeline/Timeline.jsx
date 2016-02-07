Camino.Timeline = React.createClass({
  // mixins: [ReactMeteorData],

  // getMeteorData() {
  // 
  // },

  getInitialState: function () {
		return {
			'selectedItems': [],
			tolerance: 0,
			distance: 1,
			isGlobal: true
		};
	},

  handleSelection: function(keys) {
    alert(keys)
  },

  render() {
    data = [
      { hour: '8'},
      { hour: '8:30'},
      { hour: '9'},
      { hour: '9:30'},
      { hour: '10'},
      { hour: '10:30'},
      { hour: '11'},
      { hour: '11:30'},
      { hour: '12'},
      { hour: '12:30'},
      { hour: '13'},
      { hour: '13:30'},
      { hour: '14'},
      { hour: '14:30'},
      { hour: '15'},
      { hour: '15:30'},
      { hour: '16'},
      { hour: '16:30'},
      { hour: '17'},
      { hour: '17:30'},
      { hour: '18'},
      { hour: '18:30'},
      { hour: '19'},
      { hour: '19:30'},
      { hour: '20'},
      { hour: '20:30'},
      { hour: '21'},
      { hour: '21:30'},
      { hour: '22'},
      { hour: '22:30'},
      { hour: '23'},
      { hour: '23:30'},
      { hour: '24'}
    ]

    return (
      <div className="timeline mit__container">
        <h2 className="title">Timeline</h2>
          <Selectable
  					className="main"
  					onSelection={this.handleSelection}
  					tolerance={this.state.tolerance}
  					globalMouse={this.state.isGlobal}
  					distance={this.state.distance}
            selectboxBorderColor="#000">

    				{data.map(function (item, i) {
    					return <Item key={item.hour} hour={item.hour} />
    				})}
  				</Selectable>

      </div>
    );
  }

});


var Item = React.createClass({
	render: function () {
		var classes = this.props.selected ? 'item selected' : 'item';
		return (
			<div className={classes}>
				<span className="item-hour">{this.props.hour}</span>
			</div>
		);

	}
});
