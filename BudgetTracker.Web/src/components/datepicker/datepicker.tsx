import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@radix-ui/react-popover";
import { useState } from "react";
import type { User } from "../models/user";
import { Button } from "../ui/button";
import { ChevronDownIcon } from "lucide-react";
import { Calendar } from "../ui/calendar";

type PropsCalendar = {
  user: User | undefined;
  setUser: React.Dispatch<React.SetStateAction<User | undefined>> | undefined;
};

export const CalendarComponent = ({ user, setUser }: PropsCalendar) => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <div className="flex flex-col gap-3">
      <label htmlFor="date" className="px-1">
        Date of Birth
      </label>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant={"outline"}
            id="date"
            className="w-48 justify-between font-normal"
          >
            {user?.dateOfBirth
              ? user.dateOfBirth.toLocaleDateString()
              : "Select Date"}
            <ChevronDownIcon />
          </Button>
        </PopoverTrigger>
        <PopoverContent
          className="w-auto overflow-hidden p-0 bg-white"
          align="start"
        >
          <Calendar
            className="bg-white"
            required
            mode="single"
            selected={user?.dateOfBirth}
            captionLayout="dropdown"
            onSelect={(sel: Date) => {
              if (setUser && sel) {
                setUser((prev) =>
                  prev ? { ...prev, dateOfBirth: sel } : prev
                );
                setOpen(false);
              }
            }}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
};
