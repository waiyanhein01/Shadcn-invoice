import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "@/components/ui/table";

const EmptyState = () => {
  return (
    <div>
      <TableRow>
            <TableCell
              colSpan={5}
              className="whitespace-nowrap text-center font-medium text-gray-900 dark:text-white"
            >
              There is no record.
            </TableCell>
          </TableRow>
    </div>
  );
};

export default EmptyState;
