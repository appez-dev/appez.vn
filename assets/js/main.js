/**
 * 주식회사 앱이지(AppEZ) 공식 홈페이지 - 공통 자바스크립트
 * 스크롤 인터랙션, 모바일 네비게이션 토글, AOS/Lucide 아이콘 통합 초기화
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. 헤더 스크롤 인터랙션
  const header = document.querySelector('header');
  if (header) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 20) {
        header.classList.add('backdrop-blur-md', 'bg-[#0f172a]/80', 'border-b', 'border-white/10', 'shadow-lg');
        header.classList.remove('bg-transparent');
      } else {
        header.classList.remove('backdrop-blur-md', 'bg-[#0f172a]/80', 'border-b', 'border-white/10', 'shadow-lg');
        header.classList.add('bg-transparent');
      }
    });
  }

  // 2. 모바일 메뉴 토글 제어
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileMenuCloseBtn = document.getElementById('mobile-menu-close-btn');

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.remove('hidden');
      document.body.style.overflow = 'hidden'; // 스크롤 방지
    });
  }

  if (mobileMenuCloseBtn && mobileMenu) {
    mobileMenuCloseBtn.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
      document.body.style.overflow = ''; // 스크롤 재개
    });
  }

  // 모바일 메뉴 링크 클릭 시 자동 닫힘
  if (mobileMenu) {
    const mobileLinks = mobileMenu.querySelectorAll('a');
    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        document.body.style.overflow = '';
      });
    });
  }

  // 3. AOS 애니메이션 초기화 (스크롤 트리거 애니메이션)
  if (typeof AOS !== 'undefined') {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-out-cubic',
      offset: 100
    });
  }

  // 4. Lucide 아이콘 초기화 (벡터 아이콘)
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }
});
