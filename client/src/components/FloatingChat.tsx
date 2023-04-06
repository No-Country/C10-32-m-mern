import React from 'react'
import IconMessage from '../icons/IconMessage'

const FloatingChat = () => {
    return (
        <div className="fixed bottom-0 right-0 p-4">
            <button className="bg-[#1C98F7] text-[white] font-bold py-2 px-4 rounded-full">
                <IconMessage/>
            </button>
        </div>
    )
}

export default FloatingChat