/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   index.tsx                                          :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: jaeskim <jaeskim@student.42seoul.kr>       +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2021/02/12 21:34:16 by jaeskim           #+#    #+#             */
/*   Updated: 2021/02/12 23:44:34 by jaeskim          ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import React from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import styles from "./index.module.scss";

type LocationDescriptor<S = unknown> = {
  pathname?: string;
  search?: string;
  state?: S;
  hash?: string;
  key?: string;
};

export type LinkProps<S = unknown> = {
  /** Link 안의 내용에 대하여 정의 */
  children?: React.ReactNode;
  /** 클릭시 이동 될 경로에 대하여 정의 */
  to: string | LocationDescriptor<S>;
};

/** `Link` 컴포넌트는 Page 이동시에 사용
 *
 * react-router-dom의 Link를 랩핑하여 커스텀화!
 */
const Link: React.FC<LinkProps<{}>> = ({ to, children }) => {
  const location = useLocation();
  const isActive =
    (typeof to !== "string" && to.pathname === location.pathname) ||
    (typeof to === "string" && location.pathname === to);

  return (
    <RouterLink
      className={`${styles.wrapper} ${isActive && styles.active}`}
      to={to}
    >
      {children}
    </RouterLink>
  );
};

export default Link;
