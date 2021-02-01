// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'TravelBlog',
  plugins: [
    {
      use: '@gridsome/source-graphql',
      options: {
        url: 'https://api-ca-central-1.graphcms.com/v2/ckkl9qkz8aeoi01uvd7t98inc/master',
        fieldName: 'gcms',
        typeName: 'gcmsTypes',
      },
    },
  ]
}
