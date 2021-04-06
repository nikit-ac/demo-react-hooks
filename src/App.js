import './App.css';
import Photos from './Components/Photos';
import { ModalProvider } from './Context/ModalContext';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

    return (
        <div className="App">
          <header className="App-header">
            <h1>Test App</h1>
          </header>
            <ModalProvider>
              <Photos />
            </ModalProvider>
          <footer>
              © 2020 - 2021
          </footer>
        </div>
    );
}

export default App;
