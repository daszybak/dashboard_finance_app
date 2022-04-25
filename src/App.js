import {Routes, Route} from 'react-router';
import {Dashboard} from './routes/index';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />}>
        {/* <Route index={true} element={} /> */}
      </Route>
    </Routes>
  );
}

export default App;
