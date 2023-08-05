import React, { useState } from "react";
import {
  CompassOutlined,
  BuildOutlined,
  HomeOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Menu } from "antd";
import { useRouter } from "next/router";
import AuthComponent from "./AuthComponent";

const items: MenuProps["items"] = [
  {
    label: "Homepage",
    key: "",
    icon: <HomeOutlined />,
  },

  {
    label: "Categories",
    key: "catergories",
    icon: <CompassOutlined />,
    children: [
      {
        label: "CPU / Processor",
        key: "category/cpu-rocessor",
      },
      {
        label: "Motherboard",
        key: "category/motherboard",
      },
      {
        label: "RAM",
        key: "category/ram",
      },
      {
        label: "Power Supply Unit",
        key: "category/power-supply-unit",
      },
      {
        label: "Storage Device",
        key: "category/storage-device",
      },
      {
        label: "Monitor",
        key: "category/monitor",
      },
      {
        label: "Others",
        key: "category/others",
      },
    ],
  },
  {
    label: "PC Builder",
    key: "builder",
    icon: <BuildOutlined />,
  },
  {
    label: <AuthComponent />,
    key: "auth",
    disabled: true,
  },
];

const NavMenu: React.FC = () => {
  const [current, setCurrent] = useState("");
  const router = useRouter();

  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
    router.push(`/${e.key}`);
    setCurrent(e.key);
  };

  return (
    <>
      <Menu
        onClick={onClick}
        selectedKeys={[current]}
        mode="horizontal"
        items={items}
      />
    </>
  );
};

export default NavMenu;
