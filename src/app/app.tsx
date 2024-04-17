// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import styles from './app.module.css';
import MiniDrawer from './components/mini-drawer';

import NxWelcome from './nx-welcome';
import { routes } from './components/route';
import CarsList from './views/list';
import List from './views/list';
import NxtHome from './components/nx-home';
import Details from './views/details';

const appTitle="Altius Hub"

export function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path={'/'} element={<MiniDrawer title={appTitle} children={<NxtHome title='Home' />} />} />
          {routes.map((route, index) => 
            <Route key={route.id} path={`/${route.name}`} element={<MiniDrawer title={appTitle} children={<List title={route.label} name={route.name} />} />} />
          )}
          <Route path={'/cars/:id'} element ={<MiniDrawer title={appTitle} children={<Details />} />} />
          <Route path={'/trucks/:id'} element={<MiniDrawer title={appTitle} children={<Details />} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
