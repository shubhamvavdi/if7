import { useMemo, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowRight, Search } from 'lucide-react';
import PageMeta from '../components/PageMeta';
import SectionHeading from '../components/SectionHeading';
import { articles } from '../data/articles';

function NewsBlog() {
  const { slug } = useParams();
  const [query, setQuery] = useState('');

  const filteredArticles = useMemo(() => {
    if (!query.trim()) return articles;
    return articles.filter((article) =>
      article.title.toLowerCase().includes(query.toLowerCase()) ||
        article.excerpt.toLowerCase().includes(query.toLowerCase()) ||
        article.category.toLowerCase().includes(query.toLowerCase()),
    );
  }, [query]);

  const featuredArticle = articles[0];
  const articleDetail = articles.find((article) => article.slug === slug);

  if (slug && articleDetail) {
    return (
      <>
        <PageMeta title={articleDetail.title} description={articleDetail.excerpt} />
        <main className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-[#E5E5E5] bg-white p-4 shadow-sm sm:p-6">
            <img src={articleDetail.image} alt={articleDetail.title} className="h-56 w-full rounded-2xl object-cover sm:h-96" />
            <div className="mt-6 flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.12em] text-[#14D17A]">
              <span>{articleDetail.category}</span>
              <span className="text-[#888888]">{articleDetail.date}</span>
            </div>
            <h1 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-[#222222] sm:text-4xl">{articleDetail.title}</h1>
            <p className="mt-4 text-lg leading-8 text-[#666666]">{articleDetail.excerpt}</p>
            <div className="mt-8 space-y-5 text-base leading-8 text-[#666666]">
              {articleDetail.content.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <div className="mt-8">
              <Link to="/news-blog" className="inline-flex items-center gap-2 text-sm font-semibold text-[#14D17A] hover:text-[#5AF0AE]">
                <ArrowRight size={16} className="rotate-180" /> Back to News & Blog
              </Link>
            </div>
          </div>
        </main>
      </>
    );
  }

  return (
    <>
      <PageMeta title="News & Blog" description="Read the latest FT7 Game news, guides, and update articles from the FT7 information website." />
      <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="News & Blog"
          title="Latest FT7 Game News & Blog"
          description="Explore helpful guides, update summaries, and informational resources for FT7 Game, FT7 App, and FT7 APK."
        />

        <div className="mt-8 rounded-3xl border border-[#E5E5E5] bg-white p-4 shadow-sm sm:p-5">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <div className="relative w-full max-w-md">
              <Search className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#888888]" size={18} />
              <input
                type="search"
                aria-label="Search blog articles"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search articles..."
                className="w-full rounded-full border border-[#1C2A2F] bg-[#101B1E] py-3 pl-11 pr-4 text-base text-[#EAF5F1] outline-none transition focus:border-[#14D17A]"
              />
            </div>
          </div>
        </div>

        <div className="mt-10 overflow-hidden rounded-3xl border border-[#E5E5E5] bg-white shadow-sm">
          <div className="grid gap-0 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="relative h-full min-h-[320px]">
              <img src={featuredArticle.image} alt={featuredArticle.title} className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/75 via-[#111111]/15 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5 text-white sm:p-8">
                <span className="inline-flex rounded-full bg-[#14D17A] px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#07110E]">
                  {featuredArticle.category}
                </span>
                <h2 className="mt-4 text-2xl font-bold leading-tight tracking-tight sm:text-3xl">{featuredArticle.title}</h2>
                <p className="mt-3 max-w-xl text-base leading-7 text-white/80">{featuredArticle.excerpt}</p>
                <div className="mt-5 flex items-center gap-4">
                  <span className="text-sm text-white/70">{featuredArticle.date}</span>
                  <Link to={`/news-blog/${featuredArticle.slug}`} className="inline-flex items-center gap-2 text-sm font-semibold text-[#14D17A] hover:text-[#5AF0AE]">
                    Read More <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </div>

            <aside className="bg-[#F7F7F7] p-6">
              <h3 className="text-xl font-bold text-[#222222]">Article categories</h3>
              <ul className="mt-5 space-y-3 text-base text-[#666666]">
                {['Guide', 'Updates', 'Safety', 'Overview', 'News'].map((category) => (
                  <li key={category} className="flex items-center justify-between rounded-xl border border-[#E5E5E5] bg-white px-4 py-3">
                    <span>{category}</span>
                    <span className="font-semibold text-[#14D17A]">{articles.filter((article) => article.category === category).length}</span>
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {filteredArticles.map((article) => (
            <div key={article.id} className="rounded-2xl border border-[#E5E5E5] bg-white p-4 shadow-sm">
              <img src={article.image} alt={article.title} className="h-52 w-full rounded-2xl object-cover" />
              <div className="mt-5 flex items-center justify-between text-xs font-semibold uppercase tracking-[0.12em] text-[#14D17A]">
                <span>{article.category}</span>
                <span className="text-[#888888]">{article.date}</span>
              </div>
              <h3 className="mt-4 text-xl font-bold leading-tight text-[#222222] sm:text-2xl">{article.title}</h3>
              <p className="mt-3 text-base leading-7 text-[#666666]">{article.excerpt}</p>
              <Link to={`/news-blog/${article.slug}`} className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#14D17A] hover:text-[#5AF0AE]">
                Read More <ArrowRight size={16} />
              </Link>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}

export default NewsBlog;
