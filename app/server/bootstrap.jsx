// Disable accounts creation
Accounts.config({
  forbidClientAccountCreation: true
});

Meteor.startup(() => {

    if (Meteor.users.find().count() === 0) {
        Accounts.createUser({
            email: "dev@usecamino.com",
            password: "sherpa"
        });
    }

});
