import * as types from './mutation-types'

export const showBlog = function ({commit}, {blog}) {
  console.log(blog)
  commit(types.SET_BLOG_SHOW_ITEM, blog)
  commit(types.SET_BLOG_SHOW_STATE, true)
}
