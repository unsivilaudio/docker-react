import logo from './logo.svg';
import './App.css';

function App() {
    return (
        <div className='App'>
            <header className='App-header'>
                <img src={logo} className='App-logo' alt='logo' />
                <div>Hello world 2!</div>
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className='App-link'
                    href='https://reactjs.org'
                    target='_blank'
                    rel='noopener noreferrer'>
                    Just changed for awesomeness!
                </a>
            </header>
        </div>
    );
}

export default App;
