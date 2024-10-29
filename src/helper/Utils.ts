export const getStyleValue = (key: string, value: string | number | undefined) => {
    if (value === undefined) return;
    return { [key]: value === "unset" ? undefined : value };
  };