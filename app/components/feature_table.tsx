import { ComponentPropsWithRef, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface FeatureTableProps extends ComponentPropsWithRef<"table"> {
  tableHead?: ReactNode;
  tableBody?: ReactNode;
}
export function FeatureTableRoot({
  className,
  tableHead,
  tableBody,
  children,
  ...otherProps
}: FeatureTableProps) {
  return (
    <table
      className={twMerge("bg-feature-table border-separate w-full", className)}
      {...otherProps}
    >
      <thead>{tableHead}</thead>
      <tbody>{tableBody || children}</tbody>
    </table>
  );
}

interface FeatureTableRowProps extends ComponentPropsWithRef<"tr"> {}
export function FeatureTableRow({ className, ...otherProps }: FeatureTableRowProps) {
  return (
    <tr
      className={twMerge(
        "grid grid-cols-[repeat(2,minmax(150px,1fr))] md:grid-rows-1 md:grid-cols-[180px_1fr_1fr] py-4 md:py-6 gap-x-5 gap-y-1 border-b last-of-type:border-b-0",
        className
      )}
      {...otherProps}
    />
  );
}

interface FeatureTableColumnProps extends ComponentPropsWithRef<"td"> {
  type?: "header" | "cell";
}

export function FeatureTableColumn({ type, className, ...otherProps }: FeatureTableColumnProps) {
  const columnClassName = "text-left text-sm md:text-base";

  if (type === "header")
    return <th className={twMerge("font-bold", columnClassName, className)} {...otherProps} />;

  return (
    <td
      className={twMerge("row-start-2 md:row-start-auto text-text/70", columnClassName, className)}
      {...otherProps}
    />
  );
}

const FeatureTable = { Root: FeatureTableRoot, Column: FeatureTableColumn, Row: FeatureTableRow };
export default FeatureTable;
