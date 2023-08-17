import { useLoginMutation } from "@/redux/features/auth/userApi";
import Cookies from "js-cookie";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
// import { useNavigate } from "react-router-dom";

const Login = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [login, { isLoading }] = useLoginMutation(undefined, {
    refetchOnMountOrArgChange: true,
    pollingInterval: 50,
  });

  const onSubmit = async (data) => {
    try {
      const response = await login(data);
      console.log("response", response);

      if (response?.data?.statusCode === 200) {
        toast.success(response?.data?.message);
      } else {
        toast.error(response?.error?.data?.message);
      }

      const accessToken = response?.data?.data?.accessToken;

      console.log("accessToken ", accessToken);

      if (accessToken) {
        Cookies.set("accessToken", accessToken); // Store the access token in a cookie
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <div className="mt-10">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <h1 className="input-title">
            Email <span className="text-red-600">*</span>
          </h1>
          <input
            type="email"
            className="input-border w-full sm:w-[150%] mb-2"
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
            className="input-border w-full sm:w-[150%] mb-2"
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
        <button type="submit" className="input-button w-full my-5 sm:w-[150%] ">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
