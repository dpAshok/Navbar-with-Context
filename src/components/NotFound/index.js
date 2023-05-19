// Write your code here
import './index.css'
import Navbar from '../Navbar'

const NotFound = () => (
  <>
    <Navbar />
    <div className="navbar-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
        alt="not found"
        className="notfound-image"
      />

      <div>
        <h1>Lost Your Way?</h1>
        <p>We cannot seem to find the page</p>
      </div>
    </div>
  </>
)

export default NotFound
