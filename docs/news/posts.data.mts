import { createContentLoader } from 'vitepress'
import { BlogPost, getBlogSidebarItems } from '../.vitepress/utils/blogPosts'

declare const data: BlogPost[]
export { data }

export default createContentLoader('news/*.md', {
  render: true,
  excerpt: '<!-- more -->',
  transform(raw): BlogPost[] {
    let posts = getBlogSidebarItems();
    return posts
      .map((post) => {
        const rawPost = raw.find(r => r.url === post.url);
        let excerpt = rawPost?.excerpt || rawPost?.frontmatter?.excerpt;

        // Remove the h1 tag from the excerpt
        excerpt = excerpt?.replace(/<h1[^>]*>.*?<\/h1>\n?/s, '');

        return {
          ...post,
          excerpt,
        }
      })
  },
})
