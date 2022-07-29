module.exports = ({ env }) => ({
  'preview-button': {
    enabled: true,
    config: {
      contentTypes: [
        {
          uid: 'api::article.article',
          targetField: 'slug',
          published: {
            basePath: 'articles',
          },
          draft: {
            query: {
              postTypePath: 'articles',
            },
          },
        },
        {
            uid: 'api::page.page',
            targetField: 'slug',
            published: {
                basePath: 'page'
            },
            draft: {
                query: {
                    postTypePath: 'page',
                }
            }
        }
      ],
    },
  },
  ckeditor: true
});