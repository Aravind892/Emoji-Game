// Write your code here.

const Won = 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
const Loss = 'https://assets.ccbp.in/frontend/react-js/loss-game-img.png'

const WinOrLoseCard = props => {
  const {isWon, score, onClickPlayAgain} = props
  const imgUrl = isWon ? Won : Loss
  const message = isWon ? 'You Won' : 'You Lose'
  const scoreLabel = isWon ? 'Best Score' : 'Score'

  return (
    <div className="win-loss-container">
      <div className="score-details-container">
        <h1 className="game-status">{message}</h1>
        <p className="your-score-status">{scoreLabel}</p>
        <p className="your-score">{score}/12</p>
        <button
          className="play-again-button"
          type="button"
          onClick={onClickPlayAgain}
        >
          Play Again
        </button>
      </div>
      <div className="image-section-container">
        <img src={imgUrl} alt="win or lose" className="win-lose-image" />
      </div>
    </div>
  )
}

export default WinOrLoseCard
