import axios from 'axios';
import { createRoot } from 'react-dom/client';

import { App } from '@/App';
import { worker } from '@/mocks/worker';

const root = createRoot(document.getElementById('root') as HTMLDivElement);

if (process.env.NODE_ENV === 'development') {
  worker.start();
}

if (process.env.NODE_ENV === 'production') {
  axios.defaults.baseURL = process.env.BASE_URL;
}

root.render(<App />);
