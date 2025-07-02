import AppRoutes from "./routes/AppRoutes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AppMovieService } from "./config/appServiceConn";
import { useEffect } from "react";
//import { results } from "./fuzzy";


function App() {
  //console.log(results)
  async function fetchMovies() {
  try {
    const response = await AppMovieService.get('/3/movie/popular?Genres=Action');
    console.log('Matched Movies:', response.data.results);
  } catch (error) {
    console.error('Error fetching data:', error.message);
  }
}

useEffect(() => {
  fetchMovies()
}, [])

  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
      <AppRoutes />
    </QueryClientProvider>
  );
}

export default App;
