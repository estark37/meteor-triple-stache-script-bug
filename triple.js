if (Meteor.isClient) {
  Template.hello.greeting = function () {
    return Session.get("test");
  };
  Meteor.startup(function () {
    Session.set("test", "<script>alert(1)</script>");
  });
}
