import { useState } from "react";
import BudgetHeader from "../layout/header";
import { Card, CardContent, CardDescription, CardHeader } from "../ui/card";
import { Input } from "../ui/input";
import type { User } from "../models/user";
import { CalendarComponent } from "../datepicker/datepicker";
import { Button } from "../ui/button";

const RegisterPageView = () => {
  const [user, setUser] = useState<User>();
  return (
    <div className="flex flex-col justify-start items-center gap-5">
      <BudgetHeader />
      <div>
        <Card className="flex flex-col text-center">
          <CardHeader className="font-bold">Registration</CardHeader>
          <CardContent>
            <form className="grid sm:grid-cols-[auto_auto] justify-items-center items-center gap-5">
              <div className="flex flex-col gap-1">
                <label className="justify-self-start">First Name</label>
                <Input className="w-3xs" />
              </div>
              <div className="flex flex-col gap-1">
                <label className="justify-self-start">Last Name</label>
                <Input className="w-3xs" />
              </div>
              <div className="flex flex-col gap-1">
                <label className="justify-self-start">Email</label>
                <Input className="w-3xs" />
              </div>
              <div className="flex flex-col gap-1">
                <label className="justify-self-start">Country</label>
                <Input className="w-3xs" />
              </div>
              <div className="flex flex-col gap-1">
                <label className="justify-self-start">Password</label>
                <Input className="w-3xs" />
              </div>
              <div className="flex flex-col gap-1">
                <label className="justify-self-start">Confirm Password</label>
                <Input className="w-3xs" />
              </div>
              <div className="col-span-2">
                <CalendarComponent user={user} setUser={setUser} />
              </div>
              <div className="flex col-span-2 gap-5">
                <Button className="w-30">Register</Button>
                <Button className="w-30 bg-red-600">Cancel</Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default RegisterPageView;
