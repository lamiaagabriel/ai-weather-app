const ChatGPT = async () => {
  const res = await fetch("https://technomedia.onrender.com/api/articles").then(
    (res) => res.json()
  )

  return (
    <section>
      <div className="container">ChatGPT</div>
    </section>
  )
}
export default ChatGPT
