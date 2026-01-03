import { Clock, PiggyBank, Shield } from "lucide-react";

const reasons = [
  {
    icon: Clock,
    title: "혜택의 골든타임",
    description:
      "정부 지원 대출은 소득이 낮을 때 혜택이 가장 큽니다. 정원이가 취업하여 부부 합산 소득이 올라가면 오히려 금리가 높아지거나 혜택이 사라질 수 있습니다.",
  },
  {
    icon: PiggyBank,
    title: "현명한 자금 관리",
    description:
      "지금 합치면 각자 나가는 월세, 생활비, 교통비를 매달 150만 원 이상 아낄 수 있습니다. 이 돈은 5년 뒤 저희 집을 사는 소중한 밑거름이 됩니다.",
  },
  {
    icon: Shield,
    title: "불확실성 대비",
    description:
      "대출 한도가 줄어들고 전세가가 계속 오르는 상황에서, 현재의 좋은 조건으로 주거 비용을 4년간 고정해두는 것이 가장 안전한 선택입니다.",
  },
];

export default function WhyNow() {
  return (
    <section className="py-20 px-6 bg-slate-50 animate-on-scroll">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-6xl text-center mb-6 bg-gradient-to-r from-slate-900 via-sky-800 to-slate-900 bg-clip-text text-transparent font-bold">
          지금 시작하는 것이
        </h2>
        <p className="text-2xl md:text-3xl text-center mb-16 text-slate-700 font-medium">
          정원이와 저에게 가장 이로운 이유
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 border border-slate-100"
              >
                <div className="bg-sky-700 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl mb-4 text-slate-900 font-bold">
                  {reason.title}
                </h3>
                <p className="text-slate-700 leading-relaxed">
                  {reason.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
