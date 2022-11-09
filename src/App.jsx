import { AuthContext } from './context/AuthContext'
import { AppRouter } from './routers/AppRouter'

const {Provider} = AuthContext

function App() {
  const user = {
    isLogged: false,
    username: 'zeus'
  }

  const tasks = [
    {
      id: 1,
      title: 'Completar prácticos',
      description: 'Completar el práctico de useContext'
    }
  ];

  const objectProvider = {user, tasks}

  return (
  <Provider value ={objectProvider}>
    <AppRouter/>
  </Provider>
  )
}

export default App
