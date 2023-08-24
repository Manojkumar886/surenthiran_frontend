import OrderlistHTML, { ImgHTML, ParaHTML, TablesHTML } from "./Components";

import 'bootstrap/dist/css/bootstrap.min.css'

import 'bootstrap-icons/font/bootstrap-icons.css'

function App()
{
  return(
    <>
    <p align='center'>Welcome to everyone</p>
    <div align='center'>
        <OrderlistHTML/>
        <TablesHTML/>
        <ParaHTML/>
        <br/>
        <ImgHTML/>
        <AdvancedDesign/>
    </div>
    <p>Thank you</p>
    </>
   
  );
}

export var AdvancedDesign=()=>
{
  return(
    <>
      <div className="container text-center row justify-content-center">
          <div className="col-4 card bg-dark">
              <h1 className="card-title text-primary fw-bold text-uppercase">Jerry Card</h1>
              <p className="text-danger">Card type is visiting card,credit card,debit card,atm card,invitation card</p>
              <img className="card-img rounded-circle" src="./Tom-and-Jerry-Background.jpg"/>
          </div>
      </div>  
    </>
  );
}

export default App;