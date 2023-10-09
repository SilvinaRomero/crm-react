function Error({ children }) {
    return (
        <div 
        className="bg-red-200 w-1/2 border-red-500 border-l-2 border-r-2 text-red-600 font-bold uppercase p-4 mb-6 rounded-lg flex items-center justify-center mx-auto"
        >
            {children}
        </div>
    )
}

export default Error
