TimelineTable = React.createClass({

  getInitialState() {
		return {
			'selectedItems': []
		}
	},

  handleOnDeleteTask(taskId) {
    Tasks.remove({
      '_id': taskId
    })
  },

  handleSelection: function(timeSelection) {
    // Check if we already have a task for that time span
    let taskName = window.prompt('Task Name')

    let task = {
      'name': taskName,
      'range': timeSelection
    }

    let selectedItems = document.querySelectorAll('.item.selected')

    for (let prop of selectedItems) {
      prop.classList.remove('selected')
    }

    // Create the task
    if (taskName) {
      Meteor.call('createTask', task)
    }
  },

  render() {
    timeRanges = [
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

    return (
      <div className="jumbotron">
          <div className="timeline section__container">
            <h2 className="title">Timeline</h2>
            <Selectable
    					className="main"
    					onSelection={this.handleSelection}
              selectboxBorderColor="#000">
      				{
                timeRanges.map((item, i) => {
                  return <TimeRange
                    onClick={this.handleClick}
                    key={item.hour}
                    hour={item.hour}
                    tasks={this.props.tasks}
                    onDeleteTask={this.handleOnDeleteTask}
                  />
      				  })
              }
    				</Selectable>
          </div>
      </div>
    );
  }

});


let TimeRange = React.createClass({

  handleClick(e) {
    // Allow deletion of a single task
    if (this.task && this.task.name) {
      let confirmDelete = window.confirm("Delete the task?")

      if (confirmDelete) {
        this.props.onDeleteTask(this.task._id)
        this.task = {}
      }
    }

  },

	render() {
		let classes = this.props.selected ? 'item selected' : 'item'
    let taskName = ''

    // Check if there is a task for this time span
    this.props.tasks.map( (task) => {
      let hasTask = _.contains(task.range, this.props.hour)

      if (hasTask) {
        this.task = task
      }

    })

    if (this.task && this.task.name) {
      taskName = this.task.name
    }

		return (
			<div onClick={this.handleClick} className={classes}>
				<span className="item-hour">{this.props.hour}</span>
        <span className="item-content">{taskName}</span>
			</div>
		);

	}
});
