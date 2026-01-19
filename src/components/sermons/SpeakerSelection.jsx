import { useState, useEffect } from 'react';
import speakers from "../../data/speakers.js";
console.log(speakers)
  

export default function SpeakerSelection() {


  return (
    <div className={"flex flex-col place-items-center gap-20 text-primary-dark"}>
      <div className={"flex flex-col gap-4 w-full"}>

        {speakers.map(speaker => (
          <a key={speaker.id} href={`/sermons?speaker=${speaker.id}`}>
            <div className={'w-full bg-white rounded-md p-6 flex flex-col gap-10 justify-between leading-normal shadow-lg drop-shodow-lg'}>
              <p className="text-xl">{speaker.name}</p>
            </div>
          </a>
        ))}

      </div>
    </div>
  );
}
