import { createRoot } from 'react-dom/client';
import { App } from './App';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { HomePage } from './modules/HomePage';
import { PhonesPage } from './modules/PhonesPage';

createRoot(document.getElementById('root') as HTMLElement).render(
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<HomePage />} />
        <Route path="phones" element={<PhonesPage />} />
      </Route>
    </Routes>
  </Router>,
);
