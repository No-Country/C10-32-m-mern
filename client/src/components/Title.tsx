const Title = ({title, color, icon}:any) =>{
    return(
        <div className={`flex justify-between items-center ${color} text-[#FFFFFF] rounded-2xl h-[54px] py-2 px-7`}>
            {icon}
            <h2 className="ml-5" >{title}</h2>
        </div>
    )
}

export default Title