import Blog from './applications';

export default Blog.extend({
  namespace: 'api/blogs',
  pathForType() {
    return 'new';
  }
})
