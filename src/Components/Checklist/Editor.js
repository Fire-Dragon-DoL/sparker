import React from 'react';

function TextEditor({ value, onChange }) {
  return (<input
    type="text"
    value={value}
    onChange={(event) => {
      onChange(event.target.value)
    }}
  />);
}

export function Add({ onClick, position, children }) {
  return (
    <button
    type="button"
    onClick={(event) => {
      event.preventDefault();
      onClick(position);
    }}
    >
      {children}
    </button>
  );
}

export function Item({ id, content, onChange, position, onAdd }) {
  return (
    <li>
      <TextEditor
        value={content}
        onChange={(value) => onChange(position, value)}
      />
      <Add onClick={onAdd}>+</Add>
    </li>
  )
}

function StartNew({ onClick, count }) {
  if (count !== 0) {
    return null;
  }

  return (<Add onClick={() => onClick(0)}>Start list</Add>);
}

export function Editor({ value, onRename, onAdd, onContentChange }) {
  return (
    <div className="Editor">
      <h2>
        <TextEditor value={value.title} onChange={onRename} />
        <StartNew onClick={onAdd} count={value.items.length} />
      </h2>
      <ul>
        {value.items.map((item, position) => {
          return (<Item
            key={item.id}
            id={item.id}
            content={item.content}
            position={position}
            onChange={onContentChange}
            onAdd={onAdd}
          />);
        })}
      </ul>
    </div>
  )
}
