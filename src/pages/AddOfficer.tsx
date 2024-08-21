import { Button, Input, Label } from "@/components/ui";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Header, Layout } from "@/components";

// Define validation schema
const addOfficerSchema = z.object({
  username: z.string().min(1, "Username is required"),
  password: z.string().min(1, "Password is required"),
  email: z.string().email("Invalid email address"),
  first_name: z.string().min(1, "First name is required"),
  last_name: z.string().min(1, "Last name is required"),
  profile: z.object({
    role: z.string().min(1, "Role is required"),
    location: z.string().min(1, "Location is required"),
    zone: z.string().min(1, "Zone is required"),
    state: z.string().min(1, "State is required"),
    area: z.string().min(1, "Area is required"),
    unit: z.string().min(1, "Unit is required"),
  }),
});

// Define form data type
type AddOfficerFormData = z.infer<typeof addOfficerSchema>;

export default function AddOfficer() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AddOfficerFormData>({
    resolver: zodResolver(addOfficerSchema),
  });

  const onSubmit = (data: AddOfficerFormData) => {
    console.log(data);
    // Perform API call to add officer
  };

  return (
    <Layout>
      <Header>Add Officers</Header>
      <div className="flex flex-col items-center justify-center py-12 m-auto min-h-lvh">
        <form
          className="gap-6 w-full max-w-3xl"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="grid gap-2 text-center">
            <p className="text-balance text-muted-foreground">
              Fill out the form below to add a new officer
            </p>
          </div>
          <div className="grid gap-4">
            {/* Username Field */}
            <div className="grid gap-2 w-full">
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

            {/* Password Field */}
            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
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

            {/* Email Field */}
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                {...register("email")}
                placeholder="Email"
                className={
                  errors.email
                    ? "focus-visible:ring-red-500"
                    : "focus-visible:ring-green-500"
                }
                required
              />
              {errors.email && (
                <p className="text-red-500">{errors.email.message}</p>
              )}
            </div>

            {/* First Name Field */}
            <div className="grid gap-2">
              <Label htmlFor="first_name">First Name</Label>
              <Input
                id="first_name"
                type="text"
                {...register("first_name")}
                placeholder="First Name"
                className={
                  errors.first_name
                    ? "focus-visible:ring-red-500"
                    : "focus-visible:ring-green-500"
                }
                required
              />
              {errors.first_name && (
                <p className="text-red-500">{errors.first_name.message}</p>
              )}
            </div>

            {/* Last Name Field */}
            <div className="grid gap-2">
              <Label htmlFor="last_name">Last Name</Label>
              <Input
                id="last_name"
                type="text"
                {...register("last_name")}
                placeholder="Last Name"
                className={
                  errors.last_name
                    ? "focus-visible:ring-red-500"
                    : "focus-visible:ring-green-500"
                }
                required
              />
              {errors.last_name && (
                <p className="text-red-500">{errors.last_name.message}</p>
              )}
            </div>

            {/* Profile Fields */}
            <div className="grid gap-2">
              <Label htmlFor="profile.role">Role</Label>
              <Input
                id="profile.role"
                type="text"
                {...register("profile.role")}
                placeholder="Role"
                className={
                  errors.profile?.role
                    ? "focus-visible:ring-red-500"
                    : "focus-visible:ring-green-500"
                }
                required
              />
              {errors.profile?.role && (
                <p className="text-red-500">{errors.profile.role.message}</p>
              )}
            </div>

            <div className="grid gap-2">
              <Label htmlFor="profile.location">Location</Label>
              <Input
                id="profile.location"
                type="text"
                {...register("profile.location")}
                placeholder="Location"
                className={
                  errors.profile?.location
                    ? "focus-visible:ring-red-500"
                    : "focus-visible:ring-green-500"
                }
                required
              />
              {errors.profile?.location && (
                <p className="text-red-500">
                  {errors.profile.location.message}
                </p>
              )}
            </div>

            <div className="grid gap-2">
              <Label htmlFor="profile.zone">Zone</Label>
              <Input
                id="profile.zone"
                type="text"
                {...register("profile.zone")}
                placeholder="Zone"
                className={
                  errors.profile?.zone
                    ? "focus-visible:ring-red-500"
                    : "focus-visible:ring-green-500"
                }
                required
              />
              {errors.profile?.zone && (
                <p className="text-red-500">{errors.profile.zone.message}</p>
              )}
            </div>

            <div className="grid gap-2">
              <Label htmlFor="profile.state">State</Label>
              <Input
                id="profile.state"
                type="text"
                {...register("profile.state")}
                placeholder="State"
                className={
                  errors.profile?.state
                    ? "focus-visible:ring-red-500"
                    : "focus-visible:ring-green-500"
                }
                required
              />
              {errors.profile?.state && (
                <p className="text-red-500">{errors.profile.state.message}</p>
              )}
            </div>

            <div className="grid gap-2">
              <Label htmlFor="profile.area">Area</Label>
              <Input
                id="profile.area"
                type="text"
                {...register("profile.area")}
                placeholder="Area"
                className={
                  errors.profile?.area
                    ? "focus-visible:ring-red-500"
                    : "focus-visible:ring-green-500"
                }
                required
              />
              {errors.profile?.area && (
                <p className="text-red-500">{errors.profile.area.message}</p>
              )}
            </div>

            <div className="grid gap-2">
              <Label htmlFor="profile.unit">Unit</Label>
              <Input
                id="profile.unit"
                type="text"
                {...register("profile.unit")}
                placeholder="Unit"
                className={
                  errors.profile?.unit
                    ? "focus-visible:ring-red-500"
                    : "focus-visible:ring-green-500"
                }
                required
              />
              {errors.profile?.unit && (
                <p className="text-red-500">{errors.profile.unit.message}</p>
              )}
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              variant="outline"
              className="w-full bg-indigo-400"
            >
              Add Officer
            </Button>
          </div>
        </form>
      </div>
    </Layout>
  );
}
