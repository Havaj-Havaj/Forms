import { useState, useEffect } from 'react';


function App() {
const [text, setText] = useState('')
const [textDirty, setTextDirty] = useState(false)
const [textError, setTextError] = useState('не должно быть пустым')
const [formValid, setFormValid] = useState(false)
const [butClick, setButClick] = useState(false)
const [classs, setClasss] = useState('jk')
const [butClasss, setButClasss] = useState('but')


useEffect(() => {
if(text === ''){
  setFormValid(false)
}else {
  setFormValid(true)
  setButClasss('butfr')
  
}
}, [text])


const hendleText =(e) =>{
  setText(e.target.value)
  if (e.target.value) {
    setTextError('')
    setClasss('jk')
  }else { 
    setTextError('Поле ввода не должно быть пустым')
    setClasss('jkl')
    
     }
}

const a =()=>{
  setButClick(true)
  console.log(setText())
  setText('')
  setTextError('')
  const b =()=>setTimeout(
    () =>{
    setButClick(false)
    setTextError('')}, 1000)
  b()  
}

  return (
    <div className="App">
      <form onSubmit={(e)=>e.preventDefault()}>
       <input  style ={{marginBottom: 8, borderColor: 'blue'}}className={classs} value={text} onChange={(e) => {hendleText(e)}} onClick={(e) => {hendleText(e)}}onBlur={e =>setTextDirty(true)} type='text' placeholder='Введите ваше имя'></input> 
       <button   className ={butClasss}disabled={!formValid} onClick={() => {a()}}>добавить</button>
       {(textDirty) && <div style={{color: 'red'}}>{textError}</div>}
       {(textDirty   && butClick) && <div style={{color: 'green'}}>{'Сообщение успешно отправлено'}</div>}
      </form>
      
    </div>
  );
}

export default App;
