import { createClient } from 'next-sanity'


export const client = createClient({
  projectId:"h6w3b8gp",
  dataset:"production",
  apiVersion:"2021-08-31",
  token:"sk6oIOaHBFWz5dE6YgWzVABwxtI5d2WmBYlY5u0V1Jj0QidgbJCbrWnebMaTS8I3mc6f2oWMvTJxDtayj0c3TTChQXmsdanlBwDEl9tRf926qVdxVykp9q4QLMjbt2XqSyjOIPiPQT7ltFZDKOdc4evEsQ6eB03TUhSgtnXiVSU9mz6rebgq",
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
})
