

import React from "react"

interface Props {
    handleSubmit: () => void;
}

const Form: React.FC<Props> = ({
    handleSubmit, 
}) => {
    return (
        

        <form className="mx-auto max-w-sm" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1">
            <div className="w-full">
                <label htmlFor="number_of_digits" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Number of Digits</label>
                <input type="number" id="numberDigits" placeholder="1" min="1" required
                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" />
            </div>
            <div className="w-full mb-4">
                <label htmlFor="number_of_problems" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Number of Problems</label>
                <input type="number" id="numberProblems" placeholder="10" min="1" required
                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" />
            </div>
            <div className="w-full">
                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
            </div>
        </div>
        </form>
    )
}

export default Form; 