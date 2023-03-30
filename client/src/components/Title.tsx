const Title = ({title, color}:any) =>{
    return(
        <div className={`flex justify-between items-center ${color} text-[#FFFFFF] rounded-2xl h-[54px] py-2 px-7`}>
            <img src="https://icongr.am/feather/calendar.svg?size=33&color=ffffff" alt="" />
            <h2>{title}</h2>
        </div>
    )
}

export default Title