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
      let logoutButton,
      homeButton,
      mgtButton,
      timelineButton,
      mitButton,
      goalsButton,
      optionsButton

      let { currentUser } = this.data

      // FIXME: Refactor to use a single method for the classNames
      let homeBtnClass = classNames({ 'active': FlowRouter.current().route.name === 'Home' })
      let mgBtnClass = classNames({ 'active': FlowRouter.current().route.name === 'MorningGratitude' })
      let timeBtnClass = classNames({ 'active': FlowRouter.current().route.name === 'Timeline' })
      let optionsBtnClass = classNames({ 'active': FlowRouter.current().route.name === 'Config' })

      // Navbar buttons
      if (currentUser) {
        homeButton = (
          <li title="Home" className={homeBtnClass}>
            <a onClick={this.navigateTo.bind(this, '/')}>
              <span className="glyphicon glyphicon-home" aria-hidden="true"></span>
            </a>
          </li>
        )

        mgtButton = (
          <li title="Morning Gratitude" className={mgBtnClass}>
            <a onClick={this.navigateTo.bind(this, '/morning-gratitude')}>
              <span className="glyphicon glyphicon-list-alt" aria-hidden="true"></span>
            </a>
          </li>
        )

        timelineButton = (
          <li title="Timeline" className={timeBtnClass}>
            <a onClick={this.navigateTo.bind(this, '/timeline')}>
              <span className="glyphicon glyphicon-time" aria-hidden="true"></span>
            </a>
          </li>
        )

        optionsButton = (
          <li title="Config" className={optionsBtnClass}>
            <a onClick={this.navigateTo.bind(this, '/config')}>
              <span className="glyphicon glyphicon-cog" aria-hidden="true"></span>
            </a>
          </li>
        )

        logoutButton = (
          <li>
            <a title="Logout" onClick={this.handleLogout}>
              <span className="glyphicon glyphicon-log-out" aria-hidden="true"></span>
            </a>
          </li>
        )
      }

      return (
        <nav>
          <ul className="nav nav-pills nav-justified">
            {homeButton}
            {mgtButton}
            {timelineButton}
            {optionsButton}
            {logoutButton}
          </ul>
        </nav>
      );
    }
});
