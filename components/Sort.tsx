"use client";

import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { usePathname, useRouter } from "next/navigation";
import { sortTypes } from "@/constants";

const Sort = () => {
  const pathname = usePathname();
  const router = useRouter();

  const handleSort = async (value: string) => {
    router.push(`${pathname}?sort=${value}`);
  };

  return (
    <Select onValueChange={handleSort} defaultValue={sortTypes[0].value}>
      <SelectTrigger className="sort-select">
        <SelectValue placeholder={`${sortTypes[0].value}`} />
      </SelectTrigger>
      <SelectContent className="sort-select-content">
        {sortTypes.map((option) => (
          <SelectItem
            key={option.label}
            value={option.value}
            className="shad-select-item"
          >
            {option.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default Sort;
