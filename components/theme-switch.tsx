import { FC, useState, useEffect } from "react";
import { Switch, SwitchProps } from "@nextui-org/switch";
import { useTheme } from "next-themes";
import { IoIosMoon } from "react-icons/io"
import { IoIosSunny } from "react-icons/io"

export interface ThemeSwitchProps {
  className?: string;
  classNames?: SwitchProps["classNames"];
}

export const ThemeSwitch: FC<ThemeSwitchProps> = ({className}) => {
  const [isMounted, setIsMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  const onChange = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  useEffect(() => {
    setIsMounted(true);
  }, [isMounted]);

  // Prevent Hydration Mismatch
  if (!isMounted) return <div className="w-6 h-6" />;

  return (
    <Switch
      className={className}
      isSelected={theme === "light"}
      size="sm"
      color="primary"
      thumbIcon={({ isSelected, className }) =>
        isSelected ? (
          <IoIosSunny className={className} />
        ) : (
          <IoIosMoon className={className} />
        )
      }
      onChange={onChange}
    >
    </Switch>
  );
};
