import { Home, TrendingUp, Heart, DollarSign } from "lucide-react";

const phases = [
  {
    year: "2025~2026",
    title: "지금",
    icon: Home,
    description: "청년 전세자금 대출로 주거비 최소화",
    subtitle: "정원이의 성공적인 사회 진출",
    color: "bg-sky-600",
  },
  {
    year: "2027~2028",
    title: "중반",
    icon: TrendingUp,
    description: "신혼부부 대출 전환 및 자산 증식",
    subtitle: "매달 300~350만 원 성실 저축",
    color: "bg-slate-700",
  },
  {
    year: "2029~2030",
    title: "결실",
    icon: DollarSign,
    description: "신생아 특례/디딤돌 대출 활용",
    subtitle: "5~6억대 내 집 마련 성공",
    color: "bg-blue-600",
  },
  {
    year: "목표",
    title: "행복",
    icon: Heart,
    description: "장모님께서 안심하실 수 있는 가정",
    subtitle: "경제적으로 자립한 따뜻한 보금자리",
    color: "bg-slate-900",
  },
];

export default function Roadmap() {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-white via-sky-50 to-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-6xl text-center mb-4 bg-gradient-to-r from-slate-900 via-sky-800 to-slate-900 bg-clip-text text-transparent font-bold">
          저희의 시작과 5년 뒤의 약속
        </h2>
        <p className="text-xl text-center text-slate-600 mb-16 font-medium">
          전체 로드맵
        </p>

        {/* Desktop Timeline - Horizontal */}
        <div className="hidden lg:block">
          {/* Timeline Line */}
          <div className="relative mb-8">
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-sky-600 via-blue-600 to-slate-900 -translate-y-1/2"></div>
            {/* Timeline dots */}
            <div className="relative flex justify-between">
              {phases.map((phase, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center"
                  style={{ width: "25%" }}
                >
                  <div
                    className={`${phase.color} w-16 h-16 rounded-full flex items-center justify-center shadow-lg border-4 border-white z-10 mb-4`}
                  >
                    <phase.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Timeline Content Cards */}
          <div className="grid grid-cols-4 gap-6 mt-12">
            {phases.map((phase, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-slate-100"
              >
                <div className="text-sm text-sky-700 font-bold mb-2 bg-sky-100 px-2 py-1 rounded inline-block">
                  {phase.year}
                </div>
                <h3 className="text-2xl mb-3 text-slate-900 font-bold">
                  {phase.title}
                </h3>
                <p className="text-slate-700 mb-3 text-sm leading-relaxed">
                  {phase.description}
                </p>
                <p className="text-slate-600 text-sm">{phase.subtitle}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Timeline - Vertical */}
        <div className="lg:hidden space-y-8">
          {phases.map((phase, index) => (
            <div key={index} className="relative flex gap-6">
              {/* Timeline line */}
              {index < phases.length - 1 && (
                <div className="absolute left-8 top-20 bottom-0 w-1 bg-gradient-to-b from-sky-600 via-blue-600 to-slate-900"></div>
              )}

              {/* Icon */}
              <div
                className={`${phase.color} w-16 h-16 rounded-full flex items-center justify-center shadow-lg flex-shrink-0 z-10 border-4 border-white`}
              >
                <phase.icon className="w-8 h-8 text-white" />
              </div>

              {/* Content */}
              <div className="flex-1 bg-white p-6 rounded-2xl shadow-md border border-slate-100">
                <div className="text-sm text-sky-700 font-bold mb-2 bg-sky-100 px-2 py-1 rounded inline-block">
                  {phase.year}
                </div>
                <h3 className="text-2xl mb-3 text-slate-900 font-bold">
                  {phase.title}
                </h3>
                <p className="text-slate-700 mb-3 leading-relaxed">
                  {phase.description}
                </p>
                <p className="text-slate-600">{phase.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
