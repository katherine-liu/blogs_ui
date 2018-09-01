import Route from '@ember/routing/route';

export default Route.extend({
  model(params) {
    return this.store.findRecord('blog', params.id)
    .then((res) => {
      return res;
    });
  },
});
