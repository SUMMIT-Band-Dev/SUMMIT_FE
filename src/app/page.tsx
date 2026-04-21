"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Header from "@/components/Header";
import MobileMenu from "@/components/MobileMenu";

export default function Home() {
  // Header(MenuButton)와 MobileMenu의 관계는 페이지 단위 로컬 상태로 관리합니다.
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMaintext1Visible, setIsMaintext1Visible] = useState(false);
  const [isMaintext2Visible, setIsMaintext2Visible] = useState(false);
  const mainRef = useRef<HTMLElement | null>(null);
  const maintext1Ref = useRef<HTMLParagraphElement | null>(null);
  const maintext2Ref = useRef<HTMLParagraphElement | null>(null);

  useEffect(() => {
    if (!mainRef.current || !maintext1Ref.current || !maintext2Ref.current) {
      return;
    }

    // 스크롤 컨테이너 기준으로 요소의 진입/이탈을 감지해 애니메이션을 재실행합니다.
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === maintext1Ref.current) {
            setIsMaintext1Visible(entry.isIntersecting);
          }
          if (entry.target === maintext2Ref.current) {
            setIsMaintext2Visible(entry.isIntersecting);
          }
        });
      },
      { root: mainRef.current, threshold: 0.2 },
    );

    observer.observe(maintext1Ref.current);
    observer.observe(maintext2Ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-[#f2f4f8]">
      <main
        ref={mainRef}
        className="relative mx-auto h-[100dvh] w-[430px] max-w-full overflow-x-hidden overflow-y-auto bg-white"
      >
        <Header onOpenMenu={() => setIsMenuOpen(true)} />

        {/* 선택된 Figma Home 프레임(430x1487)을 기준으로 내부 캔버스 높이를 맞춥니다. */}
        <section className="relative min-h-[1487px] overflow-x-hidden bg-white">
          {/* Figma Background 그룹(-130, 60, 720x406)을 그대로 반영하고,
              이미지 자체의 알파값이 아래로 사라지도록 mask-image를 적용합니다. */}
          <div className="pointer-events-none absolute top-[60px] left-1/2 h-[406px] w-[720px] -translate-x-1/2 overflow-hidden">
            <Image
              src="/home-background.png"
              alt="공연장 배경"
              width={720}
              height={405}
              priority
              className="h-[405px] w-[720px] object-cover"
              style={{
                opacity: 0.5,
                filter: "blur(1px)",
                WebkitMaskImage:
                  "linear-gradient(to bottom, rgba(0,0,0,1) 15.38%, rgba(0,0,0,0) 100%)",
                maskImage:
                  "linear-gradient(to bottom, rgba(0,0,0,1) 15.38%, rgba(0,0,0,0) 100%)",
              }}
            />
          </div>

          {/* Figma Maintext_1 (x:32, y:230, w:366, h:26)를 반영합니다. */}
          <p
            ref={maintext1Ref}
            className={`absolute top-[230px] left-8 w-[366px] bg-gradient-to-r from-[#00AEFF] to-[#0B0082] bg-clip-text text-center text-2xl leading-[26.4px] font-normal text-transparent ${
              isMaintext1Visible
                ? "maintext-fade-up-active"
                : "maintext-fade-up-hidden"
            }`}
            style={{ fontFamily: '"Sokcho Bada Calligraphy TTF", cursive' }}
          >
            Soongsil Univ IT X AI Band Club.
          </p>

          {/* Figma Maintext_2 (x:84, y:272, w:261, h:24)를 반영합니다. */}
          <p
            ref={maintext2Ref}
            className={`absolute top-[272px] left-[84px] w-[265px] text-center text-xl leading-[23.867px] font-medium text-black ${
              isMaintext2Visible
                ? "maintext-fade-up-active"
                : "maintext-fade-up-hidden"
            }`}
            style={{
              fontFamily: '"Pretendard", system-ui, -apple-system, sans-serif',
            }}
          >
            IT대, AI대 밴드 소모임 <span className="font-bold">SUMMIT</span>
          </p>
        </section>

        <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      </main>
    </div>
  );
}
