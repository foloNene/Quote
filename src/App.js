import React,{useState} from "react";
import './App.css';

function App(){
  //A state caputuring Inputs

  const [text, setText] = useState("");

  //A state holding our datas
  const [word, setWord] = useState([
    {
      id: 1,
      quote: "Never give up"
    },
    {
      id:2,
      quote:"Happiness id free"
    },
    {
      id:3,
      quote:"Do what makes you happy"
    },
  ]);

  //Function for Posting;
  const Post = () => {
    const items = {
      id: word.length + 1,
      quote: text,
    };
    setWord([...word, items]);

  //Responsible for Removing items in our input
    setText("");
  }

  //function to delete Items
  function DeleteItems (id) {
    const del = word.filter((el)=> el.id !== id);
    setWord(del);
  }

  // console.log(lsetf)
  // console.log(text)

  return (
    <div className="CardHolder">
      <br/>

      {/*Our Input */}
      <input value={text} onChange ={(e)=>{setText(e.target.value)
      console.log(text)
    }} placeholder="Input Quote"/>
    <br/>

    {/*Button For Calling our Post Function */}
    <button onClick={() =>{
    Post()
    console.log("Have Posted")
    }}>Post</button>


    {/*This is where our Data are being Mapped*/}

    {word.map((props)=>(
      <div className="Card">
        <div>{props.id}.</div>
        <div>Quote:{props.quote}</div>
        <div className="Delete" >
          <button className="Del" onClick={() =>{
            DeleteItems(props.id)
          }}>Delete</button>
        </div>
        
      </div>
      
    ))}
    

    </div>
  )

}

export default App