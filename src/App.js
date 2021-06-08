import { BrowserRouter, Link, Route, Switch, useParams } from 'react-router-dom';
import ScrollToTop from "./ScrollToTop";
import { blogData } from "./blogData";

import Nav from "./Nav";


function Home() {
  return (
    <>
      <Nav />

      <main className="py-4 lg:grid lg:grid-cols-3 lg:gap-4 lg:place-content-center lg:p-8 xl:grid-cols-4 2xl:grid-cols-5">
        {Object.entries(blogData).map(([slug, {content, timestamp, title}]) => {
          return (
            <article key={slug} className="post-summary lg:p-1 lg:h-full">
              <div className="mt-4 mx-4 mb-2 lg:transition-colors lg:duration-200 lg:hover:text-white lg:hover:bg-black xs:mx-6 sm:mx-8 md:mx-16 lg:bg-white lg:m-0 lg:p-4">
                <Link to={`/${slug}`}>
                  <h2 className="font-semibold text-base truncate md:text-xl">{title}</h2>
                  <p className="text-sm truncate">{content[0]}</p>
                  <p className="font-light italic mt-1 text-right text-xs">posted {timestamp}</p>
                </Link>
              </div>
              <hr className="divider" />
            </article>
          )
        })}
      </main>
    </>
  )
}


function PostFull() {
  const { slug } = useParams();
  const post = blogData[slug];
  const { author, content, timestamp, title } = post;
  const renderParagraphs = content.map((paragraph, index) => <p key={index + 10} className="mb-4 text-sm tracking-wide last:mb-24 md:text-base lg:text-lg">{paragraph}</p>);

  if (!post) {
    return <h2>I guess you'll just have to read it to find out. ¯\_(ツ)_/¯</h2>
  }

  return (
    <>
      <Nav />

      <article className="m-4 xs:mx-16 xs:my-0 xs:py-4 sm:mx-20 md:mx-32 lg:mx-48 xl:mx-64 2xl:mx-auto 2xl:w-2/5">
        <header className="text-center">
          <h2 className="font-extrabold text-xl md:text-3xl lg:mx-auto lg:text-4xl lg:w-2/3">{title}</h2>
          <p className="text-sm md:text-lg lg:text-2xl">by {author}</p>
          <p className="font-light italic text-xs lg:text-sm">posted {timestamp}</p>
        </header>
        <div className="my-4 text-center md:my-8 md:text-lg lg:text-xl">📚 📚 📚 📚 📚</div>
        {renderParagraphs}
      </article>
    </>
  )
}


export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/:slug" component={PostFull} />
      </Switch>
    </BrowserRouter>
  );
}
