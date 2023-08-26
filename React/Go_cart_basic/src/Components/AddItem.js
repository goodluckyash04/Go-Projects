import React from "react";
import { useState } from "react";

export default function AddItem(props) {
  const [productName, setName] = useState("");
  const [productPrice, setPrice] = useState("");
  return (
    <div className="container my-4">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          props.addItem(productName, Number(productPrice));
          setName("");
          setPrice("")
        }}
      >
        <div className="row" >
          <div className="mb-3 col-6">
            <label htmlFor="name" className="form-label">
              Item Name
            </label>
            <input
              type="text"
              className="form-control"
              id="productName"
              name="productName"
              value={productName}
              onChange={(e) => setName(e.currentTarget.value)}
            />
          </div>
          <div className="mb-3 col-6">
            <label htmlFor="price" className="form-label">
              Price
            </label>
            <input
              type="text"
              className="form-control"
              id="productPrice"
              value={productPrice}
              name="productPrice"
              onChange={(e) => setPrice(Number(e.currentTarget.value))}
            />
          </div>
        </div>
        <div className="text-center">
          <button type="submit" className="btn btn-primary">
            ADD
          </button>
        </div>
      </form>
    </div>
  );
}

//Using Class Component
// class AddItem extends React.Component {
//     constructor(props){
//         super(props);
//         this.state={
//             productName:"",
//             productPrice:"",
//         }
//     }
//     render() {
//         return (
//             <div className="container my-4">
//             <form onSubmit={(e)=>{
//                 e.preventDefault();
//                 this.props.addItem(this.state.productName,Number(this.state.productPrice))
//                 }}>
//             <div className="row">
//             <div className="mb-3 col-6">
//               <label htmlFor="name" className="form-label">Mobile Name</label>
//               <input type="text"  className="form-control" id="productName" name="productName" onChange={(e)=>{this.setState({productName:e.currentTarget.value})}}
//               value={this.state.productName}/>
//             </div>
//             <div className="mb-3 col-6">
//               <label htmlFor="price" className="form-label">Price</label>
//               <input type="text" className="form-control" id="productPrice" name="productPrice"
//               onChange={(e)=>{this.setState({productPrice:Number(e.currentTarget.value)})}}
//               value={this.state.productPrice}/>
//             </div>
//             </div>
//             <div className="text-center">
//             <button type="submit" className="btn btn-primary" >ADD</button>
//             </div>
//           </form>
//           </div>
//         );
//     }
// }

// export default AddItem;
