import React, { FunctionComponent, useState, useRef, useEffect } from "react";
import {
  Nav,
  NavLinks,
  NavTitle,
  SelectorArticle,
  SelectorFigure,
} from "./styles";
import { Link } from "react-router-dom";
import { Button } from "../../pages/styles";
import {
  FaUser,
  FaEdit,
  FaMapSigns,
  FaSignInAlt,
  FaSignOutAlt,
} from "react-icons/fa";
import { FaUserGear } from "react-icons/fa6";
import { useDataContext } from "../../contexts/data";
import Loading from "react-loading";

interface NavbarElementProps {}

const NavbarElement: FunctionComponent<NavbarElementProps> = () => {
  const { data } = useDataContext();
  const [manage, setManage] = useState(false);
  const ref = useRef<any>(null!);
  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setManage(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });

  return (
    <Nav>
      <Link to="/">
        <NavTitle>
          <img alt="" src="/assets/logo.png" />
          <h1>Emirates Private School</h1>
        </NavTitle>
      </Link>
      <NavLinks>
        {data?.loading ? (
          <Loading
            type={"spinningBubbles"}
            color={"#b88c34"}
            height={32}
            width={32}
          />
        ) : data?.user ? (
          <>
            <Link to="/">
              <Button>
                {data.user.role === "teacher" ? <FaUserGear /> : <FaUser />}
                {data?.user.name}
              </Button>
            </Link>
            {data.user.role === "teacher" ? (
              <div ref={ref} style={{ position: "relative" }}>
                <Button onClick={() => setManage(!manage)}>
                  <FaEdit /> Manage Students
                </Button>
                {manage ? (
                  <SelectorArticle>
                    <Link to="/teacher?grade=12_ADV-B">
                      <SelectorFigure>Grade 12 ADV-B</SelectorFigure>
                    </Link>
                    <Link to="/teacher?grade=12_ADV-G">
                      <SelectorFigure>Grade 12 ADV-G</SelectorFigure>
                    </Link>
                  </SelectorArticle>
                ) : undefined}
              </div>
            ) : (
              <Link to="/fields">
                <Button>
                  <FaMapSigns /> Recommended Field
                </Button>
              </Link>
            )}

            <Button
              onClick={() =>
                (window.location.href = "http://192.168.0.195/auth/logout")
              }
              className="logout"
            >
              Logout <FaSignOutAlt />
            </Button>
          </>
        ) : (
          <Link to="/authorization">
            <Button>
              Login <FaSignInAlt />
            </Button>
          </Link>
        )}
      </NavLinks>
    </Nav>
  );
};

export default NavbarElement;
