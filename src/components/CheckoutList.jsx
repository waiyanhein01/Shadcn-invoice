import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import EmptyState from "./EmptyState";

const items = [
  {
    id: 1,
    name: "Apple",
    price: 250,
    cost: 300,
  },
  {
    id: 2,
    name: "Orange",
    price: 250,
    cost: 300,
  },
  {
    id: 3,
    name: "Mango",
    price: 250,
    cost: 300,
  },
  {
    id: 4,
    name: "Banana",
    price: 250,
    cost: 300,
  },
];

const CheckoutList = () => {
  return (
    <div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]"></TableHead>
            <TableHead className="text-right">Products</TableHead>
            <TableHead className="text-right">Price</TableHead>
            <TableHead className="text-right">Cost</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {/* {products.length === 0 && (
            <TableRow>
              <TableCell
                colSpan={5}
                className="whitespace-nowrap text-center font-medium text-gray-900 dark:text-white"
              >
                There is no record.
              </TableCell>
            </TableRow>
          )} */}

          {items.map(({ id, name, price, cost }) => (
            <TableRow key={id}>
              <TableCell className="font-medium">{id}</TableCell>
              <TableCell className="text-right">{name}</TableCell>
              <TableCell className="text-right">${price}</TableCell>
              <TableCell className="text-right">${cost}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow className=" bg-slate-200">
            <TableCell colSpan={3}>Total</TableCell>
            <TableCell className="text-right">$1200.00</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
};

export default CheckoutList;
