import React from 'react'
import './Note.css'
import {MdDeleteForever} from 'react-icons/md'

export default function Note({id, text, date, handleDelete}) {

  return (
    <>
      <div className="note" key={id}>
        <div className="note-content">{text}</div>
        <div className="note-footer">
          <small>{date}</small>
          <button className="del" onClick={() => handleDelete(id)}>
            <MdDeleteForever />
          </button>
        </div>
      </div>
    </>
  );
}
