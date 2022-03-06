 
// import { differenceInDays, formatDistance, format } from "date-fns";

import React from "react";


function PostPage(props) {
  const {
    _rawBody,
    authors,
    
    title,
    mainImage,
    publishedAt,
  } = props;
  console.log(props)
  return (
    <article >
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
            <h1 >{title}</h1>
            {/* {_rawBody} */}
          </div>
          <aside >
            {publishedAt }
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
