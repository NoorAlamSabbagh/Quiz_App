import '../styles/App.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'

/** import components **/
import Main from './Main'
import Quiz from './Quiz';
import Result from './Result';


/** React Routes **/
const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>
  },
  {
    path: '/quiz',
    element: <Quiz></Quiz>
  },
  {
    path: '/result',
    element: <Result></Result>
  },
  {
    path: '*',
    element: <div>Root Element</div>
  },
  
])
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
