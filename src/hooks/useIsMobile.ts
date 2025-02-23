import useMediaQuery from "@mui/material/useMediaQuery";

export const useIsMobile = () => {
  //@ts-ignore
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  return { isMobile };
};
