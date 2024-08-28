import Player from './components/Player.jsx';
import TimerChallenge from './components/TimerChallenge.jsx';

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <ul>
          <li>Challenge 1: Create a new component named <code>Scoreboard</code> that displays a list of players and their scores.</li>
          <li>Challenge 2: Create a new component named <code>Score</code> that displays the score of a player.</li>
          <li>Challenge 3: Create a new component named <code>Controls</code> that contains a button to increment the score of a player.</li>
          <li>Challenge 4: Create a new component named <code>App</code> that contains the <code>Player</code>, <code>Scoreboard</code>, <code>Score</code>, and <code>Controls</code> components.</li>
        </ul>
        <TimerChallenge title="Easy" targetTime={1} />
        <TimerChallenge title="Medium" targetTime={5} />
        <TimerChallenge title="Almost hard" targetTime={10} />
        <TimerChallenge title="Hard" targetTime={15} />
      </div>
    </>
  );
}

export default App;
