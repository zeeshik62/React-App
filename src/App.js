import Header from "./components/Header"
import Footer from "./components/Footer"
import Main from "./components/Main"
import Login from "./pages/Login"
import Home from "./pages/Home"
import {
  BrowserRouter,
  Routes,
  Route,
  Router,
} from "react-router-dom";

import Register from './pages/Register'

function App(){

  return (
    <div className="container">

<BrowserRouter>
<Header/>  

<Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/login" element={<Login/>}/>
  <Route path="/signup" element={<Register/>}/>
</Routes>
</BrowserRouter>
</div>)
}











  // const [person1,setPerson1]=useState([12,23,45]);
  // const updatePerson1= ()=>{
  // setPerson1([...person1,35]);}
  // const [person,setPerson]=useState({
  //   name:'No Name',
  //   qual:'Masters',
  //   age:0
  // })
  // const updatePerson= ()=>{
  //     setPerson({...person,age:person.age+1,qual:person.qual="PHD"});
   
  // const [num,setNum] = useState(50);
  
    {/* <h1>Name:{person.name}</h1>
    <h1>Age:{person.age}</h1>
    <h1>Qualification:{person.qual}</h1>
    
    <button onClick={updatePerson}>Update Person</button>
    <button onClick={updatePerson1}>Update Person1</button> */}
        {/* <Header/>
        <h1>HEY WORLD</h1>;*/}
     
export default App;




//LECTURE 3
{/*

==JSX -> javascript XML
Html returned by the function in react that is JSX 
JSX can return only one element
One function which return jsx is called functional component
<div><h1>Hello</h1><p>World</p></div> 
before REact 16.8 there were two type of components functional component and class based component

==XML
1- tag based markup like html, with few exception
2- All tags must have closing tag(self closing or closing tag)
3-XML can have user defined tags unlike HTML
4-XML can have user defined props

{} are object literals but it depends on their use that how
they are actually behaving and its context 


==Data is state
-whenver we have to deal with data we have to use useState() hook
-usestate() is a built in hook which has special features like
constructor in OOP,
-if you dont use use state and use plain vanilla JS than you have to manipulate
DOM manually which has a cost(diffing)
-usestate() is used to declare and initialize state variable


==COUNTER
const [a,setA]=useState(90);
a is variable to store data while setA is a setter function
function counter(){
  setA(a+1)
}
return(
  <div>
  <h1>a</h1>
  <button onclick={counter}></button>
  </div>
)
RESULT
===RECONCILIATION or DIFFING
react automatically and internally compares the actual DOM tree
as well as in memory copy of virtual dom tree it compares each node
and update only changed nodes leaving others as it is.


=where ever we use keyword(use)it mean hook like usestate is a built in hook
that is used to initialize and declare variable


==Props or Props drilling
props use to share data between components sharing data step by step to go to deep down in the tree
alternate to share data directly is through redux
lets say i want to share a variable decalred in App.js with
main as you know it is a step by step process

function App(){
variable const [num,setNum]=usestate(50);
return(
  <div>
  <Main test={num} test1={20}/>
  </div>
)
}
now go to main.jsx
and inside function main write props
function Main(props){
  return(
    <div>
    <h1>props.test</h1>
    and if there is another component lets say ABC in Main.jsx
    and you want to share same data with that also
    <ABC a={props.test}/>
    now go to ABC.jsx and to get data write (<h1>props.a</h1>)
    </div>
  )
}


==ES6   map(), find(), filter()



function (){} --> ()=>{}  arrow function or fat arrow function
if there is only one argument 
function test(a){
  return a*a;

then there is no need of parenthesis aroud a(parameter)
  a=>{
    return a*a;
  }

  if there is only one statement in function body there is no need 
  of curly brackets and return keyword.
    a=> a*a;

    if there is more than one argument
    (a,b)=>a*b;

    if there is more tham one statement in function body there is need 
  of curly brackets and return keyword.
   (a,b)=> {
    const x=90;
    return a*x;
   }
}

==Call back Function
which is passed in to another function as an argument
let marks=[24,45,56,67,34
{marks} output=> 24
to display each elememt individually we use map()
{marks.map((m)=><p>{m}</p>)}


==Mutability
saves the rest element of array in variable(rest operator before, ...=)
==Imutability
consider every element of array as a single element(Spread Operator after=...)

let [e1,...r]=[23,34,456]
e1 has 23 while other values got stored in r
console.log(r) return-->[34,456]
==node app.js use to run file outside the browser i.e. in terminal

let marks=[25,15,45,57]
let m =[...marks];
m will get copy if we change marks it will not efect m.
marks[2]=500;
console.log(m)
let person={
    name:'Zeeshan',
    age: '32',
    Qual:"MCS"
}
destructuring the person will not require . operator to access value 
i.e. person.name.
let{name,age}=person OR let {name,age,...p}=person; //immutable
console.log(name,age)

const [person,setPerson]=useState({
    name:'no name',
    qual:'MCS',
    age: 0
})
to update object i.e. person we have to make it immutable using
rest operator
whenever you update array or object you have to make it immutable or you have
have to preserve its previous state i you want to update every value
then you don't have to preserve its state but its always good to preserve it
const updatePerson=()=>{ 
  setPerson({...person, age:person.age+1, qual:person.qual='BS'})
}
return(
  <div>
  <p>Name:{person.name}</p>
  <p>Age:{person.age}</p>
  <p>Age:{person.qual}</p>
 

  <button onClick={updatePerson}>Update</button>
 </div>)

==React Fragments

no element introduces in DOM
2  or more than 2 divs wrapper
<>
</>

==CARDS
first create card component
then create array having title disciption price in app.js whatever you want in the form of key value 
pair.
then inside return of app.js apply map on that array
with call back function p=><cards/>

and then use props to insert data inside array in the card.

==kiss principle
keep it simple, stupid

React js is for one page websites (SPA) single page Applications here we have index.html
no or muliple 

React is not very good for SEO, not for public face application
you have to use NExt.js (mostly similar)


www.com/port or localhost:3000 is know as base url or root url after this whatever is written this
is known as path i,e, localhost:3000/home

==we dont use anchor tag to redirect pages
anchor tag always send request to the server and server will anwer that request
while react.js is pure client side

anchor tag is replaced with Link
while href is replaced with to
<a className="navbar-brand" href="#">Navbar</a>
replaced
<Link className="navbar-brand" to="#">Navbar</Link>

==Git scm 

scm stands for source configuration manager where source is
source code

cra template make your project make git project automatically 
and starts tracking

there are stages in GIt
1st stage is untracked (U) means untracked
(M) Stands for modified
every command of git starts with git
repository is like a folder its a term of git
directory term is for windows
cmd-> git add . where . mean current directory and ./ means 
inside current directory
working directory or repositry is workspace
after completing todays work you have to add your work at staging 
where you submit all the work and do review and if any change is required 
you have o move your work to work space and do changes and
then add it back to staging then review the changes
*/}