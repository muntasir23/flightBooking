import "./App.css";
import BookingList from "./components/BookingList";
import Form from "./components/Form";
import Nav from "./components/Nav";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <div className="bg-[url(../src/assets/bgtwo.jpg)] bg-cover bg-no-repeat">
        <Nav />
        <section className="h-screen relative">
          <Form />
          <BookingList />
        </section>
      </div>
    </Provider>
  );
}

export default App;
