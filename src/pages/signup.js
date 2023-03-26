import { useState, useEffect } from "react";

import { useRouter } from "next/router";
var globalUserList;
function App() {
  const [userList, setUserList] = useState([]);
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });
  function prepreg(){
    
  
  useEffect(() => {
    setUserList(currentList => [{ username: "admin", email: "emel", password: "test" },  ]);
  }, []);
}
prepreg();
  const router = useRouter();
  const [passErr, setPassErr] = useState(false);
  const [userErr, setUserErr] = useState(false);
  const [emailErr, setEmailErr] = useState(false);

  //   function logout() {
  //     setLoginStat(true);
  //     setstatus("");
  //     setLogin({
  //       User: "",
  //       Password: "",
  //     });
  //   }
  function loginSwitch() {
    router.push("/login");
  }

  const userChange = (e) => {
    setUser({ ...user, username: e.target.value });
  };
  const passChange = (e) => {
    setUser({ ...user, password: e.target.value });
  };
  const emailChange = (e) => {
    setUser({ ...user, email: e.target.value });
  };
  useEffect(() => {
    globalUserList = userList;
  }, [userList]);
  function registerUser() {
    if (user.username === "") {
      setUserErr(true);
    } else if (user.password === "" || user.password.length <= 7) {
      setPassErr(true);
    } else if (user.email === "") {
      setEmailErr(true);
    } else {
      setUserList([user, ...userList]);
      globalUserList = userList;
      console.log(userList);
      console.log(globalUserList);
    }
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
                Join Us
              </h3>
            </div>
            <div className="grid place-items-center">
              <p>
                <input
                  type="text"
                  class="w-50 rounded text-green-500  border-2 border-green-500 placeholder-green-500	bg-black py-[0.32rem] px-3 "
                  placeholder="Enter User"
                  value={user.username}
                  onChange={userChange}
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
                  type="text"
                  class="w-50 rounded text-green-500 border-2 border-green-500 placeholder-green-500	bg-black py-[0.32rem] px-3 "
                  placeholder="Enter Email"
                  value={user.email}
                  onChange={emailChange}
                ></input>
              </p>
              {emailErr ? (
                <span class="inline-flex text-sm text-red-700">
                  Email field blank
                </span>
              ) : (
                <span class="text-black">.</span>
              )}
              <p>
                <input
                  type="password"
                  class="w-50 rounded text-green-500 border-2 border-green-500 placeholder-green-500	bg-black py-[0.32rem] px-3 "
                  placeholder="Enter Password"
                  value={user.password}
                  onChange={passChange}
                ></input>
              </p>
              {passErr ? (
                <span class="inline-flex text-sm text-red-700">
                  Password field Must be 8 Characters
                </span>
              ) : (
                <span class="text-black">.</span>
              )}

              <div className=" grid gap-4 place-items-center mt-5">
                <div>
                  <button
                    className=" text-center bg-black-500 rounded hover:bg-green-500 hover:text-black text-green-500 border-2 py-[0.32rem] px-3 border-green-500 "
                    onClick={registerUser}
                  >
                    Regiser
                  </button>
                </div>
              </div>
              <p className="text-green-500 grid justify-center mt-10 text-lg ">
                {userList.map((user, index) => {
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
              <p className="text-green-500 grid justify-center mt-10 text-sm ">
                Already Registered?
              </p>
              <div className=" grid gap-4 place-items-center ">
                <div>
                  <button
                    className=" text-center bg-black-500 rounded hover:bg-green-500 hover:text-black text-green-500 border-2 py-[0.32rem] px-3 border-black "
                    onClick={loginSwitch}
                  >
                    Login Here
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </section>
  );
}
export { globalUserList};
export default App;
