import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    addBlog: () => {
      let title = this.get('title');
      let content = this.get('content');

      let newBlog = this.store.createRecord('blog', {
        title: title,
        content: content
      });
    }
  }
});
