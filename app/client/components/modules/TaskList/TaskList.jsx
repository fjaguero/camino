TaskList = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData: function() {
    return {
      tasks: Tasks.find({}, {sort: {'createdAt': -1}}).fetch()
    };
  },
  getInitialState: function() {
    return {};
  },
  addItem: function(e) {
    e.preventDefault();
    var item = React.findDOMNode(this.refs.input).value;

    Tasks.insert({
      'content': item,
      'createdAt': new Date()
    });
    
    React.findDOMNode(this.refs.input).value = "";
  },
  render() {
    return (
      <div className="tasks">
        <form className="tasks__add-task-form" onSubmit={this.addItem}>
          <input className="tasks__add-task-form__input" type="text" ref="input"/>
          <button className="tasks__add-task-form__button btn btn-primary" type="submit">Add Item</button>
        </form>
         <ul className="tasks__list">
           {this.data.tasks.map(function (item) {
             return <li className="tasks__list__single-task" key={item._id}>{item.content}</li>;
            })}
         </ul>
       </div>
    );
  }

});
