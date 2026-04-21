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
  const [isSubtext1Visible, setIsSubtext1Visible] = useState(false);
  const [isSubtext2Visible, setIsSubtext2Visible] = useState(false);
  const [isLogotextVisible, setIsLogotextVisible] = useState(false);
  const mainRef = useRef<HTMLElement | null>(null);
  const maintext1Ref = useRef<HTMLParagraphElement | null>(null);
  const maintext2Ref = useRef<HTMLParagraphElement | null>(null);
  const subtext1Ref = useRef<HTMLParagraphElement | null>(null);
  const subtext2Ref = useRef<HTMLParagraphElement | null>(null);
  const logotextRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (
      !mainRef.current ||
      !maintext1Ref.current ||
      !maintext2Ref.current ||
      !subtext1Ref.current ||
      !subtext2Ref.current ||
      !logotextRef.current
    ) {
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
          if (entry.target === subtext1Ref.current) {
            setIsSubtext1Visible(entry.isIntersecting);
          }
          if (entry.target === subtext2Ref.current) {
            setIsSubtext2Visible(entry.isIntersecting);
          }
          if (entry.target === logotextRef.current) {
            setIsLogotextVisible(entry.isIntersecting);
          }
        });
      },
      { root: mainRef.current, threshold: 0.2 },
    );

    observer.observe(maintext1Ref.current);
    observer.observe(maintext2Ref.current);
    observer.observe(subtext1Ref.current);
    observer.observe(subtext2Ref.current);
    observer.observe(logotextRef.current);

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
          {/* Figma Background 그룹(-250, 60, 929.261x524)을 그대로 반영하고,
              이미지 자체의 알파값이 아래로 사라지도록 mask-image를 적용합니다. */}
          <div className="pointer-events-none absolute top-[60px] left-1/2 h-[524px] w-[929.261px] -translate-x-1/2 overflow-hidden">
            <Image
              src="/home-background.png"
              alt="공연장 배경"
              width={929}
              height={523}
              priority
              className="h-[522.709px] w-[929.261px] object-cover"
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

          {/* Maintext_1은 가운데 정렬 + 좌우 최소 12px 여백(430-24=406)을 유지합니다. */}
          <p
            ref={maintext1Ref}
            className={`absolute top-[289px] left-1/2 w-[406px] -translate-x-1/2 whitespace-nowrap bg-gradient-to-r from-[#00AEFF] to-[#0B0082] bg-clip-text text-center text-[27px] leading-[29.7px] font-normal text-transparent ${
              isMaintext1Visible
                ? "maintext-fade-up-active"
                : "maintext-fade-up-hidden"
            }`}
            style={{ fontFamily: '"Sokcho Bada Calligraphy TTF", cursive' }}
          >
            Soongsil Univ IT X AI Band Club
          </p>

          {/* Maintext_2는 문구가 길어져도 줄바꿈되지 않도록 nowrap을 적용합니다. */}
          <p
            ref={maintext2Ref}
            className={`absolute top-[331px] left-[84px] w-[261px] whitespace-nowrap text-center text-xl leading-[23.867px] font-medium text-black ${
              isMaintext2Visible
                ? "maintext-fade-up-active"
                : "maintext-fade-up-hidden"
            }`}
            style={{
              fontFamily: '"Pretendard", system-ui, -apple-system, sans-serif',
            }}
          >
            IT대, AI대 밴드 소모임{" "}
            <span className="font-bold text-[#0B0082]">SUMMIT</span>
          </p>

          {/* Figma Subtext_1 (x:0, y:720, w:430, h:29) */}
          <p
            ref={subtext1Ref}
            className={`absolute top-[720px] left-0 w-[430px] text-center text-2xl leading-[28.640625px] font-bold text-black ${
              isSubtext1Visible
                ? "figma-fade-in-text-active"
                : "figma-fade-in-hidden"
            }`}
            style={{ fontFamily: '"Pretendard", system-ui, -apple-system, sans-serif' }}
          >
            Since 2012,
          </p>

          {/* Figma Subtext_2 (x:0, y:761, w:430, h:26) */}
          <p
            ref={subtext2Ref}
            className={`absolute top-[761px] left-0 w-[430px] text-center text-[22px] leading-[26.253906px] font-normal text-black ${
              isSubtext2Visible
                ? "figma-fade-in-text-active"
                : "figma-fade-in-hidden"
            }`}
            style={{ fontFamily: '"Pretendard", system-ui, -apple-system, sans-serif' }}
          >
            써밋 웹페이지 제작중입니다.
          </p>

          {/* Figma logotext (x:0, y:811, w:430, h:56) */}
          <div
            ref={logotextRef}
            className={`absolute top-[811px] left-0 h-[56px] w-[430px] ${
              isLogotextVisible
                ? "figma-fade-in-logo-active"
                : "figma-fade-in-hidden"
            }`}
          >
            <p
              className="absolute top-[6px] left-[78.5px] w-[197px] text-center text-[40px] leading-[44px] font-normal text-black"
              style={{ fontFamily: '"Puradak Gentle Gothic OTF", "Pretendard", sans-serif' }}
            >
              SUMMIT
            </p>

            <div className="absolute top-0 left-[295.5px] h-14 w-14 overflow-hidden rounded-full border border-black bg-white">
              <Image
                src="/summit-logo.png"
                alt="SUMMIT 심볼"
                width={56}
                height={56}
                className="h-14 w-14 object-cover"
              />
            </div>
          </div>
        </section>

        <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      </main>
    </div>
  );
}
