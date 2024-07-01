import Link from '@/components/Link'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { formatDate } from 'pliny/utils/formatDate'
import NewsletterForm from 'pliny/ui/NewsletterForm'

const MAX_DISPLAY = 5

export default function Home({ posts }) {
  return (
    <>
      # Den helig gral blog for a lære avansert norsk (Klar for C1 Norskprøven!)

By [MIXA](https://diabolomika.com)

[BLOG HOME](#home) [old posts](#old posts)

[Search](#search)

# Siste ukentlige bloggen! (Latest weekly blog!)

> Om 10 måneder klar for C1 Norskprøven!

- - -

  Your browser does not support the video tag.

Anim Truffaut Etsy sustainable ethical et. High Life Brooklyn meh anim. Pinterest pug odio, cardigan quinoa bespoke wayfarers retro try-hard. Bitters kogi forage artisan. Cardigan hella irure try-hard salvia, laborum whatever Portland Godard consequat mollit. Vice pickled beard next level meh, dreamcatcher locavore YOLO lo-fi. Narwhal retro Etsy, occaecat proident Helvetica enim small batch leggings pariatur.

![norwegian books](https://res.cloudinary.com/dylobdqqa/image/upload/v1718650396/books.jpg)

How many times were you frustrated while looking out for a good collection of programming/algorithm /interview questions? What did you expect and what did you get? This portal has been created to provide well written, well thought and well explained solutions for selected questions. An IIT Roorkee alumnus and founder of GeeksforGeeks. He loves to solve programming problems in most efficient ways. Apart from GeeksforGeeks, he has worked with DE Shaw and Co. as a software developer and JIIT Noida as an assistant professor. It is a good platform to learn programming. It is an educational website. Prepare for the Recruitment drive of product based companies like Microsoft, Amazon, Adobe etc with a free online placement preparation course.

![Norwegian woman wearing  traditional clothing](https://res.cloudinary.com/dylobdqqa/image/upload/v1718649812/Bunad.jpg)

How many times were you frustrated while looking out for a good advice for zour norwegian ? What did you expect and what did you get? This portal has been created to provide well written, well thought and well explained solutions for selected questions. An IIT Roorkee alumnus and founder of GeeksforGeeks. He loves to solve programming problems in most efficient ways. Apart from his, he has worked with DE Shaw and Co. as a software developer and JIIT Noida as an assistant professor. It is a good platform to learn programming. It is an educational website. Prepare for the Recruitment drive of product based companies like Microsoft, Amazon, Adobe etc with a free online placement preparation course.

## Liker du hva du ser? Du kan du kjøpe en kopp Kaffe til meg der!

[BUY ME A COFFEE](# "Buy me a Coffee link Link")

## 

export const Foo = () => (
  <>
    <p>links</p>
    <ul>
      <li>
        <a href="https://www.boktips.no/skjonnlitteratur/romaner/topp-fem-boker-av-kjente-forfattere/ target=_blank">
          Bøker
        </a>
      </li>
      <li>
        <a
          href="https://www.learnnorwegiannaturally.com/norwegian-articles/"
          target='_blank"'
        >
          Articles
        </a>
      </li>
      <li>
        <a href="https://radio.nrk.no/kategori/podcast" target='_blank"'>
          Podcasts
        </a>
      </li>
      <li>
        <a href="https://www.bnorsk.no" target='_blank"'>
          Pedagogikk og didaktikk
        </a>
      </li>
      <li>
        <a
          href="https://no.linkedin.com/in/hijran-p-b508a214b"
          target='_blank"'
        >
          Recommended Teacher Hijran Penahi
        </a>
      </li>
      <li>
        <a
          href="https://www.fluentu.com/blog/learn/language-learning-chatboot/"
          target='_blank""'
        >
          Language Apps med Chat GPT
        </a>
      </li>
      <li>
        <a href="https://www.openai.com" target='_blank"'>
          AI/KI
        </a>
      </li>
      <li>
        <a href="https://www.lydbøker.com" target='_blank"'>
          Lydbøker
        </a>
      </li>
    </ul>
  </>
)

      {posts.length > MAX_DISPLAY && (
        <div className="flex justify-end text-base font-medium leading-6">
          <Link
            href="/blog"
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label="All posts"
          >
            All Posts &rarr;
          </Link>
        </div>
      )}
      {siteMetadata.newsletter?.provider && (
        <div className="flex items-center justify-center pt-4">
          <NewsletterForm />
        </div>
      )}
    </>
  )
}
