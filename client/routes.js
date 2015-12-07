if (Meteor.isClient) {
  // Pages
  Router.route('/', {
    template: 'IntroPage'
  });
  Router.route('/about', {
    template: 'AboutPage'
  });
  Router.route('/start', {
    template: 'StartPage'
  });
  Router.route('/edit', {
    template: 'EditPage'
  });
  Router.route('/saving', {
    template: 'SavePage'
  });
  Router.route('/navigation', {
    template: 'NavPage'
  });

  Router.route('/commands', {
    template: 'CommandPage'
  });
  Router.route('/conclusion', {
    template: 'ConcPage'
  });

  // 404 pages
  Router.route('/(.*)', {
    template: 'NotFoundPage'
  });
}
