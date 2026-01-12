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
    <div>
      <div className={"flex flex-col gap-4"}>
        {sermons.map(sermon => (
          <div key={sermon.id} className={'bg-amber-800'}>
            <a href={`/sermons/${sermon.slug}/`} dangerouslySetInnerHTML={{ __html: sermon.title.rendered }}></a>
            <p>{sermon.date}</p>
          </div>
        ))}
      </div>
      <button onClick={() => setPage(page + 1)} disabled={loading} className={'bg-amber-400'}>
        {loading ? 'Loading...' : 'Load More'}
      </button>
    </div>
  );
}
