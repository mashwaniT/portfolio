import { type SchemaTypeDefinition } from 'sanity'

import blockContent from './schemas/blockContent'
import category from './schemas/category'
import author from './schemas/author'
import pageInfo from './schemas/pageInfo'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [pageInfo, author, category, blockContent],
}
