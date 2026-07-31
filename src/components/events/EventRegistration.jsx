import { useState } from "react";

export default function EventRegistration() {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col">
      <a
        href="https://forms.gle/Brj4ZSrU3iPPH15D8"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white bg-primary text-lg px-8 py-3 rounded-lg hover:bg-primary-dark transition-colors duration-200 font-semibold shadow-md w-fit lg:hidden"
      >
        Register
      </a>

      <div className="hidden lg:block">
        <button
          onClick={() => setOpen(!open)}
          className="text-white bg-primary text-lg px-8 cursor-pointer py-3 rounded-lg hover:bg-primary-dark transition-colors duration-200 font-semibold shadow-md w-fit"
        >
          {open ? "Hide Registration" : "Register"}
        </button>

        <div
          className={`transition-all duration-500 ease-in-out overflow-hidden ${
            open ? "max-h-[800px] opacity-100 mt-6" : "max-h-0 opacity-0 mt-0"
          }`}
        >
          <div className="border border-gray-200 rounded-xl p-4 bg-gray-50">
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLScH3o5cnTgokKJj74vtxWCTCNRfZYS3gaO3iSqbGDw8U4nC6g/viewform?embedded=true"
              width="640"
              height="622"
              frameBorder="0"
              marginHeight="0"
              marginWidth="0"
              className="w-full rounded-lg"
            >
              Loading…
            </iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
