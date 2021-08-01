import React from "react";
import { Menu } from "semantic-ui-react";
import { Link } from "../routes";

const Header = () => {
  return (
    <Menu style={{ marginTop: "10px" }}>
      <Menu.Item>
        <Link route="/">
          <a>
            CrowdCoin
          </a>
        </Link>
      </Menu.Item>
      <Menu.Menu position="right">
        <Menu.Item>
          <Link route="/">
            <a>
             Campaigns
            </a>
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link route="/">
            <a>
             +
            </a>
          </Link>
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  );
};

export default Header;
