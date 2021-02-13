/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   index.tsx                                          :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: jaeskim <jaeskim@student.42seoul.kr>       +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2021/02/13 12:32:51 by jaeskim           #+#    #+#             */
/*   Updated: 2021/02/13 17:46:30 by jaeskim          ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import React, { useEffect, useState } from "react";
import styles from "./index.module.scss";

export type CardProps = {
  /** Card Component 내부의 내용에 대해서 정의 */
  children?: React.ReactNode;
  /** Round 활성화에 대해 정의 */
  round?: boolean;
  /** Hover Event 발생시에 작동하게 되는 Event Handler에 대하여 정의
   *
   * Handler에 전달되는 ishover 인자를 이용하여 Hover 상태 판단.
   */
  handleHover?: (ishover: boolean) => {};
};

const Card: React.FC<CardProps> = ({
  children,
  round = false,
  handleHover,
}) => {
  const [isHover, setHover] = useState(false);

  useEffect(() => {
    if (typeof handleHover === "function") handleHover(isHover);
  }, [handleHover, isHover]);

  return (
    <div
      className={`${styles.wrapper} ${round && styles.round}`}
      onMouseOver={() => setHover(true)}
      onMouseOut={() => setHover(false)}
    >
      {children}
    </div>
  );
};

export default Card;
