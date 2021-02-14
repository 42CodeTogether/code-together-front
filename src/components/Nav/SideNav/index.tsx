/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   index.tsx                                          :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: jaeskim <jaeskim@student.42seoul.kr>       +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2021/02/14 00:12:36 by jaeskim           #+#    #+#             */
/*   Updated: 2021/02/14 18:43:31 by jaeskim          ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Button from "../../Button";
import { LinkProps, LocationDescriptor } from "../Link";
import styles from "./index.module.scss";
import logoSvg from "../../../assets/logo_black.svg";
import logo42Svg from "../../../assets/42_logo_black.svg";

export type SideNavProps<S> = {
  /** Link되어야 하는 목록 정의 */
  links: LinkProps<S>[];
};

const SideNav: React.FC<SideNavProps<{}>> = ({ links = [] }) => {
  const [isActive, setActive] = useState(false);
  const history = useHistory();

  const handleLink = (to: string | LocationDescriptor<{}>) => {
    history.push(to);
    setActive(false);
  };

  if (!isActive)
    return (
      <Button height="100%" them="transparent" onClick={() => setActive(true)}>
        Menu
      </Button>
    );

  return (
    <div className={`${styles.wrapper}`}>
      <div className={`${styles.header}`}>
        <img
          className={`${styles.logo} `}
          src={logoSvg}
          alt={"42CodeTogether-logo"}
          onClick={() => handleLink("/")}
        />
        <Button
          height="100%"
          them="transparent"
          className={`${styles["text-white"]}`}
          onClick={() => setActive(false)}
        >
          Close
        </Button>
      </div>
      <div className={`${styles.container}`}>
        {links.map((value) => (
          <div
            key={`sidenav-link-${value.id}`}
            className={`${styles.child}`}
            onClick={() => handleLink(value.to)}
          >
            {value.children}
          </div>
        ))}
        <div className={`${styles.child}`}>
          <Button
            className={`${styles.loginButton} `}
            onClick={() => handleLink("/login")}
          >
            <img src={logo42Svg} alt={"42logo"} />
            Start with 42Network
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SideNav;
