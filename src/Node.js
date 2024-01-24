import React, { useEffect, useState } from 'react'

const Node = (props) => {
    const [tree, setTree] = useState([])
    useEffect(()=>{
        for (const key in props.tree){
            console.log('Id')
            console.log(props.tree[key])
            setTree(props.tree[key])
        }
    },[tree])
  return (
    <div>


            <div>element</div>
    </div>
  )
}

export default Node

