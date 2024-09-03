import React, { useContext } from 'react'
import './Main.css'
import { assets } from '../../assets/assets'
import {Context} from '../../Context/Context'

const Main = () => {

    const {onSent, recentPrompt, showResult, loading, resultData, setInput, input} = useContext(Context)
  return(
    <div className='main'>
        <div className="nav">
            <p>Job Assistant</p>
            <img src={assets.user_icon} alt="" />
        </div>

        <div className="main-container">

            {!showResult
            ?<>
            <div className="greet">
                <p><span>Hello, User</span></p>
                <p>How may I help you?</p>
            </div>
            <div className="cards">
                <div className="card">
                    <p>Help me make a CV</p>
                    <img src={assets.compass_icon} alt="" />
                </div>
                <div className="card">
                    <p>Help me with a Cover Letter</p>
                    <img src={assets.bulb_icon} alt="" />
                </div>
                <div className="card">
                    <p>Check my suitability with this role</p>
                    <img src={assets.message_icon} alt="" />
                </div>
                <div className="card">
                    <p>Things I can learn for a better profile</p>
                    <img src={assets.code_icon} alt="" />
                </div>
            </div>
            </>
            :
            <div className="result">
                <div className="result-title">
                    <img src={assets.user_icon} alt="" />
                    <p>{recentPrompt}</p>
                </div>
                <div className="result-data">
                    <img src={assets.gemini_icon} alt="" />
                    {loading
                    ?
                    <div className='loader'>
                        <hr />
                        <hr />
                        <hr />
                    </div>:
                    <p dangerouslySetInnerHTML={{__html:resultData}}></p>}
                </div>
            </div>
    }
            <div className="main-bottom">
                <div className="search-box">
                    <input onChange={(e) => setInput(e.target.value)} type="text" placeholder='Enter a prompt here' value = {input}/>
                    <div>
                        <img src={assets.gallery_icon} alt="" />
                        <img src={assets.mic_icon} alt="" />
                        {input?<img src={assets.send_icon} alt=""  onClick={()=> onSent()}/>:null}
                    </div>
                </div>
                <p className="bottom-info">
                    Gemini may display inaccurate info, so dont at me!
                </p>
            </div>
        </div>   
    </div>
  )
}
export default Main
