import { useEffect, useState } from 'react'
import Text from '../../components/Text'
import Title from '../../components/Title'
import axios from 'axios'
import SpecialistsCard from './SpecialistsCard'

const Specialists = () => {
  const [search, setSearch] = useState('')
  const [doctors, setDoctors] = useState('')

  useEffect(() => {
    getDoctors()
  }, [])

  const getDoctors = async () => {
    const { data } = await axios.get('https://randomuser.me/api/')
    setDoctors(data.results)
    console.log(doctors)
  }

  const name = 'Pepito Perez'

  const infoDoctors = [
    {
      id: 1,
      name: 'Daniel Perez',
      specialty: 'Cardiologo',
      rating: 45,
      img: 'https://randomuser.me/api/portraits/med/men/57.jpg'
    },
    {
      id: 2,
      name: 'Miguel Sanchez',
      specialty: 'Neurologo',
      rating: 62,
      img: 'https://randomuser.me/api/portraits/med/men/86.jpg'
    },
    {
      id: 3,
      name: 'Pedro Lopez',
      specialty: 'Oftalmologo',
      rating: 54,
      img: 'https://hips.hearstapps.com/hmg-prod/images/portrait-of-a-happy-young-doctor-in-his-clinic-royalty-free-image-1661432441.jpg?crop=0.66698xw:1xh;center,top&resize=1200:*'
    },
    {
      id: 4,
      name: 'Juan Marcuay',
      specialty: 'Otorrino',
      rating: 80,
      img: 'https://randomuser.me/api/portraits/med/men/99.jpg'
    },  
    {
      id: 5,
      name: 'Fernando Loayza',
      specialty: 'Cardiologo',
      rating: 90,
      img: 'https://randomuser.me/api/portraits/med/men/82.jpg'
    },
    {
      id: 6,
      name: 'Fernaddo Loayza',
      specialty: 'Cardiologo',
      rating: 90,
      img: 'https://randomuser.me/api/portraits/med/men/85.jpg'
    },
    {
      id: 7,
      name: 'Fernanssdo Loayza',
      specialty: 'Cardiologo',
      rating: 90,
      img: 'https://randomuser.me/api/portraits/med/men/77.jpg'
    }
  ]

  const filteredList = infoDoctors.filter((item) => {
    return item.name.toLowerCase().startsWith(search.toLowerCase());
  });

  const handleSearch = (e: any) => {
    e.preventDefault()
    setSearch(e.target.innerHTML)
  }

  const handleBack = (e:any) => {
    e.preventDefault()
    setSearch('')
  }

  return (
    <div>
      <Title
        title={"Especialistas"}
      />
      <Text first={`Hola ${name} `} second={'Hola, Pepito Pérez. Ubica al doctor de tu preferencia y selecciona el horario.'} />
      <div>

        <form className="flex items-center">
          <label id="simple-search" className="sr-only">Search</label>
          <div className="relative w-full">
            <input type="text" id="simple-search"
              className="bg-black-50 border border-black text-black text-sm rounded block w-full pl-3 p-2.5  
            dark:bg-black-700 dark:border-black dark:placeholder-black-400 
            dark:text-zinc-500 dark:focus:ring-blue-500 dark:focus:border-blue-500 caret-buttonBg"
              placeholder="Escriba el nombre del especialista"
              required
            />
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="black" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"></path></svg>
            </div>
          </div>
        </form>

        <div className='pt-6 pb-6'>
          Especialistas por orden alfabetico
        </div>
        <div>
          <ul className="flex overflow-y-auto" id="filters">
            <li><a onClick={handleBack} className='pl-2 pr-2 text-slate-500 active:bg-white hover:text-primary-start' href="#">Todos</a></li>
            <li><a onClick={handleSearch} className='pl-2 pr-2 text-slate-500 active:bg-white hover:text-primary-start' href="#">A</a></li>
            <li><a onClick={handleSearch} className='pl-2 pr-2 text-slate-500 active:bg-violet-700 hover:text-primary-start ' href="#">B</a></li>
            <li><a onClick={handleSearch} className='pl-2 pr-2 text-slate-500 active:bg-violet-700 hover:text-primary-start' href="#">C</a></li>
            <li><a onClick={handleSearch} className='pl-2 pr-2 text-slate-500 active:bg-violet-700 hover:text-primary-start' href="#">D</a></li>
            <li><a onClick={handleSearch} className='pl-2 pr-2 text-slate-500 active:bg-violet-700 hover:text-primary-start' href="#">E</a></li>
            <li><a onClick={handleSearch} className='pl-2 pr-2 text-slate-500 active:bg-violet-700 hover:text-primary-start' href="#">F</a></li>
            <li><a onClick={handleSearch} className='pl-2 pr-2 text-slate-500 active:bg-violet-700 hover:text-primary-start' href="#">G</a></li>
            <li><a onClick={handleSearch} className='pl-2 pr-2 text-slate-500 active:bg-violet-700 hover:text-primary-start' href="#">H</a></li>
            <li><a onClick={handleSearch} className='pl-2 pr-2 text-slate-500 active:bg-violet-700 hover:text-primary-start' href="#">I</a></li>
            <li><a onClick={handleSearch} className='pl-2 pr-2 text-slate-500 active:bg-violet-700 hover:text-primary-start' href="#">J</a></li>
            <li><a onClick={handleSearch} className='pl-2 pr-2 text-slate-500 active:bg-violet-700 hover:text-primary-start' href="#">K</a></li>
            <li><a onClick={handleSearch} className='pl-2 pr-2 text-slate-500 active:bg-violet-700 hover:text-primary-start' href="#">L</a></li>
            <li><a onClick={handleSearch} className='pl-2 pr-2 text-slate-500 active:bg-violet-700 hover:text-primary-start' href="#">M</a></li>
            <li><a onClick={handleSearch} className='pl-2 pr-2 text-slate-500 active:bg-violet-700 hover:text-primary-start' href="#">N</a></li>
            <li><a onClick={handleSearch} className='pl-2 pr-2 text-slate-500 active:bg-violet-700 hover:text-primary-start' href="#">O</a></li>
            <li><a onClick={handleSearch} className='pl-2 pr-2 text-slate-500 active:bg-violet-700 hover:text-primary-start' href="#">P</a></li>
            <li><a onClick={handleSearch} className='pl-2 pr-2 text-slate-500 active:bg-violet-700 hover:text-primary-start' href="#">Q</a></li>
            <li><a onClick={handleSearch} className='pl-2 pr-2 text-slate-500 active:bg-violet-700 hover:text-primary-start' href="#">R</a></li>
            <li><a onClick={handleSearch} className='pl-2 pr-2 text-slate-500 active:bg-violet-700 hover:text-primary-start' href="#">S</a></li>
            <li><a onClick={handleSearch} className='pl-2 pr-2 text-slate-500 active:bg-violet-700 hover:text-primary-start' href="#">T</a></li>
            <li><a onClick={handleSearch} className='pl-2 pr-2 text-slate-500 active:bg-violet-700 hover:text-primary-start' href="#">U</a></li>
            <li><a onClick={handleSearch} className='pl-2 pr-2 text-slate-500 active:bg-violet-700 hover:text-primary-start' href="#">V</a></li>
            <li><a onClick={handleSearch} className='pl-2 pr-2 text-slate-500 active:bg-violet-700 hover:text-primary-start' href="#">W</a></li>
            <li><a onClick={handleSearch} className='pl-2 pr-2 text-slate-500 active:bg-violet-700 hover:text-primary-start' href="#">X</a></li>
            <li><a onClick={handleSearch} className='pl-2 pr-2 text-slate-500 active:bg-violet-700 hover:text-primary-start' href="#">Y</a></li>
            <li><a onClick={handleSearch} className='pl-2 pr-2 text-slate-500 active:bg-violet-700 hover:text-primary-start' href="#">Z</a></li>
          </ul>
        </div>
        {/* {
          infoDoctors.map((infoDoctor) => 
            <SpecialistsCard
              key={infoDoctor.id}
              valoracion={infoDoctor.rating}
              especialidad={infoDoctor.specialty}
              medico={infoDoctor.name}
              img={infoDoctor.img}
            />
        )} */}
        {
          filteredList.map((infoDoctorSearch) =>
            <SpecialistsCard
              key={infoDoctorSearch.id}
              valoracion={infoDoctorSearch.rating}
              especialidad={infoDoctorSearch.specialty}
              medico={infoDoctorSearch.name}
              img={infoDoctorSearch.img}
              />
        )}
      </div>
    </div>
  )
}

export default Specialists
