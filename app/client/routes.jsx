FlowRouter.route("/", {
    name: 'Home',
    subscriptions(params) {

    },
    action(params) {
        renderMainLayoutWith(<Camino.Home />);
    }
});

FlowRouter.route("/login", {
    name: "Login",
    subscriptions(params) {

    },
    action(params) {
        renderMainLayoutWith(<Camino.UserLogin />);
    }
});

FlowRouter.triggers.enter([checkIsLoggedIn]);

function renderMainLayoutWith(component) {
    ReactLayout.render(Camino.MainLayout, {
        header: <Camino.MainHeader />,
        content: component,
        footer: <Camino.MainFooter />
    });
}

function checkIsLoggedIn() {
  if (!Meteor.userId()) {
    FlowRouter.go('Login');
  }
}
