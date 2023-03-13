import './App.css';
import Button from './components/button/Button';
import Input from './components/input/input';

function App() {

  const handleBtnClick = (callback) => {
    alert("parent component")
    callback();
  }
  return (
    <div className="App">

      <Input ph={"SAMPle text"}/>
      <Button 
        display={"Custom Button Component"} 
        handleParentFunc={handleBtnClick} />


    </div>
  );
}

export default App;
