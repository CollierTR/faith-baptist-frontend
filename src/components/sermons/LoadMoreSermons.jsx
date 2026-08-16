import { useState, useEffect } from "react";
import { format, parseISO } from "date-fns";
import { authors } from "../../data/authors.js";

export default function LoadMoreSermons({ mode, value }) {
  console.log(mode, value);
  const [sermons, setSermons] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  // TODO: I need to finish this by pluging in the value dynamically
  let filter;
  switch (mode) {
    case "speaker":
      filter = "&categories=3";
      break;
    case "series":
      filter = `&categories=${value}`;
      break;
    case "search":
      filter = `&search=${value}`;
      break;
    default:
      filter = "&categories=3";
  }

  const fetchSermons = async () => {
    setLoading(true);
    const res = await fetch(
      `https://media.faithbaptistkirksville.org/wp-json/wp/v2/media?per_page=50&page=${page}&orderby=date&order=desc${filter}`,
    );
    const newSermons = await res.json();
    const filteredSermons =
      mode === "speaker"
        ? newSermons.filter(
            (sermon) => String(sermon.author) === String(value),
          )
        : newSermons;
    setSermons((prevSermons) => [...prevSermons, ...filteredSermons]);
    console.log(newSermons);
    setLoading(false);
  };

  function listAuthor(author) {
    if (author === 2) {
      return "Brandon Rhea";
    } else if (author === 3) {
      return "Jon";
    }
  }

  useEffect(() => {
    fetchSermons();
  }, [page]);

  return (
    <div
      className={"flex flex-col place-items-center gap-10 text-primary-dark"}
    >
      <div className={"flex flex-col gap-10 w-full"}>
        {sermons.map((sermon) => {
          return (
            <div
              key={sermon.id}
              className={
                "w-full bg-white rounded-md p-10 flex flex-col gap-10 justify-between leading-normal shadow-lg drop-shodow-lg"
              }
            >
              <div className="flex flex-col gap-1">
                <p className=" font-extralight">
                  {format(parseISO(sermon.date), "MMM d, yyyy")}
                </p>
                <p
                  className="text-3xl font-semibold"
                  dangerouslySetInnerHTML={{ __html: sermon.title.rendered }}
                ></p>
              </div>

              <p>By: {authors[sermon.author]}</p>

              <div className="flex gap-0.5 text-white">
                <a href={sermon.source_url} target="_blank">
                  <div className="bg-primary px-4 py-2 rounded-l-md">
                    Listen
                  </div>
                </a>
                <a
                  href={`/api/download?src=${encodeURIComponent(sermon.source_url)}`}
                >
                  <div className="bg-primary px-4 py-2 rounded-r-md">
                    Download
                  </div>
                </a>
              </div>
            </div>
          );
        })}
      </div>
      <button
        onClick={() => setPage(page + 1)}
        disabled={loading}
        className={
          "my-10 px-6 py-3 bg-primary hover:bg-amber-700 text-white font-bold rounded-lg shadow-md transition duration-300 ease-in-out disabled:opacity-50"
        }
      >
        {loading ? "Loading..." : "Load More"}
      </button>
    </div>
  );
}
