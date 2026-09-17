import { useEffect, useState } from "react"

function useCurrencyInfo (currency : number) {
  
  const [data, setData] = useState(null)

  useEffect(() => {
    fetch(`https://v6.exchangerate-api.com/v6/d6f1d4e9017ac0aba1bced00/latest/${currency}`)
     .then((res) => res.json())
     .then((res) => setData(res.conversion_rates))
     console.log(data);
     
  }, [currency])
console.log(data);

  return data
}

export default useCurrencyInfo;