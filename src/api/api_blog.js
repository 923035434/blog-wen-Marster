import axios from 'axios'

export function getBlogs () {
  const url = '/api/blog'
  return axios({
    method: 'get',
    url: url
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}

export function addBlog (param) {
  const url = '/api/blog'
  return axios({
    method: 'post',
    url: url,
    headers: {
      'Content-Type': 'application/json'
    },
    data: param
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}

export function editBlog (id, param) {
  const url = '/api/blog' + '?id=' + id
  return axios({
    method: 'put',
    url: url,
    headers: {
      'Content-Type': 'application/json'
    },
    data: param
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}

export function deleteBlog (id) {
  const url = '/api/blog'
  return axios({
    url: url + '?id=' + id,
    method: 'delete'
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}

export function getType () {
  const url = '/api/BlogType'
  return axios({
    url: url,
    method: 'get'
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}

export function editType (id, param) {
  const url = '/api/BlogType'
  return axios({
    url: url + '?id=' + id,
    method: 'put',
    headers: {
      'Content-Type': 'application/json'
    },
    data: param
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}

export function addType (param) {
  const url = '/api/BlogType'
  return axios({
    url: url,
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    data: param
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}

export function deleteType (id) {
  const url = '/api/BlogType'
  return axios({
    url: url + '?id=' + id,
    method: 'delete'
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}
