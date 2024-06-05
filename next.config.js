const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: async () => {
    const [remarkMath, rehypeKatex] = await Promise.all([
      import('remark-math'),
      import('rehype-katex')
    ]);

    return {
      remarkPlugins: [remarkMath.default],
      rehypePlugins: [rehypeKatex.default],
    };
  },
});
 
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure `pageExtensions` to include MDX files
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  // Optionally, add any other Next.js config below
}
 
module.exports = withMDX(nextConfig)