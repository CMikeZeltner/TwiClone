import {FaUser} from 'react-icons/fa'

function MessageBox() {
  return (
    <div className='msgbox-root-container'>
        <FaUser className='testtest'/>
        <div className='textarea-submit'>
            <textarea placeholder="What's happening?"></textarea>
            <button className='btn btn-tweet'>Tweet</button>
        </div>


    </div>
  )
}
export default MessageBox