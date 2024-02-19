import React, { useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import "./../styles/Navbar.scss";
import { GoBell } from "react-icons/go";
import { Avatar, Badge } from "antd";
import type { MenuProps } from "antd";
import { Dropdown, Space } from "antd";
import { GiHamburgerMenu } from "react-icons/gi";

type ContentType = {
  title: string;
  route: string;
}[];

const items: MenuProps["items"] = [
  {
    key: "1",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        1st menu item
      </a>
    ),
  },
  {
    key: "2",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.aliyun.com"
      >
        2nd menu item (disabled)
      </a>
    ),

    disabled: true,
  },
  {
    key: "3",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.luohanacademy.com"
      >
        3rd menu item (disabled)
      </a>
    ),
    disabled: true,
  },
  {
    key: "4",
    danger: true,
    label: "a danger item",
  },
];

const items2: MenuProps["items"] = [
  {
    key: "1",
    type: "group",
    label: "Group title",
    children: [
      {
        key: "1-1",
        label: "1st menu item",
      },
      {
        key: "1-2",
        label: "2nd menu item",
      },
    ],
  },
  {
    key: "2",
    label: "sub menu",
    children: [
      {
        key: "2-1",
        label: "3rd menu item",
      },
      {
        key: "2-2",
        label: "4th menu item",
      },
    ],
  },
  {
    key: "3",
    label: "disabled sub menu",
    disabled: true,
    children: [
      {
        key: "3-1",
        label: "5d menu item",
      },
      {
        key: "3-2",
        label: "6th menu item",
      },
    ],
  },
];

function Navbar({ content }: { content: ContentType }) {
  const [showHamburger, setShowHamburger] = useState<boolean>(false);

  useEffect(() => {
    const HandleResize = (e: UIEvent) => {
      const width = window.innerWidth;

      if (width >= 1000) {
        setShowHamburger(false);
      } else {
        setShowHamburger(true);
      }
    };

    window.addEventListener("resize", HandleResize);

    return () => {
      window.removeEventListener("resize", HandleResize);
    };
  }, []);

  return (
    <div className="navbar__container">
      <div className="navbar__main">
        <div className="logo">
          {" "}
          <img
            src="https://frontend.qa.klondikefinancial.com/static/media/image.b605cc62ccb3107e14bb.png"
            alt="klondike_logo"
            style={{
              width: "140px",
              objectFit: "contain",
            }}
          />
        </div>

        <ul className="navbar_list">
          {content.map((val, i) => {
            return (
              <li
                className={`navbar_list-items ${
                  val.title === "Home" ? "active" : ""
                }`}
                key={val.title}
              >
                {val.title}
              </li>
            );
          })}

          <Dropdown menu={{ items }}>
            <li className="navbar_list-items ">
              More{" "}
              <IoIosArrowDown
                style={{
                  marginLeft: "0.4rem",
                  width: "20px",
                }}
              />
            </li>
          </Dropdown>
        </ul>

        {showHamburger && (
          <Dropdown menu={{ items: items2 }}>
            <GiHamburgerMenu
              style={{
                width: "30px",
                height: "30px",
                cursor: "pointer",
                marginLeft: "1rem",
              }}
            />
          </Dropdown>
        )}

        <div
          style={{
            marginLeft: "auto",
            display: "flex",
            alignItems: "center",
            gap: "4rem",
          }}
        >
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
                      width: "35px",
                      height: "35px",
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
      </div>
    </div>
  );
}

export default Navbar;
