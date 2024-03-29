// import {Link} from 'react-router-dom'
// import ThemeContext from '../../context/ThemeContext'

// import './index.css'

// const Navbar = () => (
//   <ThemeContext.Consumer>
//     {value => {
//       const {isDarkTheme, toggleTheme} = value
//       return (
//         <div>
//           {isDarkTheme ? (
//             <nav className="nav-container dark">
//               <img
//                 src="https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png"
//                 alt=""
//                 className="website-logo"
//               />
//               <ul className="nav-items">
//                 <Link to="/" className="link">
//                   <li>Home</li>
//                 </Link>
//                 <Link to="/about" className="link">
//                   <li>About</li>
//                 </Link>
//               </ul>
//               <button type="button" className="theme-btn" onClick={toggleTheme}>
//                 <img
//                   src="https://assets.ccbp.in/frontend/react-js/light-theme-img.png"
//                   alt=""
//                   className="website-logo"
//                 />
//               </button>
//             </nav>
//           ) : (
//             <nav className="nav-container">
//               <img
//                 src="https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png"
//                 alt=""
//                 className="logo-image"
//               />
//               <ul className="nav-items">
//                 <Link to="/" className="link">
//                   <li>Home</li>
//                 </Link>
//                 <Link to="/about" className="link">
//                   <li>About</li>
//                 </Link>
//               </ul>
//               <button type="button" className="theme-btn" onClick={toggleTheme}>
//                 <img
//                   src="https://assets.ccbp.in/frontend/react-js/dark-theme-img.png"
//                   alt=""
//                   className="theme-image"
//                 />
//               </button>
//             </nav>
//           )}
//         </div>
//       )
//     }}
//   </ThemeContext.Consumer>
// )

// export default Navbar

import {Link} from 'react-router-dom'
import './index.css'

import ThemeContext from '../../context/ThemeContext'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value

      return (
        <div>
          {isDarkTheme ? (
            <div className="dark">
              <img
                className="logo"
                alt="website logo"
                src="https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png"
              />

              <ul className="ul">
                <Link to="/">
                  <li className="li1">Home</li>
                </Link>
                <Link to="/about">
                  <li className="li1">About</li>
                </Link>
              </ul>
              <div>
                <button
                  data-testid="theme"
                  className="btn"
                  onClick={toggleTheme}
                  type="button"
                >
                  <img
                    className="logo"
                    alt="theme"
                    src="https://assets.ccbp.in/frontend/react-js/light-theme-img.png"
                  />
                </button>
              </div>
            </div>
          ) : (
            <div className="light">
              <img
                className="logo"
                alt="website logo"
                src="https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png"
              />

              <ul className="ul">
                <Link to="/">
                  <li className="li">Home</li>
                </Link>
                <Link to="/about">
                  <li className="li">About</li>
                </Link>
              </ul>
              <div>
                <button
                  data-testid="theme"
                  className="btn"
                  onClick={toggleTheme}
                  type="button"
                >
                  <img
                    className="logo"
                    alt="theme"
                    src="https://assets.ccbp.in/frontend/react-js/dark-theme-img.png"
                  />
                </button>
              </div>
            </div>
          )}
        </div>
      )
    }}
  </ThemeContext.Consumer>
)
export default Navbar
