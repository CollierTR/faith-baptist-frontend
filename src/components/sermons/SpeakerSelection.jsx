import { useState, useEffect } from 'react';
import { authors } from "../../data/authors.js";


export default function SpeakerSelection() {


  return (
    <div className={"flex flex-col place-items-center gap-20 text-primary-dark"}>
      <div className={"flex flex-col gap-4 w-full"}>

        {Object.entries(authors).map(([id, name]) => (
          <a key={id} href={`/sermons?speaker=${id}`}>
            <div className={'w-full bg-white rounded-md p-6 flex flex-col gap-10 justify-between leading-normal shadow-lg drop-shodow-lg'}>
              <p className="text-xl">{name}</p>
            </div>
          </a>
        ))}

      </div>
    </div>
  );
}
