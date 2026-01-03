import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Building2, Shield, CheckCircle } from "lucide-react";

export default function OurHome() {
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
              autoplay={{ delay: 4000 }}
              className="h-96"
            >
              <SwiperSlide className="flex items-center justify-center bg-slate-900">
                <img
                  src="/img/sangork/KakaoTalk_20220404_120007976.jpg"
                  alt="산곡 쌍용더플래티넘"
                  className="w-full h-full object-cover"
                />
              </SwiperSlide>
              <SwiperSlide className="flex items-center justify-center bg-slate-900">
                <img
                  src="/img/sangork/KakaoTalk_20220404_120007976_04.jpg"
                  alt="산곡 쌍용더플래티넘 2"
                  className="w-full h-full object-cover"
                />
              </SwiperSlide>
              <SwiperSlide className="flex items-center justify-center bg-slate-900">
                <img
                  src="/img/sangork/KakaoTalk_20220404_120007976_09.jpg"
                  alt="산곡 쌍용더플래티넘 3"
                  className="w-full h-full object-cover"
                />
              </SwiperSlide>
              <SwiperSlide className="flex items-center justify-center bg-slate-900">
                <img
                  src="/img/sangork/KakaoTalk_20220404_120007976_10.jpg"
                  alt="산곡 쌍용더플래티넘 4"
                  className="w-full h-full object-cover"
                />
              </SwiperSlide>
              <SwiperSlide className="flex items-center justify-center bg-slate-900">
                <img
                  src="/img/sangork/KakaoTalk_20220404_120007976_12.jpg"
                  alt="산곡 쌍용더플래티넘 5"
                  className="w-full h-full object-cover"
                />
              </SwiperSlide>
              <SwiperSlide className="flex items-center justify-center bg-slate-900">
                <img
                  src="/img/sangork/KakaoTalk_20220404_120007976_13.jpg"
                  alt="산곡 쌍용더플래티넘 6"
                  className="w-full h-full object-cover"
                />
              </SwiperSlide>
              <SwiperSlide className="flex items-center justify-center bg-slate-900">
                <img
                  src="/img/sangork/KakaoTalk_20220404_120007976_15.jpg"
                  alt="산곡 쌍용더플래티넘 7"
                  className="w-full h-full object-cover"
                />
              </SwiperSlide>
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
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl mb-2 text-slate-900 font-bold">
                    신축의 안전함
                  </h3>
                  <p className="text-slate-700">
                    <span className="font-semibold text-sky-700">정원이</span>가
                    혼자 있어도 안심할 수 있는 철저한 보안과 쾌적한 커뮤니티
                    시설을 갖춘 신축 단지입니다.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-md border border-slate-100">
              <div className="flex items-start gap-4">
                <div className="bg-slate-900 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl mb-2 text-slate-900 font-bold">
                    사위의 실행력
                  </h3>
                  <p className="text-slate-700">
                    장모님께 허락을 구하기 전, 이미{" "}
                    <span className="font-semibold text-sky-700 bg-sky-100 px-1 rounded">
                      발품을 팔아 계약을 완료
                    </span>
                    했습니다.
                    <span className="font-semibold text-sky-700">정원이</span>는
                    오직 본인의 앞날과 저희의 미래에만 집중할 수 있도록 모든
                    물리적 기반을 닦아두었습니다.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
