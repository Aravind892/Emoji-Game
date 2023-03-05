// Write your code here.
const EmojiCard = props => {
  const {emojiDetails, clickEmoji} = props
  const {imgUrl, emojiName, id} = emojiDetails

  const onClickEmoji = () => {
    clickEmoji(id)
  }

  return (
    <li className="emoji-container">
      <button className="button" type="button" onClick={onClickEmoji}>
        <img src={imgUrl} alt={emojiName} className="emoji-img" />
      </button>
    </li>
  )
}

export default EmojiCard
