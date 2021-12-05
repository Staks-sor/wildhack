import './App.css'
import React from 'react'
import {useDropzone} from 'react-dropzone';

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

    const [work, setWork] = React.useState(false);
    const [files, setFiles] = React.useState([]);
    const [success, setSuccess] = React.useState([]);
    const [error, setError] = React.useState([]);
    const [strange, setStrange] = React.useState([]);
    const [type, setType] = React.useState('success');

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

    // function handlePreview(e) {
    //   console.log(e)
    //   if (e.currentTarget.style.position == 'fixed') {

    //     // e.currentTarget.style.left = '0'
    //     // e.currentTarget.style.top = '0'
    //     // e.currentTarget.style.position = 'relative'
    //     // e.currentTarget.style.transform = 'translateX(0%)'
    //   } else {

    //     e.currentTarget.style.position = 'fixed'
      
    //     // e.currentTarget.style.objectFit = 'scale-down'
    //     // e.currentTarget.style.transform = 'translateX(-15%)'
    //     // e.currentTarget.style.left = '50%'
    //     // e.currentTarget.style.top = '20%'
    //     // e.currentTarget.style.width = '100%'
    //     // e.currentTarget.style.height = 'auto'
    //   }
    // }

    function handleSubmit() {



        let testJSON = {
            "file": "04/12/2021-22:19:20",
            "status": "good", // or bad or strange
            "chance": 0.57
        }

        if (files?.length > 0) {
          
            setWork(true)
            files.forEach(file => {
                let formData = new FormData()

                formData.append('image', file)

                // fetch(`http://localhost:8000/images`, {
                //     method: "POST",
                //     body: formData
                // })
                //     .then(res => {
                //         return res.json()
                //     })
                //     .then(json => {
                //         console.log(json)
                //         if (+json.chance >= 0.45) {
                //           setSuccess(prevstate => {
                //             return [
                //               ...prevstate,
                //               json
                //             ]
                //           })                
                //         } else if (+json.chance >= 0.25 && +json.chance < 0.45) {
                //           setStrange(prevstate => {
                //             return [
                //               ...prevstate,
                //               json
                //             ]
                //           })  
                //         } else if (+json.chance < 0.25) {
                //           setError(prevstate => {
                //             return [
                //               ...prevstate,
                //               json
                //             ]
                //           })  
                //         }
                //     })
            })
        } else {
          alert('Данные не загружены')
        }

    }

    function handleBack() {
      setWork(false)
      setStrange([])
      setSuccess([])
      setError([])
      setFiles([])
    }

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
            
            <div className="main_title">
                    Программа для распознавания животных
                </div>
            {
              !work ? (
                <div className="main">
                  <div className="upload">
                      <button onClick={handleSubmit}>Обработать</button>
                      <div className="toolbar">
                          Загружено: {files?.length} фото.
                      </div>
                      <section className="container">
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
              ) : (
                <div className="result">
                  
                  <button onClick={handleBack}>Назад</button>
                  <div className="main_title">
                      Результат
                  </div>
                  <div className="result_preview">
                      <div className={ type == 'success' ? "column success_checked" : "column success"} onClick={e => {setType('success')}}>
                          <h3><i></i>Хорошие данные</h3>
                      </div >
                      <div className={ type == 'strange' ? "column warning_checked" : "column warning"} onClick={e => {setType('strange')}}>
                          <h3><i></i>Спорные данные</h3>
                      </div>
                      <div className={ type == 'error' ? "column error_checked" : "column error"} onClick={e => {setType('error')}}>
                          <h3><i></i>Плохие данные</h3>
                      </div>
                          
                  </div>
                  <h1>{type == 'success' ? 'Хорошие данные' : type == 'strange' ? 'Спорные данные' : 'Плохие данные'}</h1>
                  {
                            type == 'success' ? (
                              
                            <div className="result_images">
                              {
                                success.map(item => (
                                  <div>
                                    <img src={`http://localhost:8000/strange/${item?.filename}`}/>
                                    <div className="chance success">Вероятность: {+item?.chance * 100}%</div>
                                  </div>
                                ))
                              }
                              
                            </div>
                            ) : type == 'strange' ? (
                              
                              <div className="result_images" >
                                {
                                  strange.map(item => (
                                    <div>
                                      <img src={`http://localhost:8000/strange/${item?.filename}`}/>
                                      <div className="chance warning">Вероятность: {+item?.chance * 100}%</div>
                                    </div>
                                  ))
                                }
                                
                              </div>
                            ) : (
                            
                              <div className="result_images">
                                {
                                  error.map(item => (
                                    <div>
                                      <img src={`http://localhost:8000/error/${item?.filename}`}/>
                                      <div className="chance error">Вероятность: {+item?.chance * 100}%</div>
                                    </div>
                                  ))
                                }
                                
                              </div>
                              )
                          }
              </div>
              )
            }
            
        </div>
    );
}

export default App;
