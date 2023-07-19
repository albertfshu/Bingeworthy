import Search from "./Search";
import MovieList from "./Movielist";
import TVList from "./TVList";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-800">
      <Search />
      <MovieList />
      <TVList />

    </div >
  );
};

export default Home;
