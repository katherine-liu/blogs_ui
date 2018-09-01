import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    updateBlog(item) {
      let formData = new FormData();
      let file = (Ember.$('#upload')[0]).files[0];

      if (file) {
        formData.append('image', file);
        formData.append('title', item.title);
        formData.append('author', 'Kath L');
        formData.append('content', item.content);
      };

      let uploadToServer = Ember.$.ajax({
        url: 'http://localhost:3000/api/blogs/' + item.id,
        data: formData,
        cache: false,
        type: 'PUT',
        processData: false,
        contentType: false,
        dataType: 'json'
      });

      uploadToServer.then((data) => {
        console.log(data);
      }, (err) => console.log(err));

    },
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

  }
});
