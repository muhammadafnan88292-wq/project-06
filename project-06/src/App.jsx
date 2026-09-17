import { useState } from 'react'

import { InputBox } from './components'
import useCurrencyInfo from './hooks/useCurrencyInfo'

 function Home() {
  const [amount, setAmount] = useState(0)
  const [from , setFrom] = useState('usd')
  const [to , setTo] = useState('eur')
  const [convertedAmount, setConvertedAmount] = useState(0)
  const currencyInfo = useCurrencyInfo(from)
  const options = Object.keys(currencyInfo)
  const swapCurrency = () => {
    const temp = from
    setFrom(to)
    setTo(temp)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }

  
  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to])
  }


  return (
   <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
    <style>
    {{
      backgroundImage: `url('https://c8.alamy.com/comp/2BD7CYE/stock-exchange-background-abstract-finance-wallpaper-blurred-traders-office-2BD7CYE.jpg')`,
      }}
    </style>
    <div className="w-full">
    <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
      <h1 className="text-2xl font-bold mb-4">Currency Converter</h1>
      <from onSubmit={(e) => { e.preventDefault(); convert(); }}>
        <div className="w-full mb-1">
          <InputBox
            label="from"
            amount={amount}
            currencyoptions={options}
            oncurrencyChange={(currency) => setAmount(currency)}
            selectedcurrency={from}
            />
            </div>
            <div className="w-full relative h-0.5">
              <button 
              className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-500 text-white px-4 py-2 rounded-full shadow-md hover:bg-blue-600 transition-colors"
              onClick={swapCurrency}
              >
                Swap
              </button>
            </div>
            <div className="w-full mb-4 mt-1">
              <InputBox
                label="to"
                amount={convertedAmount}
                currencyoptions={options}
                oncurrencyChange={(currency) => setTo(currency)}
                selectedcurrency={to}
                amountdisabled={true}
                />
            </div>
            <button
              className="bg-green-500 text-white px-4 py-2 rounded-full shadow-md hover:bg-green-600 transition-colors"
              onClick={convert}
            >
              Convert {amount} {from.toUpperCase()} = {convertedAmount} {to.toUpperCase()}
            </button>
          </from>
        </div>
      </div>
    </div>

  )
}

export default Home;
