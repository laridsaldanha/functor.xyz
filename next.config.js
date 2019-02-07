const withMDX = require('@zeit/next-mdx')({
    extension: /\.mdx?$/,
    options: {
      mdPlugins: []
    }
  })
  
  module.exports = withMDX({
    pageExtensions: ['js', 'jsx', 'md', 'mdx']
  })