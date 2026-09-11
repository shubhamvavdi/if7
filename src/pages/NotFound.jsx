import { Link } from 'react-router-dom';
import PageMeta from '../components/PageMeta';

function NotFound() {
  return (
    <>
      <PageMeta title="Page Not Found" description="The page you requested could not be found." />
      <main className="mx-auto max-w-3xl px-4 py-24 text-center sm:px-6 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#16A34A]">404 Error</p>
        <h1 className="mt-6 text-5xl font-bold tracking-tight text-[#222222]">Page not found</h1>
        <p className="mt-5 text-lg leading-8 text-[#666666]">
          The page you are looking for does not exist or may have moved. Please return to the homepage to continue exploring FT7 Game information.
        </p>
        <div className="mt-8 flex justify-center">
          <Link to="/" className="inline-flex items-center justify-center rounded-full bg-[#16A34A] px-6 py-3 text-sm font-semibold text-white hover:bg-[#15803D]">
            Back to Home
          </Link>
        </div>
      </main>
    </>
  );
}

export default NotFound;
