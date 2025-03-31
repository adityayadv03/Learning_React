import Chai from './chai.jsx'

function App() {

  const username="adityayadv03"

  return (
    // fragment <> we do this because we are allowed to return only one Element so we wrapped it in a fragment
    <> 
      <Chai />
      <h2>Learning with UTube | {username}</h2>
      <p>Testing</p>
    </>
  )
}

export default App
