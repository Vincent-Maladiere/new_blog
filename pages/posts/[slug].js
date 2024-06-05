import { promises as fs } from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

const PostPage = ({ source, frontMatter }) => {
  return (
    <div>
      <h1>{frontMatter.title}</h1>
      <MDXRemote {...source} />
    </div>
  );
};

export async function getStaticProps({ params }) {
  const postFilePath = path.join(process.cwd(), 'posts', `${params.slug}.mdx`);
  const source = await fs.readFile(postFilePath);
  const { content, data } = matter(source);

  const mdxSource = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [remarkMath],
      rehypePlugins: [rehypeKatex],
    },
  });

  return {
    props: {
      source: mdxSource,
      frontMatter: data,
    },
  };
}

export async function getStaticPaths() {
  const postsDirectory = path.join(process.cwd(), 'posts');
  const filenames = await fs.readdir(postsDirectory);

  const paths = filenames.map((filename) => {
    const slug = filename.replace(/\.mdx?$/, '');
    return { params: { slug } };
  });

  return {
    paths,
    fallback: false,
  };
}

export default PostPage;
