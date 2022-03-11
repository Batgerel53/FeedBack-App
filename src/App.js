import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header.jsx'
import FeedBackList from './components/FeedBackList'
import FeedBackStats from './components/FeedBackStats'
import FeedBackForm from './components/FeedBackForm'
import AboutPage from './pages/AboutPage.jsx'
import AboutIconLink from './components/AboutIconLink'
import Post from './components/Post'
import { FeedBackProvider } from './context/FeedBackContext'

function App() {
  return (
    
    <FeedBackProvider>
      <Router>
        <Header />
        <div className='container'>
          <Routes>
            <Route
              exact
              path='/'
              element={
                <>
                  <FeedBackForm />
                  <FeedBackStats />
                  <FeedBackList />
                </>
              }
            ></Route>
            <Route path='/about' element={<AboutPage />} />
            <Route path='/post/*' element={<Post />} />
          </Routes>

          <AboutIconLink />
        </div>
      </Router>
    </FeedBackProvider>
  )
}
export default App
