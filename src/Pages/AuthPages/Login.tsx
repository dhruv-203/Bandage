import { useState } from "react";
import { NavLink } from "react-router-dom";
import ErrorDisplay from "../../Components/Auth/ErrorDisplay";
import InputField from "../../Components/Auth/InputField";
import "../../Components/Auth/InputField.css";
// import { authenticate } from "../../Store";
import { useLoginUserMutation } from "../../Store/Slices/authApi";
import { toastify } from "../../utils";
import "./Registration.css";
interface FormDataState {
  Email: string;
  Password: string;
}

function Login() {
  const [formState, setFormState] = useState<FormDataState>({
    Email: "",
    Password: "",
  });

  const [loginUser, { isLoading, isError }] = useLoginUserMutation();
  // const dispatcher = useDispatch();

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (
      !formState.Email ||
      !formState.Password ||
      formState.Email.trim() === "" ||
      formState.Password.trim() === ""
    ) {
      setError("All fileds are required");
      toastify("All fileds are required", "error");
      return;
    }
    //directly use formState
    //implement the login fetch apis to get user login and then call this method
    // if truely authenticated
    try {
      await loginUser(formState).unwrap();
      // navigate(loc.state ? loc.state.from : "/home", { replace: true });
    } catch (err: any) {
      if (err && err?.data && err.data?.message) {
        setError(err.data.message);
        toastify(err.data.message, "error");
      } else {
        setError("Unexpected Error Occurred");
        toastify("Unexpected Error Occurred", "error");
        console.log(err);
      }
    }
  }

  return (
    <div className="w-100 d-flex flex-column justify-content-center align-items-center  bg-primary py-5">
      <form
        onSubmit={handleSubmit}
        className="registrationContainer rounded bg-light w-30 mx-auto my-4 p-3 d-flex flex-column gap-2 justify-content-center align-items-center"
      >
        {error !== "" ? <ErrorDisplay errors={[error]} /> : <></>}
        <div className="section-title text-dark pb-3 fs-3 fw-700">
          Login Here
        </div>
        <InputField
          type="email"
          placeholder="Enter Email"
          onChange={handleInputChange}
          name="Email"
          className="w-60 fs-7"
        />
        <InputField
          type="password"
          placeholder="Enter Password"
          onChange={handleInputChange}
          name="Password"
          className="w-60 fs-7"
        />
        <span className="text-dark fs-7 py-2">
          Don't have an account?{" "}
          <NavLink to={"/auth/register"}>Click Here</NavLink>
        </span>
        <input
          type="submit"
          className="w-20 p-2 fs-6 rounded bg-primary text-light cursor-pointer"
          value={isLoading ? "Loding..." : "submit"}
          disabled={isLoading}
        />
      </form>
    </div>
  );
}

export default Login;
