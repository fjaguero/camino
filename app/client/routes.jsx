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

function renderMainLayoutWith(component) {
    ReactLayout.render(Camino.MainLayout, {
        header: <Camino.MainHeader />,
        content: component,
        footer: <Camino.MainFooter />
    });
}
