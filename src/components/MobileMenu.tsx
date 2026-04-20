"use client";

type MobileMenuProps = {
  isOpen: boolean;
  onClose: () => void;
};

const menuItems = [
  { label: "ABOUT", active: true },
  { label: "RECRUITING", active: false },
  { label: "Schedule", active: false },
];

const subMenuItems = ["소모임실 대여", "멘토링"];

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  return (
    <div
      className={`absolute inset-0 z-40 h-full w-full transition-opacity duration-300 ease-out ${
        isOpen
          ? "pointer-events-auto opacity-100"
          : "pointer-events-none opacity-0"
      }`}
      aria-hidden={!isOpen}
    >
      {/* Open Overlay 연출: 메뉴가 열리면 배경을 어둡게 처리하고, 배경 클릭 시 메뉴를 닫습니다. */}
      <button
        type="button"
        aria-label="메뉴 닫기"
        onClick={onClose}
        className="absolute inset-0 h-full w-full bg-black/40"
      />

      <div className="h-full w-full overflow-hidden">
        {/* 왼쪽에서 등장하도록 translate-x 기반 슬라이드 애니메이션을 적용합니다. */}
        <aside
          className={`relative h-full w-[348px] bg-white transition-transform duration-300 ease-out ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
          onClick={(event) => event.stopPropagation()}
          role="dialog"
          aria-modal="true"
          aria-label="모바일 메뉴"
        >
          {/* Figma MobileMenu의 Button(24x24)을 닫기 버튼으로 해석해 동일 위치에 배치합니다. */}
          <button
            type="button"
            onClick={onClose}
            aria-label="모바일 메뉴 닫기"
            className="absolute top-[41px] right-10 flex h-6 w-6 items-center justify-center text-xl leading-none"
          >
            ×
          </button>

          {/* Figma MenuList(y:84)와 Function_Box 구조를 코드로 분해해 동일한 정보 계층으로 렌더링합니다. */}
          <nav className="px-10 pt-[84px]">
            <ul className="space-y-12">
              {menuItems.map((item) => (
                <li key={item.label}>
                  <button
                    type="button"
                    className={`text-left text-[20px] leading-[23.8671875px] font-medium ${
                      item.active ? "text-[#0b0082]" : "text-black"
                    }`}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>

            <div className="mt-12">
              <p className="text-[20px] leading-[23.8671875px] font-medium text-black">
                기능
              </p>
              <ul className="mt-4 space-y-4 pl-4">
                {subMenuItems.map((item) => (
                  <li key={item}>
                    <button
                      type="button"
                      className="text-left text-base leading-[19.09375px] font-normal text-black"
                    >
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        </aside>
      </div>
    </div>
  );
}
