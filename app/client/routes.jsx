FlowRouter.route("/", {
    name: "Home",
    subscriptions(params) {

    },
    action(params) {
      renderMainLayoutWith(<Camino.Home />);
    }
});

FlowRouter.route("/morning-gratitude", {
    name: "MorningGratitude",
    subscriptions(params) {

    },
    action(params) {
      renderMainLayoutWith(<Camino.MorningGratitude />);
    }
});

FlowRouter.route("/timeline", {
    name: "Timeline",
    subscriptions(params) {

    },
    action(params) {
      renderMainLayoutWith(<Camino.Timeline />);
    }
});

FlowRouter.route("/goals", {
    name: "Goals",
    subscriptions(params) {

    },
    action(params) {
      renderMainLayoutWith(<Camino.Goals />);
    }
});

FlowRouter.route("/config", {
    name: "Config",
    subscriptions(params) {

    },
    action(params) {
      renderMainLayoutWith(<Camino.Config />);
    }
});

FlowRouter.route("/login", {
    name: "Login",
    action(params) {
      renderMainLayoutWith(<Camino.UserLogin />);
    },
    triggersEnter: [function(context, redirect) {
      redirect('/');
    }]
});

FlowRouter.notFound = {
  action() {
    FlowRouter.go('/');
  }
};

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
    FlowRouter.go('Login')
  }
}
