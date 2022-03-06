exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const result = await graphql(`
      {
        allSanityPost {
            edges {
              node {
                title
                slug {
                  current
                }
                mainImage {
                  alt
                  asset {
                    gatsbyImageData(layout: FIXED, placeholder: BLURRED, width: 400)
                    description
                    url
                  }
                }
                 
                id
                publishedAt
                _rawBody
              }
            }
          }
      }
    `)
    if (result.errors) {
      throw result.errors
    }
    const post = result.data.allSanityPost.edges || []
    post.forEach((edge, index) => {
      const path = `/post/${edge.node.slug.current}`
      createPage({
        path,
        component: require.resolve("./src/templates/post.js"),
        context: { slug: edge.node.slug.current },
      })
    })
  }