import React,{useId} from "react";

function InputBox({
  label,
  amount,
  onamountChange,
  oncurrencyChange,
  currencyoptions = [],
  selectedcurrency="usd",
  amountdisabled = false,
  currencydisabled = false,
  className = "",

 }) {
const amountinputId = useId();

  return (
   <div className={`bg-gray-100 p-4 rounded-lg shadow-md text-sm flex *: flex-col ${className}`}>
    <div className="w-1/2">
     <label htmlFor={amountinputId} className="block text-gray-700 font-medium mb-2">
       {label}
     </label>
     <input
      id={amountinputId}
      placeholder="Enter amount"
       type="number"
       value={amount}
       onChange={(e) => onamountChange && onamountChange(parseFloat(e.target.value))}
       disabled={amountdisabled}
       className="border border-gray-300 rounded px-2 py-1"
     />
     </div>
     <div className="w-1/2 mt-4">
     <p className="text-gray-700 font-medium mb-2">Currency Type</p>
      <select
        id={currencySelectId}
        placeholder="Select currency"
        value={selectedcurrency}
        onChange={(e) => oncurrencyChange && oncurrencyChange(e.target.value)}
        disabled={currencydisabled}
        className="border border-gray-300 rounded px-2 py-1"
      >
        {currencyoptions.map((currency) => (
          <option key={currency} value={currency}>
            {currency.toUpperCase()}
          </option>
        ))}
      </select>
      </div>
    </div>
  )
}
export default InputBox;