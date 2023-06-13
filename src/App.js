import './App.css';
import { useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import Editor from 'ckeditor5-custom-build/build/ckeditor';
import { useNavigate } from 'react-router-dom';

let numberOfChanges = 0;

function App() {
  const [value, setValue] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(value);
    navigate('/success');
  };

  const handleChange = (_, editor) => {
    numberOfChanges += 1;
    console.log('value changed:', numberOfChanges);

    setValue(editor.getData());
  };

  return (
    <div>
      <h1>Source editing test</h1>

      <form onSubmit={handleSubmit}>
        <CKEditor
          editor={Editor}
          onChange={handleChange}
        />

        <button
          type='submit'
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
