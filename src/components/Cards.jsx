import react from 'react'
import p1 from '../assets/img/1.png'
import {Link} from 'react-router-dom'
// props={
//   prod:{
//     tiltle:'',
//     description:'',
//     price:'',
//     stock:'',
//     image:''
//   }
// }
const Cards=({prod})=>{

    return(
        <div className="col-md-4"> 
        <Link to={`/detail/${prod.id}`}>
        <div className="card" >
          <img className="card-img-top" src={p1} alt="Card image cap"/>
          <div className="card-body">
            <h5 className="card-title">{prod.title}</h5>
            <p className="card-text">{prod.Discription}</p>
            <a href="#" className="btn btn-primary">PKR {prod.Price}/-</a>
          </div>
        </div>
        </Link>
       </div>
    )
}
export default Cards;