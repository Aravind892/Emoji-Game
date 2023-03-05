// Write your code here.
import './index.css'

const NavBar = props => {
  const {topScore, isGameProgress, currentScore} = props

  return (
    <nav className="navbar-container">
      <div className="navbar-sub-container">
        <div className="container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
            alt="emoji logo"
            className="emoji-logo"
          />
          <h1 className="title">Emoji Game</h1>
        </div>
        {isGameProgress && (
          <div className="scores-container">
            <p className="score">Score: {currentScore}</p>
            <p className="score">Top Score: {topScore}</p>
          </div>
        )}
      </div>
    </nav>
  )
}

export default NavBar
