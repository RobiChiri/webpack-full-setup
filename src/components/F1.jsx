import { useState } from "react";

const quali = {
  Verstappen: 1,
  Leclerc: 2,
  Sainz: 3,
};

const race = {
  Leclerc: 1,
  Verstappen: 2,
  Sainz: 3,
};

console.log(quali);
console.log(race);

const F1 = () => {
  const [session, setSession] = useState({});
  return (
    <div>
      <h3>current session</h3>
      <button onClick={() => setSession(quali)}>Quali</button>
      <button onClick={() => setSession(race)}>Race</button>
      <ul>
        {Object.keys(session).map((driver) => (
          <li key={driver}>
            {driver}:{session[driver]}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default F1;
