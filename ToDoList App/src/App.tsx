// App.tsx
import Header from "./components/Header";
import ToDoHomePage from "./components/ToDoHomePage";
import { ListProvider } from "../src/context/List";



function App() {
  return (
    <ListProvider>
      <Header />
      <ToDoHomePage />
    </ListProvider>
  );
}

export default App;
