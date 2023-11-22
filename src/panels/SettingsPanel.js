import { SettingOutlined } from "@ant-design/icons";
import { useState } from "react";
import { Popover, PopoverContent, PopoverHandler } from "@material-tailwind/react";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
} from "@material-tailwind/react";
import SignOut from "../Login/SignOut";
const SettingsPanel = ({ auth }) => {
  const [opened, setOpened] = useState(false);
  return (
    <div>
      <p>{opened}</p>
      <SettingOutlined onClick={() => setOpened(prev => !prev)}></SettingOutlined>
      <Menu
        placement="right-start"
        open={opened}
        handler={setOpened}
        allowHover
        offset={15}
        bg="bg-dark-700"
      >
        <MenuList>
          <MenuItem><SignOut auth={auth}></SignOut></MenuItem>
        </MenuList>
      </Menu>


    </div>
  );
}

export default SettingsPanel;