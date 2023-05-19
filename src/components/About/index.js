// // Write your code here
// import Navbar from '../Navbar'
// import './index.css'
// import ThemeContext from '../../context/ThemeContext'

// const Home = () => (
//   <>
//     <Navbar />
//     <ThemeContext.Consumer>
//       {value => {
//         const {isDarkTheme} = value
//         return (
//           <div>
//             {isDarkTheme ? (
//               <div className="about-container dark">
//                 <img
//                   src="https://assets.ccbp.in/frontend/react-js/about-dark-img.png"
//                   alt=""
//                   className="home"
//                 />
//                 <h1 className="home">About</h1>
//               </div>
//             ) : (
//               <div className="about-container">
//                 <img
//                   src="https://assets.ccbp.in/frontend/react-js/about-light-img.png"
//                   alt=""
//                   className="theme"
//                 />
//                 <h1 className="home">About</h1>
//               </div>
//             )}
//           </div>
//         )
//       }}
//     </ThemeContext.Consumer>
//   </>
// )

// export default Home

import Navbar from '../Navbar'
import ThemeContext from '../../context/ThemeContext'

const About = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      return (
        <div>
          <div>
            {isDarkTheme ? (
              <div className="home">
                <Navbar />
                <div className="container">
                  <img
                    alt="about"
                    src="https://assets.ccbp.in/frontend/react-js/about-dark-img.png"
                  />
                  <h1 className="head">About</h1>
                </div>
              </div>
            ) : (
              <div>
                <Navbar />
                <div className="container">
                  <img
                    alt="about"
                    src="https://assets.ccbp.in/frontend/react-js/about-light-img.png"
                  />
                  <h1>About</h1>
                </div>
              </div>
            )}
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default About
