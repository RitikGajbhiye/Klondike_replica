import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { GoBell } from "react-icons/go";
import { Avatar, Badge } from "antd";

type ContentType = {
  title: string;
  route: string;
}[];

function Navbar({ content }: { content: ContentType }) {
  return (
    <div className="navbar__container">
      <div className="logo">Logo</div>

      <ul className="navbar_list">
        {content.map((val, i) => {
          return (
            <li className="navbar_list-items" key={val.title}>
              {val.title}
            </li>
          );
        })}

        <li>
          More <IoIosArrowDown />
        </li>
      </ul>

      <div className="notification">
        <Badge count={10} overflowCount={9}>
          <Avatar
            style={{
              background: "transparent",
            }}
            icon={
              <GoBell
                style={{
                  color: "black",
                  width: "40px",
                  height: "40px",
                }}
              />
            }
          ></Avatar>
        </Badge>
      </div>

      <div className="profile">
        <Avatar
          shape="circle"
          style={{
            fontSize: "1.5rem",
            fontWeight: "500",
            width: "40px",
            height: "40px",
            letterSpacing: "1.1px",
          }}
        >
          PK
        </Avatar>
      </div>
    </div>
  );
}

export default Navbar;
