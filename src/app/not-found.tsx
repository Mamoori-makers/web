import Link from 'next/link';

import { SquareLogo } from '@/components/SquareLogo';

export default function NotFound() {
  return (
    <section>
      <div className="container mx-auto flex min-h-screen items-center px-6 py-12">
        <div>
          <SquareLogo />
          <h1 className="mt-3 text-2xl font-semibold text-gray-800 md:text-3xl">
            원하시는 페이지를 찾을 수 없습니다.
          </h1>
          <div className="my-4 text-gray-500">
            <p>찾으려는 페이지의 주소가 잘못 입력되었거나,</p>
            <p>주소의 변경 혹은 삭제로 인해 사용하실 수 없습니다.</p>
            <p>입력하신 페이지의 주소가 정확한지 다시 한번 확인해 주세요.</p>
          </div>
          <Link
            href="/"
            className="rounded-lg bg-gradient-to-r from-brown-200 to-brown-100 px-5 py-2 text-center text-sm text-white"
          >
            마무리 홈 가기
          </Link>
        </div>
      </div>
    </section>
  );
}
