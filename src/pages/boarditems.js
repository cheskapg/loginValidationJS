import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";

import { titleGlobal  } from "./boards";
import { SemanticClassificationFormat } from "typescript";
import { title } from "process";
export default function todo() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState({
    title: "",
  });

  const [addingCard, setAddingCard] = useState({
    id: "",
    isAdding: "",
  
  });
  const inputRef = useRef(null);

  const [perCard, setPerCard] = useState([]);
  const [cards, setCards] = useState([]);

  const [item, setItem] = useState({
    id: "",
    card: "",
    description: "",
  });

  // useEffect(() => {
  //   setTodos((currentList) => [

  //     { title: "plus", description: "" }, ...currentList
  //   ]);
  // }, []);

  const router = useRouter();
  function loginSwitch() {
    router.push("/login");
  }
  const [todoTab, setTodoTab] = useState(true);

  const [boardStatus, setBoardStatus] = useState(false);

  const titleChange = (e) => {
    setTodo({ ...todo, title: e.target.value });
  };

  const cardTitleChange = (e) => {
    setItem({ ...item, card: e.target.value });
  };
  const descriptionChange = (e) => {
    setItem({ ...item, description: e.target.value });
  };
  const idChange = (e) => {
    setItem({ ...item, id: e.target.value });
  };
  useEffect(() => {
    setItem({...item,id: todo.title})
  }, [ todo.title]);
  const [identify, setId] = useState("");
  const addTodo = () => {
   
    if (todo["title"] === "") {
      alert(" Title field empty");
    } else {
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
  const addCardList = (todoTitle) => {
    setItem({  id:inputRef.current.value,...item });
    setItem({  id: todoTitle ,...item});
    setId(inputRef.current.value);
    // setItem({ ...item, id: identify });
    if (item["card"] === "") {
      alert(" Card Title field empty");
    }
     else {
      if (cards.length > 0 && cards[cards.length - 1].card === "add") {
        cards.pop();
      }
      
      setCards([...cards, item]);
      //   setCards((currentList) => [
      //     ...currentList,
      //     { card: "add", description: "" },
      //   ]);
      setItem({ card: "", description: "" });
      setItem({ id: identify,...item});
     
      setAddingCard(false);
      console.log(item["id"]);
      console.log(inputRef.current.value);
    }
    setId(document.getElementById('id').value);
    setItem({ card: "", description: "" });
  };

  function switchDone() {
    setTodoTab(false);
    if (todos.length > 0 && todos[todos.length - 1].title === "plus") {
      todos.pop();
    }
    setTodos((currentList) => [
      ...currentList,
      { title: "plus", description: "" },
    ]);
  }
  function addCard() {
      setAddingCard({id:identify, ...addingCard});
    setItem({ card: "", description: "" });
    setAddingCard(true);

        console.log("clil");
  }
  function canceladdcard() {
    setAddingCard({ ...addingCard, isAdding:false});
    console.log(addingCard);
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
          <div
            onClick={loginSwitch}
            className="flex  justify-end grid text-sm text-green-500 px-5 py-5 font-semibold "
          >
            <p className="cursor-pointer">Logout</p>
          </div>
        </div>
      </div>
      <div>
        <div className="flex justify-start mx-10">
          <div className="mx-10">
            {boardStatus ? (
              <div className="text-2xl font-bold text-green-500 mb-5">
                {todo.title}
              </div>
            ) : (
              <div className="text-2xl font-bold text-green-500 mb-5">
                {titleGlobal}
              </div>
            )}
          </div>
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
                    <div className=" text-sm text-black  text-black mx-3 mt-5"></div>
                    <div class="grid grid-cols-2 flex items-center mb-5">
                      <button
                        onClick={switchDone}
                        className="mt-3 mx-4 shadow bg-black-500 hover:bg-green-500 hover:text-black focus:shadow-outline  text-green-500 focus:outline-none 
                          py-1 px-10 rounded"
                        type="button"
                      >
                        Cancel
                      </button>

                      <button
                        onClick={addTodo}
                        className="mt-3 mx-4 shadow bg-green-500 hover:bg-black hover:text-green-500 focus:shadow-outline  text-black focus:outline-none 
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
                          {todo.title === "plus" ? (
                            <li className="text-sm pt-2 flex">
                              <div
                                class="flex w-full px-5 py-5 flex justify-center border border-green-500 rounded-xl shadow  dark:text-green-500"
                                onClick={switchTodo}
                              >
                                <div
                                  id="plus"
                                  className=" mb-3 text-bold text-2xl"
                                >
                                  +
                                </div>
                              </div>
                            </li>
                          ) : (
                            <li className="text-sm pt-2 grow" key={index}>
                              <div class="flex w-full px-5 py-3 border  text-green-500 border-green-500 rounded-xl shadow ">
                                <div className="grid grid-cols-1 grow mb-3">
                                  <div className="grow ">
                                    <h5 class=" font-semibold text-green-500  tracking-tight text-md">
                                      {todo.title}
                                    </h5>

                                    <ul className="grid grid-cols-1 mx-2">
                                      {cards.map((item, index) => {
                                        return (
                                          <section>
                                            {todo.title === item.id ? (
                                              <li
                                                className="text-sm pt-2 grow"
                                                key={index}
                                              >
                                                <div className="grid grid-cols-1 pl-3 border border-green-500 mb-3">
                                                  <h5 class=" mb-2 mt-2 font-semibold text-green-500  tracking-tight text-md">
                                                 {item.id }  {item.card}
                                                  </h5>

                                                  <p class="mb-3 font-regular  tracking-tight text-md dark:text-green-500">
                                                    {item.description}
                                                  </p>
                                                </div>
                                              </li>
                                            ) : (
                                              <section></section>
                                            )}
                                          </section>
                                        );
                                      })}
                                    </ul>
                                  </div>

                                  {item.card !== "add" && addingCard.id === todo.title &&
                                  addingCard.isAdding === false ? (
                                    <p
                                      class="mb-1 mt-4 font-regular  tracking-tight text-md dark:text-green-500"
                                      onClick={addCard}
                                    >
                                      + Add Card
                                    </p>
                                  ) : (
                                    <div className="grid-cols-1 gap-4 ">
                                      <div class="grid border border-green-500 rounded-xl shadow">
                                        <div className="text-lg text-sm text-green-500 font-semibold mx-3 mt-4">
                                          <input
                                            id="id"
                                            ref=    {inputRef}
                                            defaultValue={todo.title}
                                            placeholder="Board Title"
                                            type="hidden"
                                            onChange={idChange}
                                            className=" pb-2 rounded-lg appearance-none border border-green-500 rounded w-full py-2 px-3 text-green-500 leading-tight focus:outline-none  text-sm focus:shadow-outline bg-black  placeholder:font-normal placeholder:text-sm placeholder:text-green-300"
                                            type="text"
                                          />
                                          <input
                                            name="title"
                                            value={item.title}
                                            placeholder="Board Title"
                                            onChange={cardTitleChange}
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
                focus:border-bg-black focus:borderfocus:ring-0  focus:border-black focus:ring-0 
                resize-none"
                                            placeholder="Enter a Description"
                                            name="description"
                                            value={item.description}
                                            onChange={descriptionChange}
                                          ></textarea>
                                        </div>
                                        <div class="grid grid-cols-2 flex items-center mb-5">
                                          <button
                                            //   onClick={}
                                            className="mt-3 mx-4 shadow bg-black-500 hover:bg-green-500 hover:text-black focus:shadow-outline  text-green-500 focus:outline-none 
                  py-1 px-10 rounded"
                                            onClick={canceladdcard}
                                            type="button"
                                          >
                                            Cancel
                                          </button>

                                          <button
                                            onClick={() => addCardList(todo.title)}
                                            className="mt-3 mx-4 shadow bg-green-500 hover:bg-black hover:text-green-500 focus:shadow-outline  text-black focus:outline-none 
                  py-1 px-10 rounded"
                                            type="button"
                                          >
                                            Add
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                  )}
                                </div>
                              </div>
                            </li>
                          )}
                        </section>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
