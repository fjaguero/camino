TimelineTable = React.createClass({

  getInitialState() {
		return {
      'timeRanges': [],
      'isModalVisible': false
		}
	},

  createTask(name, timeRanges) {
    if (name && timeRanges) {
      Meteor.call('createTask', {name, timeRanges}) 
    }
  },

  hideModal() {
   this.setState({isModalVisible: false, timeRanges: []})
  },

  handleOnDeleteTask(taskId) {
    Meteor.call('deleteTask', taskId)
  },

  handleOnSelection: function(timeRanges) {
    // Show modal and save the selected ranges to be used later
    this.setState({isModalVisible: true, timeRanges: timeRanges})
    this.handleOnCleanSelected()
  },

  handleOnCleanSelected() {
    let selectedItems = document.querySelectorAll('.item.selected')

    for (let prop of selectedItems) {
      prop.classList.remove('selected')
    }
  },

  handleOnCancel() {
    this.hideModal()
  },

  handleOnConfirm(taskName) {
    this.createTask(taskName, this.state.timeRanges)
    this.hideModal()
  },

  render() {
    let newTaskModal
    let timeRanges = [
      { hour: '8:00'},
      { hour: '8:30'},
      { hour: '9:00'},
      { hour: '9:30'},
      { hour: '10:00'},
      { hour: '10:30'},
      { hour: '11:00'},
      { hour: '11:30'},
      { hour: '12:00'},
      { hour: '12:30'},
      { hour: '13:00'},
      { hour: '13:30'},
      { hour: '14:00'},
      { hour: '14:30'},
      { hour: '15:00'},
      { hour: '15:30'},
      { hour: '16:00'},
      { hour: '16:30'},
      { hour: '17:00'},
      { hour: '17:30'},
      { hour: '18:00'},
      { hour: '18:30'},
      { hour: '19:00'},
      { hour: '19:30'},
      { hour: '20:00'},
      { hour: '20:30'},
      { hour: '21:00'},
      { hour: '21:30'},
      { hour: '22:00'},
      { hour: '22:30'},
      { hour: '23:00'},
      { hour: '23:30'},
      { hour: '24:00'}
    ]

    // Show the "New Task" modal
    if (this.state.isModalVisible) {
      newTaskModal = (
        <Modal onConfirm={this.handleOnConfirm} onCancel={this.handleOnCancel} />
      )
    }

    return (
      <div className="jumbotron">
        <div className="timeline section__container">
          <h2 className="title">Timeline</h2>
          <Selectable
  					className="main"
  					onSelection={this.handleOnSelection}
            selectboxBorderColor="#000">
    				{
              timeRanges.map((item, i) => {
                return <TimeRange
                  key={item.hour}
                  hour={item.hour}
                  tasks={this.props.tasks}
                  onClick={this.handleClick}
                  onDeleteTask={this.handleOnDeleteTask}
                  onCleanSelected={this.handleOnCleanSelected()}
                />
    				  })
            }
  				</Selectable>
        </div>
        {newTaskModal} 
      </div>
    );
  }

})
