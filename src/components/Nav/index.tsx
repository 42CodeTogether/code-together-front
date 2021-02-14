/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   index.tsx                                          :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: jaeskim <jaeskim@student.42seoul.kr>       +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2021/02/12 17:51:22 by jaeskim           #+#    #+#             */
/*   Updated: 2021/02/14 19:00:51 by jaeskim          ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import React from "react";
import { useHistory } from "react-router-dom";
import Button from "../Button";
import styles from "./index.module.scss";
import logoSvg from "../../assets/logo_white.svg";
import logo42Svg from "../../assets/42_logo_black.svg";
import Link, { LinkProps } from "./Link";
import useResponsive from "../../utils/useResponsive";
import SideNav from "./SideNav";

export type NavProps<S> = {
  /** Link되어야 하는 목록 정의 */
  links?: LinkProps<S>[];
};

/** `Nav` Component
 *
 * > TODO: user 정보를 Props로 받아서 로그인 시 로그인 버튼 Profile 버튼으로 변경하여야 함.
 */
const Nav: React.FC<NavProps<{}>> = ({ links = [] }) => {
  const history = useHistory();
  const media = useResponsive();
  return (
    <div className={`${styles.wrapper} `}>
      <img
        className={`${styles.logo} `}
        src={logoSvg}
        alt={"42CodeTogether-logo"}
        onClick={() => history.push("/")}
      />
      <div className={`${styles.buttonContainer}`}>
        {media.isMobile ? (
          <SideNav links={links} />
        ) : (
          <>
            {links.map((value) => (
              <Link key={`nav-link-${value.id}`} id={value.id} to={value.to}>
                {value.children}
              </Link>
            ))}
            <Button
              height="100%"
              className={`${styles.loginButton}`}
              onClick={() => history.push("/login")}
            >
              <img src={logo42Svg} alt={"42logo"} />
              Login
            </Button>
          </>
        )}
      </div>
    </div>
  );
};

export default Nav;
