import { FC, useState, useEffect } from "react";
import { Switch, SwitchProps, useSwitch } from "@nextui-org/switch";
import { useTheme } from "next-themes";
import { IoIosMoon } from "react-icons/io"
import { IoIosSunny } from "react-icons/io"


export interface ThemeSwitchProps {
  className?: string;
  classNames?: SwitchProps["classNames"];
}

export const ThemeSwitch: FC<ThemeSwitchProps> = () => {
  const [isMounted, setIsMounted] = useState(false);

  const { theme, setTheme } = useTheme();

  const onChange = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  const {
    Component,
    slots,
    isSelected,
    getBaseProps,
    getInputProps,
    getWrapperProps,
  } = useSwitch({
    isSelected: theme === "light",
    onChange,
  });

  useEffect(() => {
    setIsMounted(true);
  }, [isMounted]);

  // Prevent Hydration Mismatch
  if (!isMounted) return <div className="w-6 h-6" />;

  return (
    <Switch
      defaultSelected
      size="lg"
      color="secondary"
      thumbIcon={({ isSelected, className }) =>
        isSelected ? (
          <IoIosMoon className={className} />
        ) : (
          <IoIosSunny className={className} />
        )
      }
      onChange={onChange}
    >
      Dark mode
    </Switch>
  );
};
