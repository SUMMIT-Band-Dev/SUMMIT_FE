"use client";

import { useState } from "react";
import Header from "@/components/Header";
import MobileMenu from "@/components/MobileMenu";

export default function Home() {
  // Header(MenuButton)와 MobileMenu의 관계는 페이지 단위 로컬 상태로 관리합니다.
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#f2f4f8] py-4">
      <main className="mx-auto h-[100dvh] w-full max-w-[430px] overflow-y-auto bg-white">
        <Header onOpenMenu={() => setIsMenuOpen(true)} />

        {/* 선택된 Figma Home 프레임(430x932)을 기준으로 내부 캔버스 높이를 맞춥니다. */}
        <section className="relative min-h-[932px] bg-white">
          {/* 텍스트 위치(x:28, y:447, width:374)를 그대로 반영합니다. */}
          <h1 className="absolute top-[447px] left-7 w-[374px] text-center text-[32px] leading-[38.1875px] font-semibold text-black">
            SUMMIT Web Page 공사중
          </h1>
        </section>

        <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      </main>
    </div>
  );
}
