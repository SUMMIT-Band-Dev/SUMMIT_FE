"use client";

type HeaderProps = {
  onOpenMenu: () => void;
};

export default function Header({ onOpenMenu }: HeaderProps) {
  return (
    <header className="relative h-[60px] w-full">
      {/* Figma Header의 가운데 로고 텍스트 위치를 맞추기 위해 절대 배치를 사용합니다. */}
      <h1 className="absolute top-4 left-1/2 -translate-x-1/2 text-2xl leading-[28.640625px] font-semibold text-black">
        SUMMIT
      </h1>

      {/* MenuButton(x:374, y:18, 24x24)을 기준으로 우측 상단에 햄버거 버튼을 배치합니다. */}
      <button
        type="button"
        onClick={onOpenMenu}
        aria-label="모바일 메뉴 열기"
        className="absolute top-[18px] right-8 flex h-6 w-6 items-center justify-center"
      >
        <span className="sr-only">메뉴 열기</span>
        <span className="flex flex-col gap-1">
          <span className="block h-0.5 w-5 bg-black" />
          <span className="block h-0.5 w-5 bg-black" />
          <span className="block h-0.5 w-5 bg-black" />
        </span>
      </button>
    </header>
  );
}
