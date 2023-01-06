import { Group, Option } from "react-dropdown";

interface IProps {
  options: Array<Group | Option | string>;
  value: Option | string;
  onChange: (arg: Option) => void;
  placeholder?: string;
  className?: string;
}

jest.mock(
  "react-dropdown",
  () =>
    ({ options, value, onChange, className }: IProps) => {
      const parsedOptions = options.map((option) => {
        if (option.hasOwnProperty("type")) {
          // don't handle grouped dropdowns properly yet..
          return (option as Group).items[0];
        } else {
          return option as string | Option;
        }
      });
      function handleChange(event: React.FormEvent<HTMLSelectElement>) {
        const newOption = parsedOptions.find((option) => {
          if (option.hasOwnProperty("value")) {
            return (option as Option).value === event.currentTarget.value;
          } else {
            return option === event.currentTarget.value;
          }
        })!;
        const parsedOption = newOption.hasOwnProperty("value")
          ? (newOption as Option)
          : { value: newOption as string, label: newOption as string };
        onChange(parsedOption);
      }

      return (
        <select
          data-testid={className}
          id={className}
          value={optionValueAsString(value)}
          onChange={handleChange}
        >
          {parsedOptions.map((value, index) => (
            <option
              key={index}
              data-testid={index}
              value={optionValueAsString(value)}
            >
              {optionValueAsString(value)}
            </option>
          ))}
        </select>
      );
      function optionValueAsString(
        value: string | Option
      ): string | number | readonly string[] | undefined {
        return value.hasOwnProperty("value")
          ? (value as Option).value
          : (value as string);
      }
    }
);
