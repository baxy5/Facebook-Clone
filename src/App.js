import Feed from "./components/Feed";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="app">
      <Header />

      <div className="app-container flex">
        <Sidebar />
        <Feed />
      </div>
    </div>
  );
}

export default App;
