const Text = ({first, second, third}:any) =>{
    return(
        <div className="leading-3">
            <p className="mt-6 text-[18px] font-bold">{first}</p>
            <p className="mt-6 text-[18px]">{second}</p>
            <p className="mt-6 text-[18px]">{third}</p>
        </div>
    )
}

export default Text