import { useState , useEffect} from "react";
import { globalUserList, setUserList, prepreg } from "./signup";
import userList from "./signup";
import { useRouter } from 'next/router';
function App({ list }) {
  const [login, setLogin] = useState({
    User: "",
    Password: "",
  });
  const myStyle = {
    backgroundImage:
      "url('https://png.pngtree.com/background/20211217/original/pngtree-matrix-abstract-digital-background-picture-image_1593634.jpg')",
    height: "100vh",
    width:"100%",
 
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };
  const [loginstatus, setLoginStat] = useState(true);
 
  const router = useRouter();

  const [status, setstatus] = useState("");
  const notify = () => toast("Wow so easy!");
  const [passErr, setPassErr] = useState(false);
  const [userErr, setUserErr] = useState(false);
  function logout(){
    setLoginStat(true);
    setstatus("")
    setLogin(
      {
        User: "",
        Password: "",
      }
    )
  }
  function signupSwitch(){
    router.push('/signup');
  }
  function boardSwitch(){
    router.push('/boards');
  }
  function checkLogin() {

    console.log(globalUserList);
    const validUser = globalUserList.find(
      (user) => user.username === login["User"] && user.password === login["Password"]
    );
    if (validUser) {
      // Authentication successful
      setPassErr(false);
      setUserErr(false);
      setLoginStat(false);
      boardSwitch();
//     } 
//     if (
//         globalUserList.find(x => x.username === login["User"])
//  &&
//        globalUserList.find(x => x.password === login["Password"])&&
//       login["Password"] !== "" &&
//       login["User"] !== ""
//     ) {
    //   setstatus("Authenticated");
      setPassErr(false);
      setUserErr(false);
      setLoginStat(false);
      boardSwitch();

    } 
    // else if (
    //     login["User"] != user &&
    //     login["Password"] == pass &&
    //     login["Password"] !== "" &&
    //     login["User"] !== ""
    //   ) {
    //     setstatus(" ERROR");
    //     setPassErr(false);
    //     setUserErr(false);
    //   } else if (
    //     login["User"] === user &&
    //     login["Password"] !== pass &&
    //     login["Password"] !== "" &&
    //     login["User"] !== ""
    //   ) {
    //     setstatus(" ERROR");
    //     setPassErr(false);
    //     setUserErr(false);
    //   } else if (
    //     login["User"] !== user &&
    //     login["Password"] !== pass &&
    //     login["Password"] !== "" &&
    //     login["User"] !== ""
    //   ) {
    //     setstatus(" ERROR");
    //     setPassErr(false);
    //     setUserErr(false);
    //   }
  
    //   if (login["Password"] === "") {
    //     setPassErr(true);
    //   }
    //   if (login["User"] === "") {
    //     setUserErr(true);
    //   }
  }

  function getUser(event) {
    setLogin({ ...login, User: event.target.value });
  }
  function getPass(event) {
    setLogin({ ...login, Password: event.target.value });
  }
  return (
    <section className="bg-black h-screen ">
    
          <div className="-cols-2 gap-4">
            <div className="flex justify-center flex-col  items-center">
              <div className="pt-5 ">
                <div>
                  <img
                    class="object-contain h-48 w-96 "
                    src="https://i.ebayimg.com/images/g/NtcAAOSwGhReuH1N/s-l1600.jpg"
                    alt="example"
                  />
                </div>
                <div className="mt-10">
                  <h3 className=" text-center mb-5 font-bold text-3xl hover:text-white text-green-500 ">
                    Login
                  </h3>
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
                  {userErr ? (
                    <span class="inline-flex text-sm text-red-700">
                      User field blank
                    </span>
                  ) : (
                    <span class="text-black">.</span>
                  )}

                  <p>
                    <input
                      type="password"
                      class="w-50 rounded text-green-500 border-2 border-green-500 placeholder-green-500	bg-black py-[0.32rem] px-3 "
                      placeholder="Enter Password"
                      onChange={getPass}
                    ></input>
                  </p>
                  {passErr ? (
                    <span class="inline-flex text-sm text-red-700">
                      Password field blank
                    </span>
                  ) : (
                    <span class="text-black">.</span>
                  )}

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
                  <p className="text-green-500 grid justify-center mt-10 text-lg ">
                    {status}
                  </p>
                  <p className="text-green-500 grid justify-center mt-10 text-sm ">
                    Be part of the Movement
                  </p>
                  <div className=" grid gap-4 place-items-center ">
                    <div>
                      <button
                        className=" text-center bg-black-500 rounded hover:bg-green-500 hover:text-black text-green-500 border-2 py-[0.32rem] px-3 border-black "
                        onClick={signupSwitch}
                      >
                        Join Us
                      </button>
                    </div>
                    <p className="text-green-500 grid justify-center mt-10 text-lg ">
                {globalUserList.map((user, index) => {
                  return (
                    <li className="text-lg pt-5 flex" key={index}>
                      <div class="">
                        <div className="grid grid-cols-1">
                          <h5 class="text-white dark:text-white">
                            {index + 1}: {user.username}
                          </h5>

                          <p class="mb-3 font-normal text-gray-700  dark:text-white">
                            {user.password}
                          </p>
                        </div>
                      </div>
                    </li>
                  );
                })}
              </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        
  
    </section>
  );
}
export default App;
