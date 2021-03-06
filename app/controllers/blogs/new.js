import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    displayImg() {
      let file = (Ember.$('#upload')[0]).files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          $('#previewImage').attr('src', e.target.result);
        }
        reader.readAsDataURL(file);
      };
    },
    addBlog() {
      let title = this.get('title');
      let content = this.get('content');
      let formData = new FormData();
      let file = (Ember.$('#upload')[0]).files[0];

      if (file) {
        formData.append('image', file);
        formData.append('title', title);
        formData.append('author', 'Kath L');
        formData.append('content', content);
      };

      let uploadToServer = Ember.$.ajax({
        url: 'http://localhost:3000/api/blogs',
        data: formData,
        cache: false,
        type: 'POST',
        processData: false,
        contentType: false,
        dataType: 'json'
      });

      uploadToServer.then((data) => {
        console.log(data);
      }, (err) => console.log(err));

    },
  }
});
