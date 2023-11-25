import { Link, useParams } from "react-router-dom"
import PostAuthor from "../PostAuthor/PostAuthor"
import TimeAgo from "../../common/TimeAgo/TimeAgo"
import ReactionButtons from "../../common/ReactionButtons/ReactionButtons"
import { useGetPostsQuery } from "../../../app/service/posts"

const SinglePostPage = () => {
  const { postId } = useParams()

  const { data: posts, isLoading } = useGetPostsQuery()

  const post = posts?.find(post => post.id === Number(postId));

  if (isLoading) return <p>Loading...</p>

  if (!post) {
      return (
          <section>
              <h2>Post not found!</h2>
          </section>
      )
  }

  return (
      <article>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
          <p className="postCredit">
              <Link to={`/post/edit/${post.id}`}>Edit Post</Link>
              <PostAuthor userId={post.userId} />
              <TimeAgo timestamp={post.date} />
          </p>
          <ReactionButtons post={post} />
      </article>
  )
}

export default SinglePostPage