import * as React from "react"
import "../scss/styles.scss"
import { graphql } from "gatsby"
import { GatsbyImage} from 'gatsby-plugin-image'

const IndexPage = ({data}) => {
  console.log(data)
  
  return (
    <main className="container">
      <title>Home Page</title>
      <div>Welcome to 505 Wine and Dine</div>
      <br/>
      <img
        alt="Gatsby G Logo"
        src="data:image/svg+xml,%3Csvg width='24' height='24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12 2a10 10 0 110 20 10 10 0 010-20zm0 2c-3.73 0-6.86 2.55-7.75 6L14 19.75c3.45-.89 6-4.02 6-7.75h-5.25v1.5h3.45a6.37 6.37 0 01-3.89 4.44L6.06 9.69C7 7.31 9.3 5.63 12 5.63c2.13 0 4 1.04 5.18 2.65l1.23-1.06A7.959 7.959 0 0012 4zm-8 8a8 8 0 008 8c.04 0 .09 0-8-8z' fill='%23639'/%3E%3C/svg%3E"
      />
      <div className="grid-events ">
      
      
       {data && 
          data.event.edges.map(({node: event}) => (
            <div className="event" key={event.id}>
              <div className="event__title">{event.title}</div>
              <div className="event__location">Location: {event.location}</div>
              <div className="event__image">
                <GatsbyImage image={event.mainImage.asset.gatsbyImageData} alt={event.mainImage.alt}/>
              </div>
            </div>

       ))}
        
      </div>
      
      <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
    
      <div className="grid-posts">
      
      
      {data && 
         data.post.edges.map(({node: post}) => (
           <div className="post" key={post.id}>
             <div className="post__image">
               <GatsbyImage image={post.mainImage.asset.gatsbyImageData} alt={post.mainImage.alt}/>
             </div>
             <div className="post__title">{post.title}</div>
             
           </div>

      ))}
       
     </div>
    </main>
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
        slug {
          current
        }
        id
        authors
        _rawBody
        mainImage {
          asset {
            gatsbyImageData(layout: FIXED, placeholder: BLURRED, width: 200)
          }
        }
      }
    }
  
  }
}
`