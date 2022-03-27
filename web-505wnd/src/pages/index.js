import * as React from "react"
import "../scss/styles.scss"
import { graphql } from "gatsby"
import { GatsbyImage} from 'gatsby-plugin-image'
import { Link } from "gatsby"
import Header from "../components/Header"
import About from "../components/About"

const IndexPage = ({data}) => {
  console.log(data)
  
  return (
    <>
    
      <Header />
    <main className="container">
      <title>Home Page</title>
  
      <br/>
  
      <div className="section-title">Events</div>
      <div className="grid-events ">
      
       {data && 
          data.event.edges.map(({node: event}) => (
            <div className="event" key={event.id}>
              <div className="event__title">{event.title}</div>
              <div className="event__location">Location: {event.location}</div>
              <div className="event__image">
                <GatsbyImage image={event.mainImage.asset.gatsbyImageData} alt={event.mainImage.asset.alt}/>
              </div>
            </div>

       ))}
        
      </div>
      
      <About />
    
      <div className="section-title">Read all about it: Posts</div>
      <div className="grid-posts" id="blog">
      {data && 
         data.post.edges.map(({node: post}) => (
           <Link key={post.id} to={`/post/${post.slug.current}`}>
           <div className="post" >
             <div className="post__image">
               <GatsbyImage image={post.mainImage.asset.gatsbyImageData} alt={post.mainImage.asset.alt}/>
             </div>
             <div className="post__title">{post.title}</div>
             
           </div>

       </Link>
      ))}
     </div>
    </main>
    </>
  )
}

export default IndexPage

export const query = graphql`
query Events {
  event: allSanityEvent {
    edges {
      node {
        title
        slug {
          current
        }
        mainImage {
          alt
          asset {
            gatsbyImageData(layout: FIXED, placeholder: BLURRED, width: 250, height: 200)
          }
        }
        location
        id
        eventAt(fromNow: true)
        _rawBody
      }
    }
  }
  post: allSanityPost {
    edges {
      node {
        title
        excerpt {
          _key
          children {
            text
          }
        }
      
        slug {
          current
        }
        id
        authors
        _rawBody
        mainImage {
          asset {
            gatsbyImageData(layout: FIXED, placeholder: BLURRED, width: 300 height: 350)
          }
        }
      }
    }
  
  }
}
`