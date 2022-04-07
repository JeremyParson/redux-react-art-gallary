import './App.css';
import { useSelector, useDispatch, connect } from 'react-redux'
import { useEffect } from 'react'
import { incrementArtId, decrementArtId, fetchData, setArtId } from './features/dataSlice' 

function App() {
  // your logic goes here!
  const dispatch = useDispatch()
  const artId = useSelector(state => state.data.artId)
  const artData = useSelector(state => state.data.artData)

  useEffect(() => {
    dispatch(fetchData())
  }, [artId])

  return (
    <div className="App">
      <div>
        <button onClick={() => {dispatch(fetchData())}}>Trigger Thunk</button>
        <button onClick={() => {}}>Clear</button>
        <button onClick={() => {dispatch(incrementArtId())}}>Next</button>
        <button onClick={() => {dispatch(decrementArtId())}}>Back</button>
      </div>
      <input onChange={(e) => {dispatch(setArtId(e.target.value))}} value={artId}/>
      <div>
        {artData['primaryImageSmall'] ? <img src={artData['primaryImageSmall']} /> : <p>No Image</p>}
      </div>
    </div>
  );
}

export default App;
