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
    console.log(sermons)
    setLoading(false);
  };

  useEffect(() => {
    fetchSermons();
  }, [page]);

  return (
    <div className={"flex flex-col place-items-center gap-20 text-primary-dark"}>
      <div className={"flex flex-col gap-10 w-full"}>

        {sermons.map(sermon => (
          <div key={sermon.id} className={'w-full bg-white rounded-md p-10 flex flex-col gap-10 justify-between leading-normal shadow-lg drop-shodow-lg'}>
            <div className="flex flex-col gap-1">
              <p className=" font-extralight">Jan 11, 2026</p>
              <a href={`/sermons/${sermon.slug}/`} className="text-3xl font-semibold" dangerouslySetInnerHTML={{ __html: sermon.title.rendered }}></a>
            </div>

            <p>By: Brandon Rhea</p>

            <div className="flex gap-0.5 text-white"> 
              <a href={sermon.source_url} target="_blank"><div className="bg-primary px-4 py-2 rounded-l-md">Listen</div></a>
              <a href={`/api/download?src=${encodeURIComponent(sermon.source_url)}`}><div className="bg-primary px-4 py-2 rounded-r-md">Download</div></a>
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
