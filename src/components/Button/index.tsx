import React from "react";
import styles from "./index.module.scss";

export type ButtonProps = {
  /** Button 안의 내용에 대해서 정의 */
  children: React.ReactNode;
  /** Click시 호출 할 함수에 대하여 정의 */
  onClick?: (e: React.MouseEvent) => any;
  /** Button 테마에 대하여 정의 */
  them?: "primary" | "secondary";
  /** Button radius 활성화에 대하여 정의 */
  radius?: boolean;
  /** Button width에 대하여 정의 */
  width?: string | number;
  /** Button height 대하여 정의 */
  height?: string | number;
};

/** `Button` Component는 특정 작업을 트리거 할 때 사용합니다. */
const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  them = "primary",
  radius = false,
  width,
  height,
}) => {
  return (
    <button
      className={`${styles.wrapper} ${styles[them]} ${radius && styles.radius}`}
      style={{
        width,
        height,
      }}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
