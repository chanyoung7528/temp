import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Building2, PawPrint, Users, X } from "lucide-react";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerClose,
} from "@/app/components/ui/drawer";

export default function OurHome() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [initialSlide, setInitialSlide] = useState(0);

  const images = [
    "/img/sangork/KakaoTalk_20220404_120007976.jpg",
    "/img/sangork/KakaoTalk_20220404_120007976_04.jpg",
    "/img/sangork/KakaoTalk_20220404_120007976_09.jpg",
    "/img/sangork/KakaoTalk_20220404_120007976_10.jpg",
    "/img/sangork/KakaoTalk_20220404_120007976_12.jpg",
    "/img/sangork/KakaoTalk_20220404_120007976_13.jpg",
    "/img/sangork/KakaoTalk_20220404_120007976_15.jpg",
    "/img/sangork/gork1.jpg",
    "/img/sangork/gork3.jpg",
    "/img/sangork/gork6.jpg",
    "/img/sangork/gork9.jpg",
    "/img/sangork/grok4.jpg",
    "/img/sangork/grok7.jpg",
  ];

  const openModal = (index: number) => {
    setInitialSlide(index);
    setDrawerOpen(true);
  };

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-sky-50 via-white to-slate-50 animate-on-scroll">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-6xl text-center mb-6 bg-gradient-to-r from-slate-900 via-sky-800 to-slate-900 bg-clip-text text-transparent font-bold">
          이미 준비를 마친 보금자리
        </h2>
        <p className="text-2xl text-center mb-16 text-slate-700 font-medium">
          <span className="font-bold text-sky-700 bg-sky-100 px-3 py-1 rounded">
            산곡 쌍용더플래티넘
          </span>
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image swiper */}
          <div className="bg-sky-100 rounded-2xl overflow-hidden shadow-lg border border-sky-200">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              navigation
              pagination={{ clickable: true }}
              loop={true}
              className="h-96"
            >
              {images.map((src, idx) => (
                <SwiperSlide
                  key={idx}
                  className="flex items-center justify-center bg-slate-900 cursor-pointer"
                  onClick={() => openModal(idx)}
                >
                  <img
                    src={src}
                    alt={`산곡 쌍용더플래티넘 ${idx + 1}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-200"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div className="space-y-6">
            <div className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-md border border-slate-100">
              <div className="flex items-start gap-4">
                <div className="bg-sky-600 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
                  <Building2 className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl mb-2 text-slate-900 font-bold">
                    위치
                  </h3>
                  <p className="text-slate-700">
                    <span className="font-semibold text-sky-700">
                      106동 15층
                    </span>{" "}
                    - 탁 트인 조망과 채광이 훌륭한 로열층
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-md border border-slate-100">
              <div className="flex items-start gap-4">
                <div className="bg-sky-700 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
                  <PawPrint className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl mb-2 text-slate-900 font-bold">
                    반려견 친화적 환경
                  </h3>
                  <p className="text-slate-700">
                    인근{" "}
                    <span className="font-semibold text-sky-700 bg-sky-100 px-1 rounded">
                      원적산공원
                    </span>
                    에서 일상적 산책이 가능하고, 단지 내 보행로도 잘 정비되어
                    반려견과 안전한 생활 환경을 제공합니다. 장기 거주를 고려한
                    안정적인 생활 조건입니다.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-md border border-slate-100">
              <div className="flex items-start gap-4">
                <div className="bg-slate-900 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl mb-2 text-slate-900 font-bold">
                    가족과 가까운 위치
                  </h3>
                  <p className="text-slate-700">
                    장모님 댁과{" "}
                    <span className="font-semibold text-sky-700 bg-sky-100 px-1 rounded">
                      대중교통 약 20분
                    </span>{" "}
                    거리(인천2호선 석남역), 검암역 인근 언니 댁과도 가까워 가족
                    간 왕래가 용이합니다. 예상치 못한 상황에서도 가족의 도움을
                    받기 쉬운 최적의 거리입니다.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Drawer open={drawerOpen} onOpenChange={setDrawerOpen}>
        <DrawerContent className="bg-slate-950">
          <DrawerClose className="absolute top-4 right-4 z-10 bg-white text-slate-900 hover:bg-slate-100 p-3 rounded-full transition-colors shadow-lg">
            <X className="w-6 h-6" />
          </DrawerClose>
          <DrawerHeader className="text-white pt-6 pb-4">
            <DrawerTitle className="text-2xl font-bold text-center">
              산곡 쌍용더플래티넘
            </DrawerTitle>
            <DrawerDescription className="text-slate-300 text-center text-sm">
              화살표로 이미지를 넘겨보세요
            </DrawerDescription>
          </DrawerHeader>
          <div className="flex-1 px-6 pb-8 overflow-hidden flex items-center justify-center">
            <Swiper
              modules={[Navigation, Pagination]}
              navigation
              pagination={{ clickable: true }}
              initialSlide={initialSlide}
              centeredSlides={true}
              loop={true}
              className="h-full w-full bg-slate-900 rounded-xl"
            >
              {images.map((src, idx) => (
                <SwiperSlide
                  key={idx}
                  className="flex items-center justify-center bg-slate-900 p-4"
                >
                  <div className="w-full h-full flex items-center justify-center">
                    <img
                      src={src}
                      alt={`산곡 쌍용더플래티넘 ${idx + 1}`}
                      className="max-w-full max-h-full object-contain mx-auto"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </DrawerContent>
      </Drawer>
    </section>
  );
}
