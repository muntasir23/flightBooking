import "./App.css";
import BookingList from "./components/BookingList";
import Form from "./components/Form";
import Nav from "./components/Nav";

import bgImage from '../src/assets/bgtwo.jpg'

function App() {
  return (
    <div className="bg-[url(../src/assets/bgtwo.jpg)] bg-cover bg-no-repeat">
      <Nav />
      <section className="h-screen">
      <Form />
      <BookingList />
      </section>
    </div>
  );
}

export default App;
