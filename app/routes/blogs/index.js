import Route from '@ember/routing/route';
import { set } from '@ember/object';

export default Route.extend({
  model() {
		return this.store.findAll('blog')
    .then((res) => {
      return res;
    });
	},

  setupController(controller, model) {
    set(controller, 'blogs', model);
  }
});
