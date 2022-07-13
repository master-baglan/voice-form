import { useState, useEffect } from 'react'

const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition
const mic = new SpeechRecognition()

mic.continuous = true
mic.interimResults = true
mic.lang = 'en-US'



const AudioRecord = ()=>{

  const [isListening, setIsListening] = useState(false)
  const [note, setNote] = useState(null)

  useEffect(() => {
    handleListen()
  }, [isListening])

  const handleListen = () => {
    if (isListening) {
      mic.start()
      mic.onend = () => {
        console.log('continue..')
        mic.start()
      }
    } else {
      mic.stop()
      mic.onend = () => {
        console.log('Stopped Mic on Click')
      }
    }
    mic.onstart = () => {
      console.log('Mics on')
    }

    mic.onresult = event => {
      const transcript = Array.from(event.results)
        .map(result => result[0])
        .map(result => result.transcript)
        .join('')
      console.log(transcript)
      setNote(transcript)
      mic.onerror = event => {
        console.log(event.error)
      }
    }
  }




    return(
        <div className="audio">
           <textarea value={note}></textarea>
           <div className="player">
            <i class="fa-solid fa-microphone fa-xl" onClick={() => setIsListening(prevState => !prevState)} ></i>
            {isListening ? <div className="rec">
                     <i class="fa-solid fa-circle"></i>
                 </div> : <div></div>}
                 
           </div>
        </div>
    )
};
export default AudioRecord; 