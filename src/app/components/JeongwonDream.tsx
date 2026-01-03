import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { MapPin, Briefcase, Heart, X } from "lucide-react";

export default function JeongwonDream() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImages, setModalImages] = useState<string[]>([]);
  const [modalTitle, setModalTitle] = useState("");
  const [initialSlide, setInitialSlide] = useState(0);

  const beforeImages = [
    "/img/map/KakaoTalk_Photo_2026-01-03-13-12-32%20001.jpeg",
    "/img/map/KakaoTalk_Photo_2026-01-03-13-12-33%20002.jpeg",
    "/img/map/KakaoTalk_Photo_2026-01-03-13-12-33%20003.jpeg",
    "/img/map/KakaoTalk_Photo_2026-01-03-13-12-33%20004.jpeg",
  ];

  const afterImages = [
    "/img/map/KakaoTalk_Photo_2026-01-03-13-12-50%20001.jpeg",
    "/img/map/KakaoTalk_Photo_2026-01-03-13-12-51%20002.jpeg",
    "/img/map/KakaoTalk_Photo_2026-01-03-13-12-52%20003.jpeg",
    "/img/map/KakaoTalk_Photo_2026-01-03-13-12-52%20004.jpeg",
  ];

  const openModal = (images: string[], title: string, index: number) => {
    setModalImages(images);
    setModalTitle(title);
    setInitialSlide(index);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  // ESC 키로 모달 닫기
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape" && modalOpen) {
        closeModal();
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [modalOpen]);

  // 모달 열릴 때 스크롤 방지
  useEffect(() => {
    if (modalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [modalOpen]);

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-sky-50 via-white to-slate-50 animate-on-scroll">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-6xl text-center mb-6 bg-gradient-to-r from-slate-900 via-sky-800 to-slate-900 bg-clip-text text-transparent font-bold">
          <span className="text-sky-700">정원이</span>의 꿈을 위해
        </h2>
        <p className="text-2xl text-center mb-16 text-slate-700 font-medium">
          준비한 새로운 환경
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
          <div className="space-y-6">
            <div className="flex gap-4 bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-md border border-slate-100">
              <div className="bg-sky-600 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl mb-2 text-slate-900 font-bold">
                  <span className="text-sky-700">환경이 바뀌면</span> 기회가
                  생깁니다
                </h3>
                <p className="text-slate-700">
                  지금 거주지는{" "}
                  <span className="font-semibold text-sky-700">정원이</span>의
                  전공과 꿈을 펼칠 일자리가 부족하고 교통이 힘듭니다. 이는{" "}
                  <span className="font-semibold text-sky-700">정원이</span>의
                  탓이 아닌{" "}
                  <span className="font-semibold text-sky-700 bg-sky-100 px-1 rounded">
                    환경의 문제
                  </span>
                  입니다.
                </p>
              </div>
            </div>

            <div className="flex gap-4 bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-md border border-slate-100">
              <div className="bg-sky-700 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
                <Briefcase className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl mb-2 text-slate-900 font-bold">
                  <span className="text-sky-700 bg-sky-100 px-2 py-1 rounded">
                    산곡역 7호선 역세권
                  </span>
                  의 장점
                </h3>
                <p className="text-slate-700">
                  <span className="font-semibold text-sky-700">
                    강남, 여의도, 가산
                  </span>{" "}
                  등 일자리가 가장 많은 지역까지 환승 없이 연결됩니다.{" "}
                  <span className="font-semibold text-sky-700">정원이</span>가
                  어디든 자신 있게 지원하고 편하게 출퇴근할 수 있는 환경을
                  만들어주고 싶습니다.
                </p>
              </div>
            </div>

            <div className="flex gap-4 bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-md border border-slate-100">
              <div className="bg-slate-900 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl mb-2 text-slate-900 font-bold">
                  사위의 마음
                </h3>
                <p className="text-slate-700">
                  <span className="font-semibold text-sky-700">정원이</span>가
                  구직 스트레스에서 벗어나, 새로운 곳에서 활기차게 사회생활을
                  시작할 수 있도록 곁에서 든든하게 서포트하겠습니다.
                </p>
              </div>
            </div>
          </div>

          {/* 좌우 비교 슬라이더 */}
          <div className="space-y-6">
            <div className="text-center mb-4">
              <p className="text-lg font-bold text-slate-900 mb-2">
                교통 접근성 비교
              </p>
              <p className="text-sm text-slate-600">
                이미지를 클릭하면 크게 볼 수 있습니다
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {/* Before 슬라이더 */}
              <div className="space-y-2">
                <div className="text-center py-2 bg-slate-100 rounded-t-xl">
                  <span className="text-sm font-bold text-slate-700">
                    현재 거주지
                  </span>
                </div>
                <div className="bg-slate-900 rounded-b-xl overflow-hidden shadow-lg">
                  <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    navigation
                    pagination={{ clickable: true }}
                    autoplay={false}
                    className="h-96"
                  >
                    {beforeImages.map((src, idx) => (
                      <SwiperSlide
                        key={idx}
                        className="flex items-center justify-center bg-slate-900 cursor-pointer"
                        onClick={() =>
                          openModal(beforeImages, "현재 거주지", idx)
                        }
                      >
                        <img
                          src={src}
                          alt={`현재 거주지 ${idx + 1}`}
                          className="w-full h-full object-contain hover:scale-105 transition-transform duration-200"
                        />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>

              {/* After 슬라이더 */}
              <div className="space-y-2">
                <div className="text-center py-2 bg-sky-100 rounded-t-xl">
                  <span className="text-sm font-bold text-sky-700">
                    산곡역 역세권
                  </span>
                </div>
                <div className="bg-slate-900 rounded-b-xl overflow-hidden shadow-lg">
                  <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    navigation
                    pagination={{ clickable: true }}
                    autoplay={false}
                    className="h-96"
                  >
                    {afterImages.map((src, idx) => (
                      <SwiperSlide
                        key={idx}
                        className="flex items-center justify-center bg-slate-900 cursor-pointer"
                        onClick={() =>
                          openModal(afterImages, "산곡역 역세권", idx)
                        }
                      >
                        <img
                          src={src}
                          alt={`산곡역 역세권 ${idx + 1}`}
                          className="w-full h-full object-contain hover:scale-105 transition-transform duration-200"
                        />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 확대 모달 */}
      {modalOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex flex-col items-center justify-center p-4"
          onClick={closeModal}
        >
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 z-50 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-colors"
            aria-label="닫기"
          >
            <X className="w-6 h-6" />
          </button>

          <div
            className="w-full max-w-6xl h-full flex flex-col py-16"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-4 text-center flex-shrink-0">
              <h3 className="text-2xl font-bold text-white mb-1">
                {modalTitle}
              </h3>
              <p className="text-sm text-slate-300">
                화살표로 이미지를 넘겨보세요
              </p>
            </div>

            <div className="flex-1 min-h-0">
              <Swiper
                modules={[Navigation, Pagination]}
                navigation
                pagination={{ clickable: true }}
                initialSlide={initialSlide}
                className="h-full bg-slate-900 rounded-xl"
              >
                {modalImages.map((src, idx) => (
                  <SwiperSlide
                    key={idx}
                    className="flex items-center justify-center bg-slate-900"
                  >
                    <img
                      src={src}
                      alt={`${modalTitle} ${idx + 1}`}
                      className="w-full h-full object-contain"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
