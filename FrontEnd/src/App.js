import RoutesApp from './routes/routes';
import { ReactQueryDevtools } from 'react-query/devtools';


export default function App() {
  return (
    <>
      <RoutesApp />
      <ReactQueryDevtools />
    </>
  );
}