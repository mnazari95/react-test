import './App.css';
import Button from './components/button/Button';
import Input from './components/input/input';

function App() {

  const handleBtnClick = (callback) => {
    console.log("parent")
    callback();
  }
  return (
    <div className="App">

      <Input ph={"example label"}/>
      <Button 
        display={"Custom Button Component"} 
        handleParentFunc={handleBtnClick} />


    </div>
  );
}

export default App;
