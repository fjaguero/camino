TimeRange = React.createClass({
  propTypes: {
    selected: React.PropTypes.bool,
    hour: React.PropTypes.string,
    key: React.PropTypes.string,
    tasks: React.PropTypes.array,
    onDeleteTask: React.PropTypes.func,
    onCleanSelected: React.PropTypes.func,
    onClick: React.PropTypes.func
  },

  handleClick(e) {
    // Allow deletion of a single task
    if (this.task && this.task.name) {
      let confirmDelete = window.confirm("Delete the task?")

      if (confirmDelete) {
        this.props.onDeleteTask(this.task._id)
        this.props.onCleanSelected
        this.task = {}
      }
    }

  },
	render() {
		let classes = this.props.selected ? 'item selected' : 'item'
    let taskName = ''

    // Check if there is a task for this time span
    this.props.tasks.map( (task) => {
      let hasTask = _.contains(task.timeRanges, this.props.hour)

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
		)
	}

})