import React, { useId } from "react";

function InputBox({
  label,
  amount,
  amountChange,
  currencyChange,
  currencyOptions = [],
  selectCurrency,
  amountDisabled = false,
  currencyDisabled = false,
}) {
  const amountInputId = useId();

  return (
    <div className="flex flex-col gap-4 p-4 bg-white shadow-md rounded-lg w-full max-w-md">
      <label className="text-gray-700 font-semibold" htmlFor={amountInputId}>
        {label}
      </label>
      <div>
        <input
          id={amountInputId}
          type="number"
          placeholder="Amount"
          disabled={amountDisabled}
          value={amount}
          onChange={(e) => amountChange && amountChange(Number(e.target.value))}
          className="w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-blue-400 focus:outline-none"
        />
      </div>
      <div>
        <select
          value={selectCurrency}
          disabled={currencyDisabled}
          onChange={(e) => currencyChange && currencyChange(e.target.value)}
          className="w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-blue-400 focus:outline-none"
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox