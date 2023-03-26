
import { useState } from "react";
import { useRouter } from 'next/router';
export default function todo() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState({
    title: "",
    description: ""

  });
 
  const router = useRouter();
  function loginSwitch(){
    router.push('/login');
  }
  const [todoTab, setTodoTab] = useState(true);

 
  const titleChange = (e) => {
    setTodo({ ...todo, title: e.target.value });
  };
  const descriptionChange = (e) => {
    setTodo({ ...todo, description: e.target.value });
  };

  const addTodo = () => {
    if(todo["title"]===""){
      alert(" Title field empty");
    }
    else if(todo["description"]==="" ){
      alert(" Description field empty");
    } 
    else{
      if (todos.length > 0 && todos[todos.length - 1].title === "plus") {
        todos.pop();
      }
  
      setTodos([...todos, todo]);
      setTodos((currentList) => [
        ...currentList,
        { title: "plus", description: "" },
      ]);
      setTodo({ title: "", description: "" });
      setTodoTab(false);
    }
   
  };




  function switchDone() {
    setTodoTab(false);
  }
  function switchTodo() {
    setTodoTab(true);
  }

  return (
    <div className="grid grid-cols-1">
      <div className="px-5  mb-10 border border-green-500 ">
        <div className="mx-10  grid grid-cols-2">
          <div className="flex justify-start grid text-green-500 text-md px-5 py-5 font-semibold ">
            Scrum Board
          </div>
          <div onClick={loginSwitch} className="flex justify-end grid text-sm text-green-500 px-5 py-5 font-semibold ">
            Logout
          </div>
        </div>
      </div>
      <div>
        <div className="flex justify-start mx-10">
          <div className="mx-10">
            <div className="text-2xl font-bold text-green-500 mb-5">Boards</div>
          </div>

          {/* <button
            onClick={switchTodo}
            className="mt-3 shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
            type="button"
          >
            To Do List
          </button>
          <button
            onClick={switchDone}
            className="mt-3 ml-5 shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
            type="button"
          >
            Done
          </button> */}
        </div>

        {todoTab ? (
          <div className="mx-10">
            <div className="mx-10">
              <div className="grid-cols-4 gap-4 ">
                <div className="grid grid-cols-3 ">
                  <div class="grid border border-green-500 rounded-xl shadow">
                    <div className="text-lg text-sm text-green-500 font-semibold mx-3 mt-4">
                      <input
                        name="title"
                        value={todo.title}
                        placeholder="Board Title"
                        onChange={titleChange}
                        className=" pb-2 rounded-lg appearance-none border border-green-500 rounded w-full py-2 px-3 text-green-500 leading-tight focus:outline-none  text-sm focus:shadow-outline bg-black  placeholder:font-normal placeholder:text-sm placeholder:text-green-300"
                     
                        type="text"
                      />
                    </div>
                    <div className=" text-sm text-black  text-black mx-3 mt-5">
                      <textarea
                        id="message"
                        rows="4"
                        class="block p-2.5 w-full text-xs rounded-lg border text- border-green-500 bg-black placeholder:font-normal text-green-500 placeholder:text-green-300 placeholder:text-sm   border: none  
                        background-color:transparent
                        resize:none
                        focus:border-bg-black focus:borderfocus:ring-0  focus:border-black focus:ring-0"
                        placeholder="Enter a Description"
                        name="description"
                        value={todo.description}
                        onChange={descriptionChange}
                      ></textarea>
                    </div>
                    <div class="grid grid-cols-2 flex items-center mb-5">
                      <button
                        onClick={switchDone}
                        className="mt-3 mx-4 shadow bg-black-500 hover:bg-black focus:shadow-outline  text-green-500 focus:outline-none 
                          py-1 px-10 rounded"
                        type="button"
                      >
                        Cancel
                      </button>

                      <button
                        onClick={addTodo}
                        className="mt-3 mx-4 shadow bg-black hover:bg-green-500 hover:text-black focus:shadow-outline  text-green-500 focus:outline-none 
                          py-1 px-10 rounded"
                        type="button"
                      >
                        Add
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div>
            <div className="flex justify-center flex  items-center">
              <div className="grow shrink-0 w-[500px] ">
                <div className="pt-5 "></div>
                <div className="justify-center mx-10">
                  <ul className="grid grid-cols-3 gap-7 mx-10">
                    {todos.map((todo, index) => {
                      return (
                        <section>
                          
                          {(todo.title==="plus") ? (
                            <li className="text-sm pt-2 flex">
                              <div class="flex w-full px-5 py-5 flex justify-center border border-grey rounded-xl shadow  text-green-500"
                              onClick={switchTodo}>
                                <div id="plus" className=" mb-3 text-bold text-2xl">+</div>
                            
                              </div>
                            </li>
                          ) : (
                            <li className="text-sm pt-2 flex" key={index}>
                             <div class="flex w-full px-5 py-3 border border-grey rounded-xl shadow ">
                              <div className="grid grid-cols-1 mb-3">
                                <h5 class=" font-semibold tracking-tight text-md dark:text-black">
                                  {todo.title}
                                </h5>

                                <p class="mb-3 font-regular  tracking-tight text-xs dark:text-green-500">
                                  {todo.description}
                                </p>
                              </div>
                            </div> 
                         
                          </li>
                          )}
                        </section>
                      );
                    })}
                  </ul>
                  {/* <div className="justify-center mx-10 grid grid-cols-3">
                    <li className="text-sm pt-2 flex">
                      <div class="flex w-full px-5 py-3 flex justify-center border border-grey rounded-xl shadow ">
                        <div className=" text-bold text-2xl">+</div>
                      </div>
                    </li>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
