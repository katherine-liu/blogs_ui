import DS from 'ember-data';

export default DS.RESTSerializer.extend({
  primaryKey: '_id',
  normalizeResponse(store, primaryModelClass, payload, id, requestType) {
    payload = { blogs: payload.blogs };
    // return this._super(store, primaryModelClass, payload, id, requestType);
    return this._super(...arguments);
  },

  // normalizeSingleResponse() {
  //   payload.blogs.user = payload.blogs.userId;
  //   delete payload.blogs.userId;
  //
  //   return this._super(store, primaryModelClass, payload, id, requestType);
  // },
  //
  // normalizeArrayResponse() {
  //   payload.blogs.forEach((blog) => {
  //     post.user = post.userId;
  //     delete post.userId;
  //   });
  //
  //   return this._super(store, primaryModelClass, payload, id, requestType);
  // }
});
