import { type SchemaTypeDefinition } from 'sanity'
import foods from './foods'
import chefs from './chefs'
import cartItem from './cartItem'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [foods,chefs, cartItem]
}
