function Home() {

  const test = (e, req, res) => {
    e.preventDefault()
    if(localStorage){
        console.log(JSON.parse(localStorage.getItem('user')))
    } else {
      console.log('no bueno')
    }
}


  return (
    <>
      <div>Home</div>
      <button type='submit'
      onClick={test}>Test</button>
    </>
  )
}
export default Home