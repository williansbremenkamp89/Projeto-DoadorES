import { BrowserRouter, Route } from 'react-router-dom';

import { Home } from "./pages/Home";
import { Registro } from "./pages/Registro";
import { Profile } from "./pages/Profile";

function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Home} />
      <Route path="/user/register" component={Registro} />
      <Route path="/user/profile" component={Profile} />
    </BrowserRouter>    
  );
}

export default App;
