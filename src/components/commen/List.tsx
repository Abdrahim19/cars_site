import React from "react"

type prop = {
    array:string[],
    list_Type:'row' | 'col',
    gap:string
}
const List:React.FC<prop> = ({array , gap , list_Type}) => {
  return (
      <ul>
    {array.map(item => (
        <li key={item}>{item}</li>
        ))}
  </ul>
        )
}

export default List