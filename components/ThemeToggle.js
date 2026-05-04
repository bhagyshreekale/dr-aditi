"use client";

import { useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";

export default function ThemeToggle() {
  const { dark, setDark } = useContext(ThemeContext);

  return (
    <div
      onClick={() => setDark(!dark)}
      className={`theme-toggle ${dark ? "dark" : ""}`}
    >
      <div className="toggle-thumb">
        <div className="moon" />
      </div>

      <div className="stars">
        <span />
        <span />
        <span />
      </div>

      <style jsx>{`
        .theme-toggle {
          width: 50px;
          height: 30px;
          border-radius: 50px;
          background: linear-gradient(135deg, #cfd9ff, #f28b8b);
          position: relative;
          cursor: pointer;
          transition: all 0.4s ease;
          display: flex;
          align-items: center;
          padding: 5px;
        }

        .theme-toggle.dark {
          background: linear-gradient(135deg, #6c511a, #0f1c3f);
        }

        .toggle-thumb {
          width: 20px;
          height: 20px;
          background: #fff;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transform: translateX(0);
          transition: transform 0.4s ease;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
        }

        .theme-toggle.dark .toggle-thumb {
          transform: translateX(46px);
          background: #e5e7eb;
        }

        .moon {
          width: 10px;
          height: 10px;
          background: #d1d5db;
          border-radius: 50%;
          position: relative;
        }

        .moon::before {
          content: "";
          position: absolute;
          width: 10px;
          height: 10px;
          background: #fff;
          border-radius: 50%;
          top: -3px;
          left: 4px;
        }

        /* Stars */
        .stars span {
          position: absolute;
          width: 6px;
          height: 6px;
          background: white;
          border-radius: 50%;
          opacity: 0;
          transition: opacity 0.4s ease;
        }

        .stars span:nth-child(1) {
          top: 10px;
          left: 50px;
        }

        .stars span:nth-child(2) {
          top: 20px;
          left: 65px;
        }

        .stars span:nth-child(3) {
          top: 28px;
          left: 52px;
        }

        .theme-toggle.dark .stars span {
          opacity: 1;
        }
      `}</style>
    </div>
  );
}