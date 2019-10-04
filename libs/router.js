export class Router {
  constructor () {
    this.routes = {};
  }

  register (route, view, isDefault = false) {
    this.routes[route] = view;

    if (isDefault) {
      this.defaultRoute = view;
    }
  }

  onRoute(route){
    if (this.activeRoute) {
      this.activeRoute.toggle(false);
    }


    this.activeRoute = this.routes[route] || this.defaultRoute;
    this.routes[route].toggle(true);
  }

  start() {
    this.onRoute(window.location.hash.replace('#', ''));
    window.addEventListener('hashchange', event => {
      this.onRoute(window.location.hash.replace('#', ''));
    });
  }

}
