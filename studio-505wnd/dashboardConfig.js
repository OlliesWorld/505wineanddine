export default {
    widgets: [
      {
         name: 'cats',
         layout: {
            width: 'small',
            height: 'small'
          }
      },
      {
        name: 'project-info',
        layout: {
            width: 'small',
            height: 'small'
          }
      },
      {
        name: 'project-users',
        layout: {
            width: 'medium',
            height: 'small'
          }
      },
      {
        name: 'document-list',
        options: {
          title: 'Last edited events',
          order: '_updatedAt desc',
          types: ['event'],
          layout: {
            width: 'full',
            height: 'full'
          }
        }
      
      },
      {
        name: 'document-list',
        options: {
          title: 'Last edited posts',
          order: '_updatedAt desc',
          types: ['post']
        },
        layout: {
          width: 'auto',
          height: 'large'
        }
      }
    ]
  }