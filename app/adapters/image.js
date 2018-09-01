import Blog from './applications';

export default Blog.extend({
  namespace: 'api',
  pathForType() {
    return 'images';
  }
})
