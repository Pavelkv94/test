import './App.css';
import { Test1 } from './components/test1';
import { Test2 } from './components/test2';

function App() {
  console.log('test2')
    return (
        <div className="App">
            <div className='wrapper'>
                <Test1 />
                <Test2 />
            </div>
        </div>
    );
}

export default App;
