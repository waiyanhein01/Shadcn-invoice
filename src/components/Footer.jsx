import React from "react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <div className=" mt-auto mb-5">
      <div className=" flex justify-end gap-3">
        <Button>Manage Inventory</Button>
        <Button className=" bg-neutral-50 text-neutral-950 hover:text-neutral-50">Print</Button>
      </div>
    </div>
  );
};

export default Footer;
