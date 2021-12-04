require('es5-shim');
require('es5-shim/es5-sham');
require('./App.css');
const React = require('react');
const useDropzone = 'react-dropzone';

const thumbsContainer = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  marginTop: 16
};

const thumb = {
  display: 'inline-flex',
  borderRadius: 2,
  border: '1px solid #eaeaea',
  marginBottom: 8,
  marginRight: 8,
  width: 100,
  height: 100,
  padding: 4,
  boxSizing: 'border-box'
};

const thumbInner = {
  display: 'flex',
  minWidth: 0,
  overflow: 'hidden'
};

const img = {
  display: 'block',
  width: 'auto',
  height: '100%'
};





function App() {

  const [files, setFiles] = React.useState([]);
  const {getRootProps, getInputProps} = useDropzone({
    onDrop: acceptedFiles => {
      setFiles(acceptedFiles.map(file => Object.assign(file, {
        preview: URL.createObjectURL(file)
      })));
      
      acceptedFiles.forEach(file => {
        console.log(file)
        var reader = new FileReader();
        let result = reader.readAsDataURL(file);
        console.log(result)
      })
    }
  });
  
  const thumbs = files.map(file => (
    <div style={thumb} key={file.name}>
      <div style={thumbInner}>
        {console.log(file)}
        <img
          src={file.preview}
          style={img}
        />
      </div>
    </div>
  ));

  React.useEffect(() => () => {
    // Make sure to revoke the data uris to avoid memory leaks
    files.forEach(file => URL.revokeObjectURL(file.preview));
  }, [files]);

  return (
    <div className="App">
        <div className="header">
            <div className="logo">
              <h1>EQUAL</h1>
              <h3>Команда</h3>
            </div>
            <div className="sponsor">
              <img src='croc.svg'/>
            </div>
        </div>
        <div className="main">
            <div className="main_title">
              Программа для распознавания изображений животных
            </div>
            <div className="upload">
              <button>Обработать</button>
              <div className="toolbar">
                Загружено: {files?.length} фото.
              </div>
              <section className="container" >
                <div {...getRootProps({className: 'dropzone'})}>
                  <input {...getInputProps()} />
                  <p>Перетащите файлы в это окно или нажмите для выбора фото или видео...</p>
                </div>
                <aside style={thumbsContainer}>
                  {thumbs}
                </aside>
              </section>
            </div>
        </div>
        <div className="result">
            <div className="main_title">
              Результат
            </div>
            <div className="result_preview">
                <div className="column error">
                  <h3><i></i>Плохие изображения</h3>
                </div>
                <div className="column warning">
                  <h3><i></i>Спорные изображения</h3>
                </div>
                <div className="column success">
                  <h3><i></i>Хорошие изображения</h3>
                </div>
            </div>
        </div>
    </div>
  );
}

export default App;
