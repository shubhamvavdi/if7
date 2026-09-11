import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

function ArticleCard({ article }) {
  return (
    <article className="group overflow-hidden rounded-3xl border border-[#1C2A2F] bg-[linear-gradient(180deg,#101B1E_0%,#0D1719_100%)] shadow-[0_12px_35px_rgba(0,0,0,0.24)] transition-all duration-300 hover:-translate-y-1 hover:border-[#14D17A]/35 hover:shadow-[0_18px_40px_rgba(20,209,122,0.12)]">
      <div className="relative h-52 overflow-hidden bg-[#0B1316]">
        <img src={article.image} alt={article.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#07110E] via-transparent to-transparent opacity-80" />
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between gap-4 text-xs font-medium uppercase tracking-[0.12em] text-[#14D17A]">
          <span>{article.category}</span>
          <span className="text-[#7E8D88]">{article.date}</span>
        </div>
        <h3 className="mt-4 text-2xl font-bold tracking-tight text-[#EAF5F1]">{article.title}</h3>
        <p className="mt-3 text-base leading-7 text-[#A7B8B2]">{article.excerpt}</p>
        <div className="mt-5 flex items-center justify-between">
          <Link to={`/news-blog/${article.slug}`} className="inline-flex items-center gap-2 text-sm font-semibold text-[#14D17A] transition-colors hover:text-[#5AF0AE]">
            Read More <ArrowRight size={16} />
          </Link>
          <span className="text-xs uppercase tracking-[0.12em] text-[#7E8D88]">{article.readTime}</span>
        </div>
      </div>
    </article>
  );
}

export default ArticleCard;
