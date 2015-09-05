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
    render() {
        let logoutButton;
        let { currentUser } = this.data;

        if (currentUser) {
            logoutButton = (
              <li><a onClick={this.handleLogout}>Logout</a></li>
            );
        }

        return (
            <nav className="navbar navbar-default">
                <div className="container">
                  {logoutButton}
                </div>
            </nav>
        );
    }
});
