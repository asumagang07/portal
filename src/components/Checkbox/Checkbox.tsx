import React, { FC, useState } from "react";
import { TCheckboxProps } from "./types";

const Checkbox: FC<TCheckboxProps> = (props) => {
  const { className, checked = false, label } = props;

  const [isChecked, setChecked] = useState(checked);

  return (
    <div>
      <div className="flex items-center">
        <input
          onClick={() => setChecked(!isChecked)}
          checked={isChecked}
          id="checked-checkbox"
          type="checkbox"
          value=""
          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 "
        />
        <label
          htmlFor="checked-checkbox"
          className="ms-2 text-sm font-medium text-gray-900 "
        >
          {label}
        </label>
      </div>
    </div>
  );
};

export default Checkbox;
