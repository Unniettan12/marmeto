const DateStamp = ({date}) => {
    
    const month = [
        'Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'
    ]

    const today = new Date()
//    console.log(today.getDate(),date.day)
    
    if(today.getFullYear()===date.year)
        if(today.getMonth()+1===date.month)
            if(today.getDate()===date.day)
                {   
                    // console.log(today.getHours()-date.hour)
                    const hoursPassed = today.getHours()-date.hour
                    return(
                        <div className="text-sm text-white/50">
                            ·{hoursPassed}h
                        </div>
                    )
                }
            else
                return(
                    <div className="text-sm text-white/50">
                        ·{today.getDate} {month[today.getMonth()+1]}
                    </div>
                )
        else
            return(
                <div className="text-sm text-white/50">
                    ·{today.getDate} {month[today.getMonth()+1]}
                </div>
            )
    else
        return(
            <div className="text-sm text-white/50">
                ·{today.getDate()} {month[today.getMonth()]}
            </div>
        )
            


}


export default DateStamp