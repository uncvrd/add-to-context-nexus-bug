import { schema } from 'nexus'
import { extractLastItem } from '../../utils/cursor'

schema.addToContext((req) => {
  return {
      greeting: 'hello'
  }
})

schema.objectType({
  name: 'Album',
  definition(t) {
    t.int('id')
    t.field('testingField', {
      type: 'Boolean',
      resolve(_root, _args, ctx) {
        return true;
      }
    })
  },
})

