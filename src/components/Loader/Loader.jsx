import Spinner from 'react-bootstrap/Spinner';
import "./Loader.css"

const Loader = () => {
  return (
    <div className='Loader'>
        <Spinner animation="border" role="status"/>
    </div>
  )
}

export default Loader