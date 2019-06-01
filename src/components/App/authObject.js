export default (function() {
  window.gapi.load("client:auth2", () => {
    window.gapi.client
      .init({
        clientId:
          "930973140367-ieggpaaj8to15jgors4jt43vqvmd9e18.apps.googleusercontent.com",
        scope: "email"
      })
      .then(() => {
        console.log(window.gapi.auth2.getAuthInstance());
        return window.gapi.auth2.getAuthInstance();
      });
  });
})();
