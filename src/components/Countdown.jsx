import { useEffect, useState } from "react";

const TIME_ZONE = "America/Chicago";

const SESSIONS = [
  { name: "Sunday School", day: 0, hour: 10, minute: 0, durationMinutes: 10 },
  { name: "Main Service", day: 0, hour: 11, minute: 0, durationMinutes: 10 },
  { name: "Prayer Meeting", day: 3, hour: 19, minute: 0, durationMinutes: 10 },
];

function sessionStart(now, session) {
  const daysUntil = (session.day - now.getDay() + 7) % 7;
  const start = new Date(now);
  start.setDate(now.getDate() + daysUntil);
  start.setHours(session.hour, session.minute, 0, 0);
  return start;
}

function getNextSession(now) {
  return SESSIONS.map((session) => {
    const start = sessionStart(now, session);
    const end = new Date(start.getTime() + session.durationMinutes * 60000);
    return { ...session, start, end };
  })
    .filter((session) => session.end > now)
    .sort((a, b) => a.start - b.start)[0];
}

function chicagoNow() {
  const parts = Object.fromEntries(
    new Intl.DateTimeFormat("en-US", {
      timeZone: TIME_ZONE,
      year: "numeric",
      month: "numeric",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      hour12: false,
    })
      .formatToParts(new Date())
      .map((part) => [part.type, part.value]),
  );
  let hour = Number(parts.hour);
  if (hour === 24) hour = 0;
  return new Date(
    parts.year,
    parts.month - 1,
    parts.day,
    hour,
    parts.minute,
    parts.second,
  );
}

function useNow() {
  const [now, setNow] = useState(() => chicagoNow());
  useEffect(() => {
    const timer = setInterval(() => setNow(chicagoNow()), 1000);
    return () => clearInterval(timer);
  }, []);
  return now;
}

function TimeUnit({ value, label }) {
  return (
    <div className="flex flex-col items-center">
      <div className="w-72 h-72 lg:w-80 lg:h-80 rounded-3xl bg-primary-light flex items-center justify-center shadow-2xl">
        <span className="font-serif text-[9rem] lg:text-[10rem] leading-none text-primary tabular-nums">
          {String(value).padStart(2, "0")}
        </span>
      </div>
      <p className="mt-6 text-2xl font-serif uppercase tracking-widest text-accent">
        {label}
      </p>
    </div>
  );
}

function SessionDisplay({ name, start, hours, minutes }) {
  return (
    <>
      <h1 className="text-5xl lg:text-7xl font-serif text-white text-center mb-4">
        Next Session
      </h1>
      <p className="text-3xl lg:text-4xl font-serif text-accent text-center mb-10">
        {name}
      </p>
      <div className="flex gap-8 lg:gap-14">
        {hours > 0 && <TimeUnit value={hours} label="Hours" />}
        <TimeUnit value={minutes} label="Minutes" />
      </div>
      <p className="mt-10 text-lg lg:text-xl text-primary-light text-center">
        {start.toLocaleDateString(undefined, {
          weekday: "long",
          month: "long",
          day: "numeric",
        })}{" "}
        at{" "}
        {start.toLocaleTimeString(undefined, {
          hour: "numeric",
          minute: "2-digit",
        })}
      </p>
    </>
  );
}

function NowMessage({ name }) {
  return (
    <div className="flex flex-col items-center text-center">
      <p className="text-3xl lg:text-5xl text-accent uppercase tracking-[0.3em]">
        Starting Now
      </p>
      <h1 className="mt-4 text-6xl lg:text-8xl font-serif text-white">
        {name}
      </h1>
      <p className="mt-6 text-2xl lg:text-3xl text-primary-light">
        Join us as we worship together!
      </p>
    </div>
  );
}

export default function Countdown() {
  const now = useNow();
  const session = getNextSession(now);

  const inSession = session && now >= session.start && now < session.end;

  let hours = 0;
  let minutes = 0;
  if (session && !inSession) {
    const remaining = session.start - now;
    hours = Math.floor(remaining / 3600000);
    minutes = Math.floor((remaining % 3600000) / 60000);
  }

  return (
    <div className="min-h-screen bg-primary flex flex-col items-center justify-center px-6 select-none">
      {inSession ? (
        <NowMessage name={session.name} />
      ) : (
        <SessionDisplay
          name={session.name}
          start={session.start}
          hours={hours}
          minutes={minutes}
        />
      )}
    </div>
  );
}