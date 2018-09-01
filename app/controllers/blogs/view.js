import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    deleteBlog(item) {
      this.store.findRecord('blog', item.id, { backgroundReload: false })
      .then((blog) => {
        blog.destroyRecord().then(() => {
          this.transitionToRoute('blogs');
        });
        // blog.deleteRecord();
        // blog.get('isDeleted');
        // blog.save()
        // .then(() => {
        //   this.transitionToRoute('blogs');
        // })
        // .catch((err) => { console.log(err) });
      })
      .catch(err => {
        console.log(err);
      });
    },
  }
});
