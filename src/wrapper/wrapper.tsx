import { ReactNode, FC } from "react";
import Header from "./header";
import Footer from "./footer";

interface wrapperProps {
  children: ReactNode;
}

const Wrapper: FC<wrapperProps> = ({ children }) => {
  return (
    <>
      <Header />
      <div style={{ minHeight: "100vh" }}>{children}</div>
      <Footer />
    </>
  );
};

export default Wrapper;
