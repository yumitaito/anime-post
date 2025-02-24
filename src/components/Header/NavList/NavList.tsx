"use client";

import Link from "next/link";
import { useState } from "react";

export const NavList = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="w-full">
      <div className="flex md:justify-start justify-center items-center relative">
        {/* ハンバーガーメニューボタン - スマホのみ表示、右側に配置 */}
        <button
          className="absolute right-4 md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <div className="space-y-2 mr">
            <span className="block w-8 h-0.5 bg-white"></span>
            <span className="block w-8 h-0.5 bg-white"></span>
            <span className="block w-8 h-0.5 bg-white"></span>
          </div>
        </button>

        {/* メインリンク - PCでは左寄せ、スマホでは中央寄せ */}
        <Link
          href="/"
          className="hover:text-gray-200 text-xl font-bold md:ml-20"
        >
          アニメランキング投票
        </Link>

        {/* ランキング表リンク - PCでは横並び、スマホではサイドドロワー */}
        <ul
          className={`
          md:flex md:items-center md:ml-8
          fixed md:static top-0 -left-48 md:left-0 h-full md:h-auto
          bg-sky-500 md:bg-transparent
          w-48 md:w-auto
          transition-all duration-300 ease-in-out
          ${isMenuOpen ? "translate-x-48" : "translate-x-0"} md:translate-x-0
          p-8 md:p-0
          shadow-lg md:shadow-none
          z-50 md:z-auto
        `}
        >
          <li className="mt-16 md:mt-0">
            <Link
              href="/rankings"
              className="hover:text-gray-200 text-xl font-bold"
            >
              ランキング表
            </Link>
          </li>
        </ul>

        {/* オーバーレイ - スマホのドロワーメニュー表示時のみ表示 */}
        {isMenuOpen && (
          <div
            className="fixed md:hidden inset-0 bg-black bg-opacity-50 z-40"
            onClick={() => setIsMenuOpen(false)}
          />
        )}
      </div>
    </nav>
  );
};
