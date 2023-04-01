import Main from "./components/Main";
import { ImageProvider } from "./context/ImageProvider";
import Navigation from "./Navigation";

const App = function () {
  return (
    <ImageProvider>
      <Navigation>
        <Main></Main>
      </Navigation>
    </ImageProvider>
  );
};
export default App;
