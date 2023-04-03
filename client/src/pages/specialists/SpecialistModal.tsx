import Date from "../../icons/Date"
import Location from "../../icons/Location"


const SpecialistModal = ({setModal, modal, medico, especialidad, valoracion, img}:any) => {

  const handleSelect = (e:any) => {
    e.stopPropagation();
    console.log('click modal')
  }

  const handleclose = (e:any) => {
    e.stopPropagation();
    setModal(!modal)
  }

  return (
    <div className="modal fixed w-full h-full top-0 left-0 flex items-center justify-center">
      <div className="modal-overlay absolute w-full h-full bg-[#E9F3FF]"></div>
      <div className="modal-container bg-[#fff] w-11/12 md:max-w-md shadow-lg z-50 overflow-y-auto">
        <div className="pt-2 mx-2">
          <div className="flex items-center justify-between dark:border-gray-600">
            <h3 className="text-xl pb-2 font-medium text-[#4B4B4B]">
              Especialista
            </h3>
            <button onClick={handleclose} type="button" className="text-[#4B4B4B] border-[#000] rounded-full text-sm ml-auto inline-flex items-center" data-modal-hide="small-modal">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24"><path fill="currentColor" d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10Zm0-2a8 8 0 1 0 0-16a8 8 0 0 0 0 16Zm0-9.414l2.828-2.829l1.415 1.415L13.414 12l2.829 2.828l-1.415 1.415L12 13.414l-2.828 2.829l-1.415-1.415L10.586 12L7.757 9.172l1.415-1.415L12 10.586Z" /></svg>
            </button>
          </div>
          <hr />
          <div className="my-4 pl-4 pr-4 text-center">
            <img className='rounded-full mx-auto w-32 h-32' src={img} />
            <h3 className="text-gray-900 font-bold text-base" >Dr. {medico}</h3>
            <p>{especialidad}</p>
          </div>
          <div className="my-4 pl-4 pr-4 flex flex-col">
            <div className="flex">
              <Location />&nbsp;  Sede 1 Consultorio 3:
            </div>
            <p>&nbsp; &nbsp; &nbsp;  Arribeños 2393</p>
            <div className="flex">
              <Date />&nbsp;  Horario: 11:30 am - 11:00 pm
            </div>
            <div className="flex items-center justify-center m-4">
              <svg aria-hidden="true" className="w-6 h-6 text-yellow-400" fill="#4285F4" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
              <svg aria-hidden="true" className="w-6 h-6 text-yellow-400" fill="#4285F4" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Second star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
              <svg aria-hidden="true" className="w-6 h-6 text-yellow-400" fill="#4285F4" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Third star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
              <svg aria-hidden="true" className="w-6 h-6 text-yellow-400" fill="gray" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fourth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
              <svg aria-hidden="true" className="w-6 h-6 text-gray-300 dark:text-gray-500" fill="gray" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fifth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
              <p className="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">{valoracion} Valoraciones</p>
            </div>
          </div>
        </div>
        <div className='ml-2 mr-2 mt-2 mb-4 max-w-md'>
          <button onClick={handleSelect} type='button' className='w-full mb-4 rounded-sm text-black bg-gray-600 bg-[#C4C4C4] hover:bg-[#b3b2b2]'>Seleccionar</button>
        </div>
      </div>
    </div>

  )
}

export default SpecialistModal
