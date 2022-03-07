import * as React from 'react'
import { graphql } from "gatsby";
import PostPage from "../components/post-page";

export const query = graphql`
query PostTemplateQuery {
    post: sanityPost {
      id
      publishedAt(fromNow: true)
      categories {
        _id
        title
      }
      mainImage {
        asset {
            gatsbyImageData
        }
        alt
      }
      title
      slug {
        current
      }
     body {
        children {
        text
      }
     } 
      _rawBody(resolveReferences: { maxDepth: 5 })
      
    }
  }
`

const PostTemplate = (props) => {
    const {data} = props
    const post = data && data.post

    return (
        <>
        {post && <PostPage {...post} />}
        </>
    )
}

export default PostTemplate