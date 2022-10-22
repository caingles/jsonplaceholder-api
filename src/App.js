import Users from './components/Users';
import './App.css';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

// Creo mi cliente
const queryClient = new QueryClient()

function App() {
  return (
    // Proporciono el cliente a mi aplicación
    <QueryClientProvider client={queryClient}>
      <div className="container mx-auto mt-5 text-center">
        <h1 className=''>Conexion a la API <strong>Json Placeholder</strong> </h1>
        <Users></Users>
      </div>
    </QueryClientProvider>
  );
}

export default App;
