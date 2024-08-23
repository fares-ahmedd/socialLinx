import { Input } from "@/components/ui/input";
import { useEffect, useRef, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

type Props = {
  field: {};
  isLogging?: boolean;
  isLoading?: boolean;
};
function PasswordInput({ field, isLogging = false, isLoading = false }: Props) {
  const [isShownPassword, setIsShownPassword] = useState(false);
  const passwordEl = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (isShownPassword && passwordEl.current) {
      passwordEl.current.type = "text";
    }
    if (!isShownPassword && passwordEl.current) {
      passwordEl.current.type = "password";
    }
  }, [isShownPassword]);

  return (
    <div className="relative">
      <Input
        type="password"
        className="shad-input "
        {...field}
        disabled={isLogging || isLoading}
        ref={passwordEl}
        autoComplete="new-password"
      />
      <button
        className="absolute right-3 bottom-2 z-50 text-white"
        type="button"
        onClick={() =>
          setIsShownPassword((isShownPassword) => !isShownPassword)
        }
      >
        {isShownPassword ? <FaEyeSlash /> : <FaEye />}
      </button>
    </div>
  );
}

export default PasswordInput;
