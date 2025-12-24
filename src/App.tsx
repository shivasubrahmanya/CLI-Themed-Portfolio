import { useState } from 'react';
import { BootSequence } from "./components/Terminal/BootSequence";
import { Terminal } from "./components/Terminal/Terminal";

const App = () => {
  const [booted, setBooted] = useState(false);

  return (
    <>
      {!booted ? (
        <BootSequence onComplete={() => setBooted(true)} />
      ) : (
        <Terminal />
      )}
    </>
  );
};

export default App;
