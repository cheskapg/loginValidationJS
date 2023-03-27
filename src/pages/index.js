import { useState } from "react";
import { useRouter } from "next/router";
function App({ list }) {
  const router = useRouter();
  function loginswitch() {
    router.push("/signup");
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
              <h3 className=" text-center mb-5 font-bold text-3xl hover:text-white text-green-500" onClick={loginswitch}>
                ENTER
              </h3>
            </div>
         
          </div>
        </div>
      </div>
    
    </section>
  );
}
export default App;
