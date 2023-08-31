// 'use client'
import { useLocale } from 'next-intl'
interface Category {
  title: string
  slug: string
}

interface Tag {
  title: string
  slug: string
}

interface Post {
  id: number
  categories: Category[]
  tags: Tag[]
  title: string
  slug: string
  pageinfo: string
  content: string
  image: string | null
  date_posted: string
  lang: string
}

const getPost = async (slug: string): Promise<Post> => {
  const locale = useLocale()
  const data = await fetch(`http://0.0.0.0:8000/api/${locale}/post/${slug}/`, {
    cache: 'no-cache',
  })
  const post = await data.json()

  return post
}

export default async function PostPage({
  params: { postId },
}: {
  params: {
    postId: string
  }
}) {
  const post = await getPost(postId)
  return (
    <div className="px-10 py-10">
      <h1 className="mb-10 text-2xl">{post.title}</h1>
      <p>Post Slug: {postId}</p>
      <p>{post.content}</p>
      {post.image && (
        <picture>
          <img src={post.image} width={200} />
        </picture>
      )}
    </div>
  )
}
