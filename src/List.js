import React from "react";

class List extends React.Component {
  render() {
    return (
      <div className="List">
        <ul>
          {this.props.notes.map(note => {
            <li key={note.date}>
              <h1>
                {note.title}
                <p>by {note.author} on {note.date}</p>
              </h1>
              <p>{note.body}</p>
            </li>;
          })}
        </ul>
      </div>
    );
  }
}

export default List;
