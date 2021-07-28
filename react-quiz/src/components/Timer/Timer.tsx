const Timer = ({time}:{time:number}) => {
return (
    <>
    <div className="text-blue-100 filter drop-shadow-md md:drop-shadow-xl">
        <div className="text-1xl text-center flex w-full items-center justify-center">
            <p className="md:text-2xl mx-1 color-blue">Time left:</p>
            <div className="w-10 md:w-20 mx-1 p-2 bg-white text-blue-500 rounded-lg">
                <div className="font-mono leading-none" x-text="days">00</div>
                <div className="font-mono uppercase text-sm leading-none">Days</div>
            </div>
            <div className="w-10 md:w-20 mx-1 p-2 bg-white text-blue-500 rounded-lg">
                <div className="font-mono leading-none" x-text="hours">00</div>
                <div className="font-mono uppercase text-sm leading-none">Hrs</div>
            </div>
            <div className="w-10 md:w-20 mx-1 p-2 bg-white text-blue-500 rounded-lg">
                <div className="font-mono leading-none" x-text="minutes">00</div>
                <div className="font-mono uppercase text-sm leading-none">Mins</div>
            </div>
            <div className="md:text-2xl mx-1 color-blue">and</div>
            <div className="w-10 md:w-20 mx-1 p-2 bg-white text-blue-500 rounded-lg">
                <div className="font-mono leading-none" x-text="seconds">{time}</div>
                <div className="font-mono uppercase text-sm leading-none">Secs</div>
            </div>
        </div>
    </div>
    </>
)
}

export default Timer;