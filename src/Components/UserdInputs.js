

export const Message = ({label, placeholder}) => {
    return (
        <div className="text-sm w-full">
            <label className="text-border font-semibold">{label}</label>
            <textarea className="w-full h-40 mt-2 bg-main p-6 border border-border rounded" placeholder={placeholder}></textarea>
        </div>
    )
}

export const Select = ({label, options, onChange}) => {
    return (
        <>
           <label className="text-border font-semibold">{label}</label>
           <select className="w-full mt-2 px-6 py-4 text-text bg-main border border-border rounded" onChange={onChange}>
            {options.map((option, index) => (
                <option key={index} value={option.value}>
                    {option.title}
                </option>
            ))}
           </select>
        </>
    )
}

export const Input = ({label, placeholder, type, bg}) => {
    return (
        <div className="text-sm w-full">
           <label className="text-border font-semibold">{label}</label>
           <input type={type} required placeholder={placeholder}
                  className={`w-full text-sm mt-2 p-4 text-white border border-border ${
                    bg ? 'bg-main' : 'bg-dry'
                  }`}        
            />
        </div>
    )
}