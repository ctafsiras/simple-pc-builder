import React, { useState } from "react";
import {
  CompassOutlined,
  BuildOutlined,
  SettingOutlined,
  HomeOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Menu } from "antd";

const items: MenuProps["items"] = [
  {
    label: "Homepage",
    key: "home",
    icon: <HomeOutlined />,
  },

  {
    label: "Categories",
    key: "catergories",
    icon: <CompassOutlined />,
    children: [
      {
        label: "Option 1",
        key: "setting:1",
      },
      {
        label: "Option 2",
        key: "setting:2",
      },
    ],
  },
  {
    label: "PC Builder",
    key: "builder",
    icon: <BuildOutlined />,
  },
//   {
//     label: (
//       <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
//         Navigation Four - Link
//       </a>
//     ),
//     key: "alipay",
//   },
];

const NavMenu: React.FC = () => {
  const [current, setCurrent] = useState("home");

  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };

  return (
    <Menu
      onClick={onClick}
      selectedKeys={[current]}
      mode="horizontal"
      items={items}
    />
  );
};

export default NavMenu;
