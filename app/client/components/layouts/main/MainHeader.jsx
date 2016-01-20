Camino.MainHeader = React.createClass({
    mixins: [ReactMeteorData],
    getMeteorData() {
      return {
          currentUser: Meteor.user()
      };
    },
    handleLogout() {
      Meteor.logout(() => {
        FlowRouter.go('Login');
      });
    },
    navigateTo(route) {
      FlowRouter.go(route)
    },
    render() {
      let logoutButton
      let { currentUser } = this.data
      let mitButton

      homeButton = (
        <li><a onClick={this.navigateTo.bind(this, '/')}>Home</a></li>
      )

      mgtButton = (
        <li><a onClick={this.navigateTo.bind(this, '/morning-gratitude')}>Morning Gratitude</a></li>
      )

      if (currentUser) {
          logoutButton = (
            <li><a onClick={this.handleLogout}>Logout</a></li>
          );
      }

      return (
          <nav className="navbar navbar-default">
              <div className="container">
                {homeButton}
                {mgtButton}
                {logoutButton}
              </div>
          </nav>
      );
    }
});
