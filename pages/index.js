import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import formatDate from '@/lib/utils/formatDate'

import NewsletterForm from '@/components/NewsletterForm'

const MAX_DISPLAY = 5

const skills = [
  { name: 'Python'},
  { name: 'Numpy'},
  { name: 'Pandas'},
  { name: 'Keras'},
  { name: 'TensorFlow'},
  { name: 'Scikit-Learn'},
  { name: 'Matplotlib'},
  { name: 'Seaborn'},
  { name: 'Word2Vec'},
  { name: 'Java'},
  { name: 'HTML/CSS'},
  { name: 'SQL'},
  { name: 'Javascript'},
  { name: 'Node'},
  { name: 'Nextjs'},
  { name: 'TailWindUI'},
  { name: 'AWS'},
  { name: 'Azure'},
  { name: 'Google Colab'},
  { name: 'Github'},
  { name: 'Vercel'},
  { name: 'Supabase'},
  { name: 'WireShark'},
  { name: 'Virtual Box'},
  { name: 'Tabeau'},
  { name: 'Android Studio'},
  { name: 'LaTeX'},
  { name: 'MS Office'},
  { name: 'Kali Linux'},
  { name: 'Ubuntu'},
  { name: 'MacOS'},
]

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog')

  return { props: { posts } }
}

export default function Home({ posts }) {
  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Hi There 👋
          </h1>
          <p className="text-xl leading-7 text-gray-800 dark:text-gray-200">
           I'm Kyra, PhD student by day, developer by night.
          </p>

          <p className="text-md leading-7 text-gray-700 dark:text-gray-300">
            My research is at the intersection of machine learning and AI with cyber security. 
            Currently, I am working on <span className='font-bold'>detecting deepfake videos</span>. Other interests include language models, deanonymisation, network security.
          </p>

           <p className="text-md text-gray-700 dark:text-gray-300">
            I am the CTO at <a href='https://nftsec.org' rel="noreferrer" target='_blank' className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400">NFTSec</a>, a project focusd on provided much needed security education within the NFT space.
           </p>

        </div>
          {/* TODO: github /other stats here?*/ }
          
        <div className="divide-y">
          <div className="space-y-2 pt-6 pb-8 md:space-y-5">
            <h1 className='text-xl font-bold leading-7 text-gray-900 dark:text-gray-100'>
            👩‍🎓 Education
            </h1>
            <ul className='list-disc list-inside text-gray-700 dark:text-gray-200'>
              <li><span className="italic">2020-Current:</span> <span className='font-bold'>PhD Information Security</span> @ Royal Holloway, University of London </li>
              <li><span className="italic">2016-2020:</span> <span className='font-bold'>Computer Science</span> @ University of Cambridge </li>
            </ul>
          </div>
        </div>

        <div className="divide-y">
          <div className="space-y-2 pt-6 pb-8 md:space-y-5">
            <h1 className='text-xl font-bold leading-7 text-gray-900 dark:text-gray-100'>
            💼 Experience
            </h1>
            <ul className='list-disc list-inside text-gray-700 dark:text-gray-200'>
              <li><span className="italic">April 2022-July 2022:</span> <span className='font-bold'>Machine Learning Engineer</span> Intern @ Wayve</li>

            </ul>
          </div>
        </div>

        <div className="divide-y">
          <div className="space-y-2 pt-6 pb-8 md:space-y-5">
            <h1 className='text-xl font-bold leading-7 text-gray-900 dark:text-gray-100'>
            📚 Teaching 
            </h1>
            <ul className='list-disc list-inside text-gray-700 dark:text-gray-200'>

              I assist lectures for:
              <li>Computer Security (Operating Systems) <span className='italic text-gray-600 dark:text-gray-300'>- IY5512</span></li>
              And mark coursework for:
              <li>Computer and Network Security <span className='italic text-gray-600 dark:text-gray-300'>- IY2840</span></li>
              <li>Computer Security (Operating Systems) <span className='italic text-gray-600 dark:text-gray-300'>- IY5512</span></li>

            </ul>
          </div>
        </div>

        <div className="divide-y">
          <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className='text-xl font-bold leading-7 text-gray-900 dark:text-gray-100'>
          🐍 Skills
            </h1>
            <dl className="mt-5 grid grid-cols-2 gap-5 md:grid-cols-4 xl:grid-cols-6">
              {skills.map((item) => (
                <div key={item.name} className="px-1 py-1 shadow rounded-lg text-center overflow-hidden sm:p-4">
                  <dt className="text-sm font-medium text-primary-600 dark:text-primary-500 truncate">{item.name}</dt>
                </div>
              ))}
            </dl>
          </div>
        </div>
        </div>
        {/*
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          {!posts.length && 'No posts found.'}
          {posts.slice(0, MAX_DISPLAY).map((frontMatter) => {
            const { slug, date, title, summary, tags } = frontMatter
            return (
              <li key={slug} className="py-12">
                <article>
                  <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                    <dl>
                      <dt className="sr-only">Published on</dt>
                      <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                        <time dateTime={date}>{formatDate(date)}</time>
                      </dd>
                    </dl>
                    <div className="space-y-5 xl:col-span-3">
                      <div className="space-y-6">
                        <div>
                          <h2 className="text-2xl font-bold leading-8 tracking-tight">
                            <Link
                              href={`/blog/${slug}`}
                              className="text-gray-900 dark:text-gray-100"
                            >
                              {title}
                            </Link>
                          </h2>
                          <div className="flex flex-wrap">
                            {tags.map((tag) => (
                              <Tag key={tag} text={tag} />
                            ))}
                          </div>
                        </div>
                        <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                          {summary}
                        </div>
                      </div>
                      <div className="text-base font-medium leading-6">
                        <Link
                          href={`/blog/${slug}`}
                          className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                          aria-label={`Read "${title}"`}
                        >
                          Read more &rarr;
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              </li>
            )
          })}
        </ul>
                */}

      {/* 
      {posts.length > MAX_DISPLAY && (
        <div className="flex justify-end text-base font-medium leading-6">
          <Link
            href="/blog"
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label="all posts"
          >
            All Posts &rarr;
          </Link>
        </div>
      )}
      {siteMetadata.newsletter.provider !== '' && (
        <div className="flex items-center justify-center pt-4">
          <NewsletterForm />
        </div>
      )}*/}
    </>
  )
}
