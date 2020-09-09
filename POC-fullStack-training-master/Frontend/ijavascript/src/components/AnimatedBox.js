import React,{useState} from 'react'
import '../styles/animatedBox.css'
export const AnimatedBox = () => {
  const [animate, setanimate] = useState(false);
  return (
    <div onClick={() => setanimate(!animate )}                       
    className={animate === true ? 'animated-box' : 'box'}>
            
    </div>
  )
}
export default AnimatedBox
