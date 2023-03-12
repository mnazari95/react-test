import './App.css';
import Button from './components/button/Button';

function App() {

  const handleBtnClick = (callback) => {
    alert("parent component")
    callback();
  }
  return (
    <div className="App">
      <Button display={"Custom Button Component"} handleParentFunc={handleBtnClick} />
    </div>
  );
}

export default App;
