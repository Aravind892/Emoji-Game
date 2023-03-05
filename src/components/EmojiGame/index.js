/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.

import {Component} from 'react'
import EmojiCard from '../EmojiCard'
import NavBar from '../NavBar'
import WinOrLoseCard from '../WinOrLoseCard'

import './index.css'

class EmojiGame extends Component {
  state = {
    clickedEmojiList: [],
    topScore: 0,
    isGameInProgress: true,
  }

  resetGame = () => {
    this.setState({clickedEmojiList: [], isGameInProgress: true})
  }

  finishAndSetTopScore = currentScore => {
    const {topScore} = this.state
    let newTopScore = topScore

    if (currentScore > newTopScore) {
      newTopScore = currentScore
    }

    this.setState({topScore: newTopScore, isGameInProgress: false})
  }

  clickEmoji = id => {
    const {emojisList} = this.state
    const {clickedEmojiList} = this.state
    const isClickEmoji = clickedEmojiList.includes(id)
    const clickEmojiLength = clickedEmojiList.length

    if (isClickEmoji) {
      this.finishAndSetTopScore(clickEmojiLength)
    } else {
      if (clickEmojiLength === emojisList.length - 1) {
        this.finishAndSetTopScore(emojisList.length)
      }

      this.setState(prevState => ({
        clickedEmojiList: [...prevState.clickedEmojiList, id],
      }))
    }
  }

  shuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  renderEmojiList = () => {
    const shuffledEmojiList = this.shuffledEmojisList()

    return (
      <ul className="emojis-list-container">
        {shuffledEmojiList.map(each => (
          <EmojiCard
            key={each.id}
            emojiDetails={each}
            clickEmoji={this.onClickEmoji}
          />
        ))}
      </ul>
    )
  }

  renderScoreCard = () => {
    const {emojisList} = this.props
    const {clickedEmojiList} = this.props

    const isWon = clickedEmojiList.length === emojisList.length

    return (
      <WinOrLoseCard
        isWon={isWon}
        score={clickedEmojiList.length}
        onClickPlayAgain={this.resetGame}
      />
    )
  }

  render() {
    const {topScore, isGameInProgress, clickedEmojiList} = this.props

    return (
      <div className="main-container">
        <NavBar
          topScore={topScore}
          isGameInProgress={isGameInProgress}
          currentScore={clickedEmojiList.length}
        />
        <div className="emoji-body-container">
          {isGameInProgress ? this.renderEmojiList : this.renderScoreCard}
        </div>
      </div>
    )
  }
}

export default EmojiGame
