import React from "react"
type prop = {
    imgsrc:string , children:string
}
const tag:React.FC<prop> = ({children , imgsrc}) => {
  return (
    <div className="p-4 rounded shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)]">
        <p>{children}</p>
        <img src={imgsrc} alt="img _icon" />
    </div>
  )
}

export default tag