import { useState, useEffect } from 'react';

export default function CategorySelection({value}) {
  const [categories, setCategories] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  // TODO: I need to finish this by pluging in the value dynamically
  let selector;
  switch (value) {
    case "speaker":
      selector = "";
      console.log(selector)
      break;
    case "series":
      selector = "categories";
      console.log(selector)
      break;
    default:
      selector = "";
      console.log(selector)
  }

  const fetchCategories = async () => {
    setLoading(true);
    const res = await fetch(`https://media.faithbaptistkirksville.org/wp-json/wp/v2/${selector}?per_page=100&parent=3`);
    const newCategories = await res.json();
    console.log(newCategories)
    setCategories(prevCategories => [...prevCategories, ...newCategories]);
    setLoading(false);
  };

  useEffect(() => {
    fetchCategories();
  }, [page]);

  return (
    <div className={"flex flex-col place-items-center gap-20 mb-20 text-primary-dark"}>
      <div className={"flex flex-col gap-4 w-full"}>

        {categories.map(item => (
          <a key={item.id} href={`/sermons?series=${item.id}`}>
            <div className={'w-full bg-white rounded-md p-6 flex flex-col gap-10 justify-between leading-normal shadow-lg drop-shodow-lg'}>
              <p className="text-xl">{item.name}</p>
            </div>
          </a>
        ))}


      </div>
    </div>
  );
}
