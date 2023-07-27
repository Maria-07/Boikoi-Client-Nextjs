import { useForm } from "react-hook-form";
import { Button, Checkbox, Form, Input } from "antd";

const SignupFrom = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className="mt-10">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-wrap gap-3">
          <div>
            <h1 className="input-title">
              First Name <span className="text-red-600">*</span>
            </h1>
            <input
              type="text"
              className="input-border w-full  mb-2"
              {...register("firstName", {
                required: {
                  value: true,
                  message: "First Name is required",
                },
              })}
            />
            <label className="label">
              <span className="text-sm">
                {" "}
                {errors.firstName?.type === "required" && (
                  <p className=" text-red-500">{errors.firstName.message}</p>
                )}
                {errors.firstName?.type === "pattern" && (
                  <p className=" text-red-500">{errors.firstName.message}</p>
                )}
              </span>
            </label>
          </div>
          <div>
            <h1 className="input-title">Middle Name</h1>
            <input
              type="text"
              className="input-border w-full  mb-2"
              {...register("middleName")}
            />
          </div>
          <div>
            <h1 className="input-title">
              Last Name <span className="text-red-600">*</span>
            </h1>
            <input
              type="text"
              className="input-border w-full  mb-2"
              {...register("lastName", {
                required: {
                  value: true,
                  message: "Last Name Name is required",
                },
              })}
            />
            <label className="label">
              <span className="text-sm">
                {" "}
                {errors.lastName?.type === "required" && (
                  <p className=" text-red-500">{errors.lastName.message}</p>
                )}
                {errors.lastName?.type === "pattern" && (
                  <p className=" text-red-500">{errors.lastName.message}</p>
                )}
              </span>
            </label>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 grid-cols-1 gap-3">
          <div>
            <h1 className="input-title">
              Role <span className="text-red-600">*</span>
            </h1>

            <select
              {...register("role", {
                required: {
                  value: true,
                  message: "Role is required",
                },
              })}
              className="input-select-border w-full  mb-2"
            >
              <option className="py-3" value=""></option>
              <option value="customer">Customer</option>
              <option value="shopOwner">Shop Owner</option>
            </select>
            <label className="label">
              <span className="text-sm">
                {" "}
                {errors.role?.type === "required" && (
                  <p className=" text-red-500">{errors.role.message}</p>
                )}
                {errors.role?.type === "pattern" && (
                  <p className=" text-red-500">{errors.role.message}</p>
                )}
              </span>
            </label>
          </div>
          <div>
            <h1 className="input-title">
              Contact <span className="text-red-600">*</span>
            </h1>
            <input
              type="text"
              className="input-border w-full  mb-2"
              {...register("contact", {
                required: {
                  value: true,
                  message: "Contact is required",
                },
              })}
            />
            <label className="label">
              <span className="text-sm">
                {" "}
                {errors.contact?.type === "required" && (
                  <p className=" text-red-500">{errors.contact.message}</p>
                )}
                {errors.contact?.type === "pattern" && (
                  <p className=" text-red-500">{errors.contact.message}</p>
                )}
              </span>
            </label>
          </div>
        </div>
        <div>
          <h1 className="input-title">
            Email <span className="text-red-600">*</span>
          </h1>
          <input
            type="email"
            className="input-border w-full  mb-2"
            {...register("email", {
              required: {
                value: true,
                message: "Email is required",
              },
              pattern: {
                value: /@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
                message: "Provide a valid Email", // JS only: <p>error message</p> TS only support string
              },
            })}
          />
          <label className="label">
            <span className="text-sm">
              {" "}
              {errors.email?.type === "required" && (
                <p className=" text-red-500">{errors.email.message}</p>
              )}
              {errors.email?.type === "pattern" && (
                <p className=" text-red-500">{errors.email.message}</p>
              )}
            </span>
          </label>
        </div>
        <div>
          <h1 className="input-title">
            Password <span className="text-red-600">*</span>
          </h1>
          <input
            type="password"
            className="input-border w-full  mb-2"
            {...register("password", {
              required: {
                value: true,
                message: "Password is required",
              },
              minLength: {
                value: 6,
                message: "Password must be 6 characters",
              },
            })}
          />
          <label className="label">
            <span className="text-sm">
              {" "}
              {errors.password?.type === "required" && (
                <p className=" text-red-500">{errors.password.message}</p>
              )}
              {errors.password?.type === "minLength" && (
                <p className=" text-red-500">{errors.password.message}</p>
              )}
            </span>
          </label>
        </div>
        <button type="submit" className="input-button w-full my-5  ">
          Submit
        </button>
      </form>
    </div>
  );
};

export default SignupFrom;
