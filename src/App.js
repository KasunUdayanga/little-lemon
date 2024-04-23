import './App.css';
import Navigation from './components/Navigation';
import Footers from './components/Footers';
import Header from './components/Header';
import Homepage from './components/Homepage';
import Specials from './components/Specials';
import CustomersSay from './components/CustomersSay';
import Chicago from './components/Chicago';
import BookingPage from './components/BookingPage'


function App() {
  return (
    <>
      <Header />
      <Navigation />
      <Homepage />
      <Specials />
      <Chicago />
      <Footers />
    </>
  );
}

export default App;
