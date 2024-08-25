import { Button, Input, Label } from "@/components/ui";
import { useLogin } from "@/api/auth";
import { useForm } from "react-hook-form";
import { LoginFormData, loginSchema } from "@/schemas/authSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import logo from "@/assets/logo.png";

export default function Login() {
  const { mutate: login, isPending } = useLogin();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data: LoginFormData) => {
    login(data);
  };

  return (
    <div className="w-full">
      <div className="flex flex-col items-center justify-center py-12 m-auto min-h-lvh">
        <form className="w-[350px] gap-6" onSubmit={handleSubmit(onSubmit)}>
          <div className="grid gap-2 text-center">
            <img src={logo} alt="logo" className="w-32 m-auto" />
            <h1 className="text-3xl font-bold">Login</h1>
            <p className="text-balance text-muted-foreground">
              Enter your username below to login to your account
            </p>
          </div>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                type="text"
                {...register("username")}
                placeholder="Username"
                className={
                  errors.username
                    ? "focus-visible:ring-red-500"
                    : "focus-visible:ring-green-500"
                }
                required
              />
              {errors.username && (
                <p className="text-red-500">{errors.username.message}</p>
              )}
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
              </div>
              <Input
                id="password"
                type="password"
                {...register("password")}
                placeholder="Password"
                className={
                  errors.password
                    ? "focus-visible:ring-red-500"
                    : "focus-visible:ring-green-500"
                }
                required
              />
              {errors.password && (
                <p className="text-red-500">{errors.password.message}</p>
              )}
            </div>
            <Button
              type="submit"
              variant="outline"
              className="w-full bg-green-400"
              disabled={isPending}
            >
              {isPending ? "Loading" : "Login"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
