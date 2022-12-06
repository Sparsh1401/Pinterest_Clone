import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client'
import './App.css';
import {Navbar} from "./components/Navbar.js"
import Mainboard from "./components/Mainboard"
import Pinbuilder from './Pages/Pinbuilder';
import {BrowserRouter as Router,  Routes, Route} from 'react-router-dom'

function App() {
  const client = new ApolloClient({
    uri: "http://localhost:3001/graphql",
    cache: new InMemoryCache(),
  })
  return(
    <ApolloProvider client = {client}>
      <Router>
          <Navbar />
        <Routes>
          <Route path='/' element= {<Mainboard />}/>
          <Route path ="/pinBuilder" element ={<Pinbuilder />}/>
        </Routes>
      </Router>
    </ApolloProvider>
  )
}

export default App;
