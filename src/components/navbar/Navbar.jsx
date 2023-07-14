import { NavListDrawer } from "./NavListDrawer";

export const Navbar = ({MenuNav,setdrawer}) => {
  return (
    <>
      <NavListDrawer  MenuNav={MenuNav} setdrawer={setdrawer} />
    </>
  );
};
