import Link from 'next/link'
import { getSortedPostsData } from '../../lib/posts'

export default function BlogPage() {
  const allPostsData = getSortedPostsData()
  const allTags = ['All', ...new Set(allPostsData.flatMap(post => post.tags || []))]

  return (
    <div className="min-h-screen pt-32 pb-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-24">
          <h1 className="text-[12vw] font-light tracking-[0.2em] text-gray-500 mb-8">
            BLOG
          </h1>
        </div>
        
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-3/4">
            {allPostsData.length > 0 ? (
              allPostsData.map(({ id, date, title }) => {
                const postDate = new Date(date)
                const monthYear = postDate.toLocaleString('default', { month: 'long', year: 'numeric' })
                
                return (
                  <Link key={id} href={`/blog/${id}`}>
                    <div className="mb-8 pb-8 border-b border-gray-700 flex group">
                      <div className="w-1/4 pr-4 text-gray-400 text-sm">
                        {monthYear}
                      </div>
                      <div className="w-3/4">
                        <h2 className="text-xl font-light tracking-[0.1em] text-white group-hover:text-gray-300 transition-colors">
                          {title}
                        </h2>
                      </div>
                    </div>
                  </Link>
                )
              })
            ) : (
              <p className="text-gray-400">No blog posts found.</p>
            )}
          </div>
          <div className="md:w-1/4">
            <h3 className="text-xl font-light tracking-[0.1em] mb-4 text-white">Tags</h3>
            <div className="flex flex-wrap gap-2">
              {allTags.map(tag => (
                <button
                  key={tag}
                  className={`px-2 py-1 rounded text-sm bg-gray-800 text-gray-200 hover:bg-gray-700 transition-colors`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}






