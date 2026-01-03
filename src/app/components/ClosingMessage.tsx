import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Heart, Home, Smile } from "lucide-react";

export default function ClosingMessage() {
  const heartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!heartRef.current) return;

    gsap.fromTo(
      heartRef.current,
      { scale: 0.8, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: heartRef.current,
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <section className="relative py-20 px-6 bg-gradient-to-b from-sky-50 via-slate-50 to-white overflow-hidden">
      {/* Background image with soft opacity, full inset */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <img
          src="https://imgproxy.gamma.app/resize/quality:80/resizing_type:fit/width:1600/https://cdn.gamma.app/cprutxez700mbje/generated-images/9r24nL30IIgJr_aCPkDUS.png"
          alt="배경-미래"
          className="w-full h-full object-cover opacity-75"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-sky-50/60 to-white/80"></div>
      </div>
      <div className="relative max-w-5xl mx-auto">
        {/* Main message */}
        <div className="text-center mb-16">
          <div ref={heartRef} className="inline-block mb-8">
            <div className="bg-slate-900 w-24 h-24 rounded-full flex items-center justify-center shadow-xl">
              <Heart className="w-12 h-12 text-white fill-white" />
            </div>
          </div>
          <h2 className="text-4xl md:text-6xl mb-8 text-slate-900 font-bold drop-shadow-md">
            믿음직한 사위가 되겠습니다
          </h2>
        </div>

        {/* Core message */}
        <div className="bg-white/90 backdrop-blur-sm p-12 rounded-3xl shadow-2xl mb-12 border border-slate-100">
          <p className="text-xl md:text-2xl text-slate-800 leading-relaxed mb-8 text-center">
            장모님,{" "}
            <span className="text-sky-800 font-bold bg-sky-100 px-2 py-1 rounded">
              "돈을 다 모으고 시작하는 것"
            </span>
            보다{" "}
            <span className="text-sky-800 font-bold bg-sky-100 px-2 py-1 rounded">
              "돈을 모을 수 있는 최적의 환경을 지금 만드는 것"
            </span>
            이 정원이와 저를 위한 가장 똑똑한 선택이라고 믿습니다.
          </p>
          <p className="text-xl md:text-2xl text-slate-800 leading-relaxed text-center">
            이미 준비된{" "}
            <span className="text-slate-900">산곡 쌍용더플래티넘</span>
            에서 정원이와 함께 성실하게 살며, 5년 뒤에는 장모님의 자랑이 될 수
            있는 든든한 사위가 되겠습니다.
          </p>
        </div>

        {/* Emotional highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="text-center p-8 bg-white/85 backdrop-blur-sm rounded-2xl border border-slate-100 shadow-md">
            <Smile className="w-12 h-12 text-slate-700 mx-auto mb-4" />
            <h3 className="text-xl mb-3 text-slate-900 font-semibold">
              정원이의 행복
            </h3>
            <p className="text-slate-700">
              매일 웃으며 출근하고, 꿈을 향해 한 걸음씩 나아가는 정원이의 모습을
              보여드리겠습니다
            </p>
          </div>

          <div className="text-center p-8 bg-white/85 backdrop-blur-sm rounded-2xl border border-slate-100 shadow-md">
            <Home className="w-12 h-12 text-slate-700 mx-auto mb-4" />
            <h3 className="text-xl mb-3 text-slate-900 font-semibold">
              따뜻한 보금자리
            </h3>
            <p className="text-slate-700">
              집은 단순한 공간이 아닌, 사랑과 추억이 쌓이는 곳이 될 것입니다
            </p>
          </div>

          <div className="text-center p-8 bg-white/85 backdrop-blur-sm rounded-2xl border border-slate-100 shadow-md">
            <Heart className="w-12 h-12 text-slate-700 mx-auto mb-4" />
            <h3 className="text-xl mb-3 text-slate-900 font-semibold">
              안심하실 수 있는 미래
            </h3>
            <p className="text-slate-700">
              두 사람이 서로를 아끼며 성실하게 살아가는 모습을 보여드리겠습니다
            </p>
          </div>
        </div>

        {/* Final heartfelt message */}
        <div className="text-center bg-gradient-to-r from-slate-900 via-sky-900 to-slate-900 text-white p-12 rounded-3xl shadow-2xl">
          <p className="text-2xl md:text-3xl leading-relaxed mb-6 drop-shadow-md">
            저희 두 사람의 시작을
            <br />
            믿고 응원해 주십시오
          </p>
          <p className="text-xl text-slate-200">
            언제나 감사하는 마음으로 살겠습니다
          </p>
        </div>

        {/* Footer note */}
        <div className="mt-12 text-center">
          <p className="text-lg md:text-xl text-slate-700">
            이 모든 계획은{" "}
            <span className="font-bold text-sky-700 bg-sky-100 px-2 py-1 rounded">
              정원이와 함께하는
            </span>
            <br />
            <span className="font-bold text-sky-800 bg-sky-50 px-2 py-1 rounded">
              행복한 미래를 위한 첫걸음
            </span>
            입니다
          </p>
        </div>
      </div>
    </section>
  );
}
