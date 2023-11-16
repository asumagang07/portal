import React, { createElement } from "react";
import cn from "classnames";

export interface CellProps {
  cellType?: "td" | "th";
  cellClass?: string;
  children?: React.ReactNode | any;
}

const Cell = React.forwardRef<
  HTMLTableCellElement,
  React.TdHTMLAttributes<HTMLTableCellElement> & CellProps
>(function TableCell(props, ref) {
  const { className, children, cellType = "td", cellClass, ...other } = props;

  return createElement(
    cellType,
    { className: cn(cellClass, "px-4 py-2", className), ref: ref, ...other },
    children
  );
});

export default Cell;
