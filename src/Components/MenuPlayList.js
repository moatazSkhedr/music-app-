import React , {useEffect} from "react";
import { FaPlus } from "react-icons/fa";
import { BsMusicNoteList, BsTrash } from "react-icons/bs";
import './PopUp.css';
import "../Style/LeftMenu.css";
import { PlayList } from "./PlayList";
import PopUp from "./PopUp";
import { useState } from "react";
import db from './firebase';
import firebase from 'firebase/compat/app';

function MenuPlayList() {
  const [buttonTrigger , setButtonTrigger] = useState(false);
  const [input , setInput] = useState("");
  const [item , setItems] = useState([{}]);


  const handleSubmit = (e)=>{
    e.preventDefault();
    db.collection("playListName").add({
      name:input , 
      timestamp : firebase.firestore.FieldValue.serverTimestamp(),

    })
    setInput("")
  } 
   const handleChange = (e)=>{
    setInput(e.target.value)

  }
  useEffect(()=>{
    db.collection("playListName").orderBy("timestamp" , "desc").onSnapshot(snap=>{
     setItems(snap.docs.map(doc=>({id:doc.id , name:doc.data().name   })));
   })
 } , []);

  return (
    <div className="playlistContainer">
      <div className="nameContainer">
        <p>PlayList</p>
        <div>
        <i  onClick={()=>setButtonTrigger(true)}>
          <FaPlus />
        </i>
        <div>
        <PopUp trigger = {buttonTrigger} setTrigger ={setButtonTrigger} className="" >
          <form onSubmit={handleSubmit} className="form_control_popup">
          <input  className="search_box" value={input} 
           onChange={handleChange} type='text' placeholder='Enter Your Playlist' />
            <br/> <br/>
              <button disabled ={!input} className="btn_handle">Save</button>

          </form>
        </PopUp>
        </div>
        </div>

      </div>
      <div className="playlistScroll">
        {item &&
          item.map((ele) => (
            <div className="playlist">
              <i className="list">
                <BsMusicNoteList />
              </i>
              <p key={ele.id}>{ele.name}</p>
              <i  className="trash" onClick={e=> db.collection("playListName").doc(ele.id).delete()}>
                <BsTrash />
              </i>
            </div>
          ))}
      </div>
    </div>
  );
}

export default MenuPlayList;
