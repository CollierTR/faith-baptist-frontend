import { useState, useEffect } from 'react';

export default function LoadMoreSermons() {
  const [sermons, setSermons] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const fetchSermons = async () => {
    setLoading(true);
    const res = await fetch(`https://media.faithbaptistkirksville.org/wp-json/wp/v2/media?per_page=50&page=${page}&orderby=date&order=desc`);
    const newSermons = await res.json();
    setSermons(prevSermons => [...prevSermons, ...newSermons]);
    setLoading(false);
  };

  useEffect(() => {
    fetchSermons();
  }, [page]);

  return (
    <div className={"flex flex-col place-items-center gap-20 mx-auto"}>
      <div className={"grid grid-cols-3 gap-4"}>
        {sermons.map(sermon => (
          <div key={sermon.id} className={'bg-white dark:bg-gray-800 shadow-md rounded-lg mb-4 flex flex-col justify-between leading-normal'}>
            <img src="/imgs/bible.png" alt="" className={"overflow-hidden"}/>
            <div className="p-2">
              <div className="mb-2">
                <a href={`/sermons/${sermon.slug}/`} className="text-gray-900 dark:text-white font-bold text-xl mb-2 hover:text-amber-700" dangerouslySetInnerHTML={{ __html: sermon.title.rendered }}></a>
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-base">{new Date(sermon.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
            </div>
          </div>
        ))}
      </div>
      <button onClick={() => setPage(page + 1)} disabled={loading} className={'mt-4 px-6 py-3 bg-amber-600 hover:bg-amber-700 text-white font-bold rounded-lg shadow-md transition duration-300 ease-in-out disabled:opacity-50'}>
        {loading ? 'Loading...' : 'Load More'}
      </button>
    </div>
  );
}
