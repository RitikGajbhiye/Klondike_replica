import React from "react";
import "./../styles/Home.scss";
import Navbar from "./Navbar";

type NavType = {
  title: string;
  route: string;
}[];

function Home() {
  const NavContent: NavType = [
    {
      title: "Home",
      route: "/dashboard/home",
    },
    {
      title: "Save",
      route: "/dashboard/save",
    },
    {
      title: "Invest",
      route: "/dashboard/invest",
    },
    {
      title: "Retire",
      route: "/dashboard/retire",
    },
    {
      title: "Protect",
      route: "/dashboard/prtect",
    },
    {
      title: "Dept",
      route: "/dashboard/dept",
    },
    {
      title: "Spend",
      route: "/dashboard/spend",
    },
  ];

  return (
    <div className="home">
      <Navbar content={NavContent} />
    </div>
  );
}

export default Home;
