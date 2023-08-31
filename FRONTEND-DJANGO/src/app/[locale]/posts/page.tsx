import Link from 'next/link'
import { useLocale } from 'next-intl'

import { useTranslations } from 'next-intl'
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
const getPosts = async (): Promise<Post[]> => {
  const locale = useLocale()
  console.log('locale', locale)
  const data = await fetch(`http://0.0.0.0:8000/api/${locale}/posts/`, {
    cache: 'no-cache',
  })
  const posts = await data.json()

  return posts
}

export default async function PostPage() {
  const posts = await getPosts()
  console.log(posts)
  // const t = useTranslations('AboutPage')
  return (
    <div className="px-10 py-10">
      {/* <h1>{t('title')}</h1> */}
      <h1 className="mb-10 text-2xl">Başlık</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/posts/${post.slug}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
