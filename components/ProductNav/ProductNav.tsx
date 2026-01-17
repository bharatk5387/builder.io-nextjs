"use client";
import * as React from "react";
import Counter from "../Counter/Counter";
import styles from "./styles.module.css";

function ProductNav() {
  return (
    <>
      <div className="clear-both bg-white">
        <nav aria-label="Product Categories">
          <ul className="flex flex-wrap justify-center mb-4 text-center">
            <li
              aria-expanded="false"
              clickgroup-telemetry-enabled=""
              aria-controls="listitempopoverxefd4486d867f4e259cd765b3123bee43"
              className={styles.navItem}
            >
              <a
                aria-label="Choose your Microsoft 365"
                target="_self"
                role=" "
                href="https://www.microsoft.com/en-in/microsoft-365/buy/compare-all-microsoft-365-products?icid=MSCOM_QL_M365"
                className={styles.productLink}
              >
                Choose your Microsoft 365
                <span aria-hidden="true" className="inline" />
              </a>
            </li>
            <li
              aria-expanded="false"
              clickgroup-telemetry-enabled=""
              aria-controls="listitempopoverxff1da8e30ecb45a98e12252bf3acbb35"
              className={styles.navItem}
            >
              <img
                width="40"
                height="40"
                alt=""
                src="https://cdn-dynmedia-1.microsoft.com/is/content/microsoftcorp/Link-List-Icons-Xbox-Games-Consoles?wid=40&hei=40"
                className={styles.productIcon}
              />
              <a
                aria-label="Shop Xbox"
                target="_self"
                role=" "
                href="https://www.microsoft.com/en-in/store/b/xbox?icid=MSCOM_QL_Xbox"
                className={styles.productLink}
              >
                Shop Xbox
                <span aria-hidden="true" className="inline" />
              </a>
            </li>
            <li
              aria-expanded="false"
              clickgroup-telemetry-enabled=""
              aria-controls="listitempopoverxe54427071a064f439515fe676abc9859"
              className={styles.navItem}
            >
              <img
                width="40"
                height="40"
                alt=""
                src="https://cdn-dynmedia-1.microsoft.com/is/content/microsoftcorp/Link-List-Icons-Microsoft-365?wid=40&hei=40"
                className={styles.productIcon}
              />
              <a
                aria-label="Get Windows 11"
                target="_self"
                role=" "
                href="https://www.microsoft.com/en-in/windows/get-windows-11?icid=MSCOM_QL_Windows"
                className={styles.productLink}
              >
                Get Windows 11
                <span aria-hidden="true" className="inline" />
              </a>
            </li>
            <li
              aria-expanded="false"
              clickgroup-telemetry-enabled=""
              aria-controls="listitempopoverxb0d5a5b5adf54d9bb7f18074ed2cae02"
              className={styles.navItem}
            >
              <img
                width="40"
                height="40"
                alt=""
                src="https://cdn-dynmedia-1.microsoft.com/is/content/microsoftcorp/Link-List-Icons-Surface-Devices?wid=40&hei=40"
                className={styles.productIcon}
              />
              <a
                aria-label="Explore Surface devices"
                target="_self"
                role=" "
                href="https://www.microsoft.com/en-in/surface?icid=MSCOM_QL_Surface"
                className={styles.productLink}
              >
                Explore Surface devices
                <span aria-hidden="true" className="inline" />
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <Counter />
    </>
  );
}

export default ProductNav;
