import './App.css'
import UsercontextProvider from './context/Usercontextprovider'
import Login from './component/login'
import Profile from './component/profile'

function App() {
  return (
    <UsercontextProvider>
      <h1>Hello server</h1>
      <Login/>
      <Profile/>
    </UsercontextProvider>
  )
}

export default App
 
