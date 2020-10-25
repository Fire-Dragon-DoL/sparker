import React from 'react';
import './App.css';
import { useChecklist } from './App/Checklist.js';
import { Editor } from './Components/Checklist/Editor.js';
import { Output } from './Components/JSON.js';

function App() {
  const { checklist, rename, add, changeContent } = useChecklist();

  return (
    <div className="App">
      <header>
        <h1>learn react</h1>
      </header>
      <main>
        <Editor
          value={checklist}
          onRename={rename}
          onAdd={(position) => add(position)}
          onContentChange={changeContent}
        />
      </main>
      <footer>
        <Output value={checklist} />
      </footer>
    </div>
  );
}

export default App;
