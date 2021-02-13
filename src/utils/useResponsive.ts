/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   useResponsive.ts                                   :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: jaeskim <jaeskim@student.42seoul.kr>       +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2021/02/13 17:52:10 by jaeskim           #+#    #+#             */
/*   Updated: 2021/02/13 18:24:21 by jaeskim          ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import { useMediaQuery } from "react-responsive";

const useResponsive = () => {
  const isMobile = useMediaQuery({
    query: `(max-width: 767px)`,
  });
  const isTablet = useMediaQuery({
    query: `(min-width: 768px) and (max-width: 1023px)`,
  });
  const isDesktop = useMediaQuery({
    query: `(min-width: 1024px)`,
  });

  return {
    isMobile,
    isTablet,
    isDesktop,
  };
};

export default useResponsive;
