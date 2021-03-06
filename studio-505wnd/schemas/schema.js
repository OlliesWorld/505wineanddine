// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator"

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type"

// document schemas
import event from './documents/event'
import post from './documents/post'
import category from "./documents/category"
import hero from './documents/hero'
// Object types
import siteSettings from './siteSettings'

import mainImage from "./objects/mainImage"


// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "event",
  // Then proceed to concatenate our our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // The following are document types which will appear
    // in the studio.
   siteSettings,
    hero,
    event,
    post,
    category,
   
    mainImage,
    

    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
  ]),
});
