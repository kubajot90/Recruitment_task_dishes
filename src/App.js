import NavBar from "./navbar/NavBar";
import Header from "./header/Header";
import Form from "./form/Form";
import { useDispatch } from "react-redux";
import { reset } from "redux-form";
import { conditionallyFieldsActions } from "./store/conditionallyFieldsSlice";
import "./App.css";

function App() {
  const dispatch = useDispatch();

  const resetForm = () => {
    dispatch(reset("dishesForm"));
    dispatch(conditionallyFieldsActions.setRangeLabel(0));
    dispatch(conditionallyFieldsActions.selectDish(""));
  };

  return (
    <div className="App">
      <NavBar resetForm={resetForm} />
      <Header />
      <Form resetForm={resetForm} />
    </div>
  );
}

export default App;
