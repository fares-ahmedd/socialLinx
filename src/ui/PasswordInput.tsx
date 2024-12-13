import { Input } from "@/components/ui/input";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

type Props = {
  field: {};
  isLogging?: boolean;
  isLoading?: boolean;
};
function PasswordInput({ field, isLogging = false, isLoading = false }: Props) {
  const [isShownPassword, setIsShownPassword] = useState(false);

  return (
    <div className="relative">
      <Input
        type={isShownPassword ? "text" : "password"}
        className="shad-input "
        id="password"
        {...field}
        disabled={isLogging || isLoading}
        autoComplete="new-password"
      />
      <button
        className="absolute right-3 bottom-2 z-50 text-[#d94514] text-xl"
        type="button"
        onClick={() =>
          setIsShownPassword((isShownPassword) => !isShownPassword)
        }
        aria-label="toggle password visibility"
        title="toggle password visibility"
      >
        {isShownPassword ? <FaEyeSlash /> : <FaEye />}
      </button>
    </div>
  );
}

export default PasswordInput;
