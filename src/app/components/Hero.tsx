export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-gradient-to-br from-sky-50 via-blue-50 to-slate-100 px-6 py-12">
      {/* Single background image with softer opacity */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <img
          src="https://imgproxy.gamma.app/resize/quality:80/resizing_type:fit/width:1600/https://cdn.gamma.app/cprutxez700mbje/generated-images/feP3KrvP8DwTzCZui5Pin.png"
          alt="배경"
          className="w-full h-full object-cover opacity-75"
        />
      </div>

      {/* Overlay for readability */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-sky-50/60 to-slate-100/75"></div>

      {/* Main Content */}
      <div className="relative z-10 flex-1 flex items-center justify-center">
        <div className="max-w-5xl mx-auto text-center px-4">
          <h1 className="text-3xl lg:text-6xl mb-8 font-bold text-slate-900 leading-tight drop-shadow-[0_4px_12px_rgba(15,23,42,0.25)]">
            장모님,
            <br />
            저희 두 사람의
            <br />
            행복한 시작과 미래를
            <br />
            말씀드리고 싶습니다
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl text-slate-700 font-medium max-w-3xl mx-auto leading-relaxed">
            5년 뒤, 저희가 함께 만들어갈
            <br />
            <span className="text-sky-700 font-semibold">
              따뜻하고 든든한 가정 이야기
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
