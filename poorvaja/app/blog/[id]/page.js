import { getAllPostIds, getPostData } from '../../../lib/posts'
import { remark } from 'remark'
import html from 'remark-html'
import remarkGfm from 'remark-gfm'

export async function generateStaticParams() {
  const paths = getAllPostIds()
  return paths
}

export default async function Post({ params }) {
  const postData = await getPostData(params.id)
  
  // Convert markdown to HTML with GitHub Flavored Markdown
  const processedContent = await remark()
    .use(remarkGfm)
    .use(html)
    .process(postData.content)
  const contentHtml = processedContent.toString()

  return (
    <div className="min-h-screen pt-32 pb-12 px-4">
      <article className="max-w-3xl mx-auto">
        <header className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-light tracking-wider mb-4 text-white">
            {postData.title}
          </h1>
          <div className="text-gray-400 tracking-wide">
            {new Date(postData.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </div>
          {postData.tags && (
            <div className="flex gap-2 justify-center mt-4">
              {postData.tags.map(tag => (
                <span 
                  key={tag} 
                  className="px-3 py-1 bg-gray-800 text-gray-200 text-sm rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </header>
        <div 
          className="prose prose-invert prose-lg max-w-none
            prose-headings:font-light prose-headings:tracking-wide
            prose-p:text-gray-300 prose-p:leading-relaxed
            prose-strong:text-white prose-strong:font-medium
            prose-a:text-blue-400 hover:prose-a:text-blue-300
            prose-blockquote:border-gray-700 prose-blockquote:text-gray-400
            prose-code:text-gray-300 prose-pre:bg-gray-900
            prose-ol:text-gray-300 prose-ul:text-gray-300
            prose-hr:border-gray-800"
          dangerouslySetInnerHTML={{ __html: contentHtml }} 
        />
      </article>
    </div>
  )
}




