function Blog(props) {
  const content = props.posts.map(post => {
    return (
      <>
        <Post key={post.id} post={post} />
      </>
    )
  })
  return <div>{content}</div>
}

function Post(props) {
  const { id, title, content } = props.post
  return (
    <div>
      <li>{id}</li>
      <li>{title}</li>
      <li>{content}</li>
    </div>
  )
}

export default Blog
