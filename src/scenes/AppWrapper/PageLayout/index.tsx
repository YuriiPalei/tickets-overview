import { PropsWithChildren } from "react";
import Header from "common/components/Header";
import styles from "./styles.module.scss";

const PageLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.wrapper__header}>
          <Header />
        </div>
        {children}
      </div>
    </div>
  );
};

export default PageLayout;
