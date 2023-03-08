// import Navbar from "../components/Navbar";

// export default function Home() {
  
//   const todos = [
//     { title: 'Todo 1', description: 'Todo 1 description'},
//     { title: 'Todo 2', description: 'Todo 2 description'},
//     { title: 'Todo 3', description: 'Todo 2 description'},
//   ]
  
  
//   return (

//     <div>
//       <Navbar />
//       <ul>
//         {todos.map((data, index) => {
//           return(
//             <li className="text-lg font-bold" 
//               key={index}>
//                 Title: {data.title} &nbsp; Description: 
//                 {data.description}
//             </li>
//           )
//         })}
//       </ul>
//     </div>
//   )
// }

import { useState } from "react";
function App({ list }) {
  const [login, setLogin] = useState({
    User: "",
    Password: "",
  });
  const user = "cheska";
  const pass = "tf";
  const [status, setstatus] = useState("");
  const notify = () => toast("Wow so easy!");
  const [passErr, setPassErr] = useState(false);
  const [userErr, setUserErr] = useState(false);
  function checkLogin() {
    if (login["User"] == user && login["Password"] == pass) {
      setstatus("Authenticated");
      setPassErr(false)
      setUserErr(false)
    } else if (login["User"] != user && login["Password"] == pass) {
      setstatus(" ERROR");
      setPassErr(false);
      setUserErr(false);
    }
      else if (login["User"] === user && login["Password"] !== pass) {
      setstatus(" ERROR");
      setPassErr(false);
      setUserErr(false);

    } else if (login["User"] !== user && login["Password"] !== pass) {
      setstatus(" ERROR");
      setPassErr(false);
      setUserErr(false);
    }

    if (login["Password"] === "") {
      setPassErr(true);
  }  if (login["User"] === "") {
      setUserErr(true);
  }
}

  function getUser(event) {
    setLogin({ ...login, User: event.target.value });
  }
  function getPass(event) {
    setLogin({ ...login, Password: event.target.value });
  }
  return (
    <section className="bg-black h-screen ">
      <div className="grid justify-center mt-20">
        <div>
          <img
            class="object-contain h-48 w-96 "
            src="https://i.ebayimg.com/images/g/NtcAAOSwGhReuH1N/s-l1600.jpg"
            alt="example"
          />
        </div>
        <div className="mt-10">
          <h3 className=" text-center mb-5 font-bold text-3xl hover:text-white text-green-500 ">Login</h3>
        </div>
        <div className="grid place-items-center">
  
          <p>
            <input
              type="text"
              class="w-50 rounded text-green-500  border-2 border-green-500 placeholder-green-500	bg-black py-[0.32rem] px-3 "
              placeholder="Enter User"
              onChange={getUser}
            ></input>
            
          </p>
          {userErr? ( <span class="inline-flex text-sm text-red-700">User field blank
        </span>) : ( <span class="text-black">. 
        </span>)}
  
          <p>
            <input
              type="text"
              class="w-50 rounded text-green-500 border-2 border-green-500 placeholder-green-500	bg-black py-[0.32rem] px-3 "
              placeholder="Enter Password"
              onChange={getPass}
            ></input>
            
          </p>
          {passErr? ( <span class="inline-flex text-sm text-red-700">Password field blank
        </span>) :  ( <span class="text-black">. 
        </span>)}
         

          <div className=" grid gap-4 place-items-center mt-5">
            <div>
              <button
                className=" text-center bg-black-500 rounded hover:bg-green-500 hover:text-black text-green-500 border-2 py-[0.32rem] px-3 border-green-500 "
                onClick={checkLogin}
              >
                Login
              </button>
            </div>
          </div>
          <p className="text-green-500 grid justify-center mt-10 text-lg ">{status}</p>
        </div>
      </div>
    </section>
  );
}
export default App;
