import Link from "next/link";
import React, { useEffect, useState } from "react";
import styles from "./Navbar.module.scss";
import { useLogout } from "../../hooks/useLogout";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
import { useRouter } from "next/router";

const Navbar = ({ children }: any) => {
  const { logout } = useLogout();
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  useEffect(() => {
    setIsMenuOpen(false);
  }, [router.asPath]);
  return (
    <div>
      <nav className={styles.navWrapper}>
        <div className={styles.navbar}>
          <h1 className={styles.logotitle} data-open={isMenuOpen}>
            Wikimedia
          </h1>
          <ul className={styles.firstLinks}>
            <li>
              <Link href="/">Homepage </Link>
            </li>

            <li>
              <Link href="/addbook">Add Book</Link>
            </li>

            <li>
              <Link href="/showbook">Show Books</Link>
            </li>
            <li>
              <Link href="/bookfinder">Book Finders</Link>
            </li>
          </ul>
          <ul className={styles.secondLinks}>
            <li>
              <button>
                <Link href="/login">Login</Link>
              </button>
            </li>
            <li>
              <button>
                <Link href="/signup">Sign Up</Link>
              </button>
            </li>
            <div className={styles.arrow}>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <button
              className={styles.mobileNavButton}
              data-open={isMenuOpen}
              onClick={() => setIsMenuOpen((_) => !_)}
            >
              <span data-open={isMenuOpen}></span>
              <span data-open={isMenuOpen}></span>
              <span data-open={isMenuOpen}></span>
            </button>
            {/* <li style={{ cursor: "pointer" }} onClick={logout}>
              Exit
            </li> */}
          </ul>
        </div>
        <div className={styles.mobileNavbar} data-open={isMenuOpen}>
          <ul className={styles.firstLinks}>
            <h1 className={styles.logotitle} data-open={isMenuOpen}>
              Wikimedia
            </h1>
            <li>
              <Link href="/">Homepage</Link>
            </li>
            <li>
              <Link href="/addbook">Add Book</Link>
            </li>
            <li>
              <Link href="/showbook">Show Books</Link>
            </li>
            <li>
              <Link href="/">Book Finder</Link>
            </li>
          </ul>
          <div className={styles.mobileNavSocialWrapper}>
            <div className={styles.mobileNavIcons}>
              <BsFacebook />
            </div>
            <div className={styles.mobileNavIcons}>
              <BsInstagram />
            </div>
            <div className={styles.mobileNavIcons}>
              <BsTwitter />
            </div>
          </div>

          {/* <li style={{ cursor: "pointer" }} onClick={logout}>
              Exit
            </li> */}
        </div>
      </nav>
      {children}
    </div>
  );
};

export default Navbar;
