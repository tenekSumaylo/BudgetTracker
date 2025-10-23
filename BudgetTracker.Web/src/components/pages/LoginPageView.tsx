import BudgetHeader from "../layout/header";
import type { Login } from "../models/loginCredentials";
import { Button } from "../ui/button";
import { useState, type ChangeEvent, type FormEvent } from "react";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Input } from "../ui/input";

const LoginPageView = () => {
  const initialLogin: Login = {
    email: "",
    password: "",
  };

  const handleLogin = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLogin(initialLogin);
  };

  const [login, setLogin] = useState<Login>(initialLogin);

  return (
    <div className="flex flex-col items-center gap-10">
      <header>
        <BudgetHeader />
      </header>
      <section className="flex flex-col">
        <Card className="w-md">
          <CardHeader>
            <CardTitle>Login to your account</CardTitle>
            <CardDescription>
              Enter your credentials below to login
            </CardDescription>
            <CardAction>
              <Button variant="link">Sign up</Button>
            </CardAction>
          </CardHeader>
          <CardContent>
            <form
              className="flex items-center flex-col gap-5"
              onSubmit={handleLogin}
            >
              <div className="flex flex-col gap-3">
                <label className="font-bold pl-3">Email</label>
                <Input
                  className="w-sm"
                  placeholder="Enter your email"
                  value={login.email}
                  onChange={(event: ChangeEvent<HTMLInputElement>) =>
                    setLogin((cred) => ({
                      ...cred,
                      email: event.target.value,
                    }))
                  }
                />
              </div>
              <div className="flex flex-col gap-3">
                <label className="font-bold pl-3">Password</label>
                <Input
                  className="w-sm"
                  placeholder="Enter your password"
                  type="password"
                  value={login.password}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setLogin((cred) => ({
                      ...cred,
                      password: e.target.value,
                    }))
                  }
                />
              </div>
              <Button className="w-xs">Submit</Button>
              <label className="text-sm underline">Forgot password</label>
            </form>
          </CardContent>
        </Card>
      </section>
    </div>
  );
};

export default LoginPageView;
