'use client';

import { useState } from 'react';
import { SECURITY_FAQ_ITEMS } from './securityData';

// Interactive FAQ accordion for the Security page, matching Dia's exact row design.
export function SecurityFaq() {
  const [openIds, setOpenIds] = useState<Record<string, boolean>>({});

  const toggleItem = (id: string) => {
    setOpenIds(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div id="faq" className="scroll-mt-[100px]">
      <h2 className="dia-h2">FAQ</h2>

      <div className="mt-[16px] flex flex-col gap-0">
        {SECURITY_FAQ_ITEMS.map(item => {
          const isOpen = Boolean(openIds[item.id]);
          const regionId = `security-faq-panel-${item.id}`;

          return (
            <div
              key={item.id}
              className="group border-b border-solid border-black/10 transition-colors duration-200 hover:border-black/30"
            >
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={regionId}
                onClick={() => toggleItem(item.id)}
                className="relative mb-[10px] h-[44px] w-full cursor-pointer pl-[24px] text-left text-[16px] leading-[1.5] font-normal text-[#111111]"
              >
                <svg
                  className={`absolute left-0 top-1/2 -translate-y-1/2 size-[12px] opacity-40 transition-all duration-300 group-hover:opacity-100 ${
                    isOpen ? 'rotate-45 opacity-90' : ''
                  }`}
                  width="17"
                  height="18"
                  viewBox="0 0 17 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.875 9C16.875 9.54688 16.4453 9.9375 15.9375 9.9375H9.6875V16.1875C9.6875 16.7344 9.25781 17.1641 8.75 17.1641C8.20312 17.1641 7.8125 16.7344 7.8125 16.1875V9.9375H1.5625C1.01562 9.9375 0.625 9.54688 0.625 9.03906C0.625 8.49219 1.01562 8.0625 1.5625 8.0625H7.8125V1.8125C7.8125 1.30469 8.20312 0.914062 8.75 0.914062C9.25781 0.914062 9.6875 1.30469 9.6875 1.8125V8.0625H15.9375C16.4453 8.0625 16.875 8.49219 16.875 9Z"
                    fill="currentColor"
                    fillOpacity="0.85"
                  />
                </svg>
                {item.question}
              </button>

              <div
                id={regionId}
                role="region"
                aria-hidden={!isOpen}
                className="grid transition-[grid-template-rows] duration-400 ease-[cubic-bezier(0.76,0,0.24,1)]"
                style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
              >
                <div className="overflow-hidden">
                  <div className="pl-[24px] pb-[32px] text-[16px] leading-[1.5] text-black/60">
                    {item.answer.map((paragraph, idx) => (
                      <p key={idx} className="mb-[8px] last:mb-0">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
