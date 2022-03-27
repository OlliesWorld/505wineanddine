// /deskStructure.js
import S from '@sanity/desk-tool/structure-builder'


export default () =>
S.list()
.title('Content')
.items([
  S.listItem()
    .title('Settings')
    .child(
      S.document()
        .schemaType('siteSettings')
        .documentId('siteSettings')
    ),
      // We also need to remove the new singletons from the main list
      ...S.documentTypeListItems().filter(listItem => !['siteSettings', 'colors', 'navigation'].includes(listItem.getId()))
    ])