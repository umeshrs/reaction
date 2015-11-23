Meteor.methods({
  addUser: function (options) {
    check(options, {
      username: String,
      password: {
        digest: String,
        algorithm: "sha-256"
      },
      email: String
    });
    Accounts.createUser({
      username: options.username,
      password: options.password,
      email: options.email
    });
  }
});
