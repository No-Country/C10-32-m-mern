import axios from "axios";
import { useEffect, useState } from "react";


function Dropdown({header, }:any) {
  const url: string = "https://jsonplaceholder.typicode.com/users";
  const [response, setResp] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users').then((res) => setResp(res.data));
    console.log(response);
    
  }, []);
  return (
    <div className="mx-auto max-w-lg lg:w-full w-1/3 my-6">
              <div className="divide-y divide-gray-100 overflow-hidden rounded-[3px] border border-gray-200 bg-white shadow-sm">
                <details className="group text-[13px]" >
                  <summary className="flex cursor-pointer list-none items-center justify-between p-4  font-bold group-open:border-b group-open:border-b-gray-100 bg-lightPurple">
                    {header}
                    <div className="text-secondary-500">
                      {/* <p>Agendar</p> */}
                      {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="block h-5 w-5 transition-all duration-300 group-open:rotate-180">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                      </svg> */}
                    </div>
                  </summary>
                  <div className="p-6">
                    <select name="" className="block w-full rounded-[3px] mx-auto max-w-xs p-4 my-4 border border-gray-100 shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 focus:bg-lightPurple ">
                      <option >Seleccione un Especialista</option>
                      {response?.map((i) => (
                      <option key={i.id} value="" className="bg-lightPurple">{i.name}</option>
                    ))}
                    </select>

                    <button className="w-full bg-darkPurple h-[45px] rounded-[4px] text-[13px] text-white font-bold">
                      AGENDAR
                    </button>
                  </div>
                </details>
              </div>
            </div>
  );
}

export default Dropdown;