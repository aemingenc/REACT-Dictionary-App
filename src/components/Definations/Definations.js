import React from 'react'
import "./Definations.css"
const Definations = ({word,category,meanings}) => {
  return (
    <div className="meanings">

        {
            meanings[0] && word && category==="en"&&(
                <audio
                src={meanings[0].phonetics[0] &&meanings[0].phonetics[0].audio}
                style={{backgroundColor:"black",borderRadius:"10px"}}
                controls
                >
                    Your Browser doesn't support audio element
                </audio>
            )
        }
        {
            word ==="" ? <span className="subtitle">Start by typing a word in Search</span>
            : (
                meanings.map((mean)=>
                    mean.meanings.map((item)=>
                        item.definitions.map((def)=>(
                        <div className='singleMean'
                        style={{backgroundColor:"white",color:"black"}}
                        >
                            <b>{def.definition}</b>
                                <hr style={{backgroundColor:"black",width:"100%"}}/>
                                {

                                    def.example && (
                                        <span>
                                            <b>Example:</b>
                                            {def.example}
                                        </span>
                                    )
                                }
                                {
                                    def.synonyms && (
                                        <span>
                                            <b>Synonyms :</b>
                                            {def.synonyms.map((s)=> `${s}, `)}
                                        </span>
                                    )
                                }
                        </div>
                        )
                        )
                    )
            )
             ) }
    </div>
  )
}

export default Definations