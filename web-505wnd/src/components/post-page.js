
import React from "react";
import PortableText from "./portableText";

// import { buildImageObj } from "../lib/helpers";
// import { imageUrlFor } from "../lib/image-url";


function PostPage(props) {
  const {
   _rawBody,
    authors,
   
    title,
    mainImage,
    publishedAt,
  } = props;
  console.log(props.mainImage)
  return (
    <article className="container" >
        {mainImage && mainImage.asset && (
        <div >
          <img
            src={mainImage}
            alt={mainImage.alt}
          />
        </div>
      )}
      <section>
        <div >
          <div >
            <div className="title" >{title}</div>
            <span>

            {_rawBody && <PortableText blocks={_rawBody} />}
            </span>
          </div>
          <aside >
            published: {publishedAt}
            {authors }
            {/* {categories && (
              <div >
                <h3 >Categories</h3>
                <ul>
                  {categories.map((category) => (
                    <li key={category._id}>{category.title}</li>
                  ))}
                </ul>
              </div>
                  )} */}
          </aside>
        </div>
        </section> 
    </article>
  );
}

export default PostPage;
