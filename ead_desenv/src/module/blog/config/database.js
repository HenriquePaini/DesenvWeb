const db = require('../../../../config/databases');

module.exports = {
  development: {
    ...db.blog
  },
  homolog: {
    ...db.blog_homolog
  },
  production: {
    ...db.blog
  }
};
