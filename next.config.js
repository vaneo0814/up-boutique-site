module.exports = {
    images: {
      domains: ['media.graphcms.com'],
    },
    target: 'serverless', //this is to enable serverless function and deployment with Netlify
    options: {
      dist: 'out_publish',
    },
  };