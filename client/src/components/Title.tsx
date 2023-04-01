const Title = ({title, color}:any) =>{
    return(
        <div className={`flex justify-around items-center text-[22px] text-[#000000] h-[54px] py-2 px-7`}>
            <h2>{title}</h2>
        </div>
    )
}

export default Title