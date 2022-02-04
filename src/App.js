import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { QueryClientProvider, QueryClient } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import './App.css';
import SuperHeroesPage from './components/SuperHeroes.page';
import RQSuperHeroesPage from './components/RQSuperHeroes.page';
import HomePage from './components/Home.page';
import RQSuperHeroPage from './components/RQSuperHeroPage';
import ParallelQueriesPage from './components/ParallelQueriesPage';
import DynamicParallelQueryPage from './components/DynamicParallelQueryPage';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/super-heroes'>Traditional Super Heroes</Link>
              </li>
              <li>
                <Link to='/rq-super-heroes'>RQ Super Heroes</Link>
              </li>
              <li>
                <Link to='/rq-parallel'>RQ Parallel</Link>
              </li>
              <li>
                <Link to='/rq-dynamic-parallel'>RQ Dynamic Parallel</Link>
              </li>
            </ul>
          </nav>
          <Routes >
            <Route path='/super-heroes' element={<SuperHeroesPage />} />
            <Route path='/rq-super-heroes/:heroId' element={<RQSuperHeroPage />} />
            <Route path='/rq-super-heroes' element={<RQSuperHeroesPage />} />
            <Route path='/rq-parallel' element={<ParallelQueriesPage />} />
            <Route path='/rq-dynamic-parallel' element={<DynamicParallelQueryPage heroIds={[1, 3]} />} />


            {/* <Route path='/rq-dynamic-parallel'> */}
            {/* <DynamicParallelPage heroIds={[1, 3]} /> */}
            {/* </Route> */}
            {/* <Route path='/rq-dependent'> */}
            {/* <DependentQueriesPage email='vishwas@example.com' /> */}
            {/* </Route> */}
            {/* <Route path='/rq-paginated'> */}
            {/* <PaginatedQueriesPage /> */}
            {/* </Route> */}
            {/* <Route path='/rq-infinite'> */}
            {/* <InfiniteQueriesPage /> */}
            {/* </Route> */}
            <Route path='/' element={<HomePage />} />
          </Routes>
        </div>
      </Router>
      <ReactQueryDevtools initialsIsOpen={false} position='bottom-right' />
    </QueryClientProvider>
  );
}

export default App;
