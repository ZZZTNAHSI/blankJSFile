import Player from './components/Player.jsx';
import TimerChallenge from './components/TimerChallenge.jsx';

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimerChallenge title="Piss Easy" targetTime={1} />
        <TimerChallenge title="Eh" targetTime={5} />
        <TimerChallenge title="Alright" targetTime={10} />
        <TimerChallenge title="Sigma" targetTime={15} />
      </div>
    </>
  );
}

export default App; 
