import './App.css';
import Hooks from './components/Hooks';
import ConditionalRendering from './components/ConditionalRendering';
import ObjectState from './components/ObjectState';
import ObjectStateAgain from './components/ObjectStateAgain';
import StateProps from './components/StateProps';
import PrimitiveVsNon from './components/PrimitiveVsNon'
import InitializingState from './components/InitializingState';
function App() {
  return (
    <div className="App">
      <InitializingState />
    </div>
  );
}

export default App;
