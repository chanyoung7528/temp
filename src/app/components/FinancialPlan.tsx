import { useState } from "react";
import { Slider } from "@radix-ui/react-slider";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

export default function FinancialPlan() {
  const [monthlySaving, setMonthlySaving] = useState(300);
  const [homePrice, setHomePrice] = useState(5.5);

  // Calculate cumulative savings over 5 years
  const savingsData = Array.from({ length: 60 }, (_, i) => {
    const month = i + 1;
    const year = Math.floor(month / 12) + 2025;
    const accumulated = monthlySaving * month; // in 만원
    return {
      month: `${year}년 ${month % 12 || 12}월`,
      monthNum: month,
      저축액: accumulated,
    };
  }).filter((_, i) => i % 6 === 5); // Show every 6 months

  const finalSavings = monthlySaving * 60; // Total savings in 만원
  const finalSavingsInEok = finalSavings / 10000; // Convert to 억원

  // Home purchase breakdown
  const ltv = 0.7; // 70% LTV
  const cashNeeded = homePrice * (1 - ltv);
  const loanAmount = homePrice * ltv;

  const purchaseData = [
    { name: "자기자본", value: cashNeeded, color: "#0ea5e9" }, // sky-500
    { name: "대출", value: loanAmount, color: "#1e293b" }, // slate-900
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-sky-50 via-white to-slate-50 animate-on-scroll">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-6xl text-center mb-6 text-gray-900">
          성실하게 쌓아갈 5년의 자금 계획
        </h2>
        <p className="text-xl text-center mb-16 text-gray-600">
          투명하고 구체적인 미래 설계
        </p>

        {/* Financial table */}
        <div className="bg-gray-50 rounded-2xl p-8 mb-12 shadow-lg">
          <table className="w-full">
            <thead>
              <tr className="border-b-2 border-gray-900">
                <th className="text-left py-4 px-4 text-gray-900">구분</th>
                <th className="text-left py-4 px-4 text-gray-900">내용</th>
                <th className="text-left py-4 px-4 text-gray-900">비고</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              <tr className="border-b border-gray-200">
                <td className="py-4 px-4">고정 수입</td>
                <td className="py-4 px-4">부부 합산 월 500~550만 원 예상</td>
                <td className="py-4 px-4">정원이 취업 시 기준</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="py-4 px-4">저축 목표</td>
                <td className="py-4 px-4">
                  <span className="text-2xl text-gray-900">
                    매달 {monthlySaving}만 원 저축
                  </span>
                </td>
                <td className="py-4 px-4">생활비 200만 원 내외 관리</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="py-4 px-4">적금/도약계좌</td>
                <td className="py-4 px-4">
                  2029년까지 약 {finalSavingsInEok.toFixed(1)}억 원 확보
                </td>
                <td className="py-4 px-4">만기 이자 및 지원금 포함</td>
              </tr>
              <tr>
                <td className="py-4 px-4">내 집 마련</td>
                <td className="py-4 px-4">
                  현금 {cashNeeded.toFixed(1)}억 + 저금리 대출{" "}
                  {loanAmount.toFixed(1)}억
                </td>
                <td className="py-4 px-4">
                  <span className="text-2xl text-gray-900">
                    {homePrice}억대 아파트 매수 가능
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Interactive simulators */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          {/* Savings simulator */}
          <div className="bg-gray-50 p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl mb-6 text-gray-900">
              월 저축액 시뮬레이터
            </h3>
            <div className="mb-8">
              <div className="flex justify-between items-center mb-4">
                <span className="text-gray-700">월 저축액</span>
                <span className="text-3xl text-gray-900">
                  {monthlySaving}만 원
                </span>
              </div>
              <Slider
                value={[monthlySaving]}
                onValueChange={(value) => setMonthlySaving(value[0])}
                min={250}
                max={350}
                step={10}
                className="relative flex items-center w-full h-5 cursor-pointer"
              >
                <div className="relative h-2 w-full grow rounded-full bg-gray-300">
                  <div
                    className="absolute h-full rounded-full bg-gray-900 transition-all"
                    style={{ width: `${((monthlySaving - 250) / 100) * 100}%` }}
                  />
                </div>
                <div className="block h-5 w-5 rounded-full border-2 border-gray-900 bg-white shadow transition-all hover:scale-110" />
              </Slider>
            </div>
            <div className="bg-white p-6 rounded-xl">
              <p className="text-slate-600 mb-2">5년 후 예상 자산</p>
              <p className="text-4xl text-slate-900">
                {finalSavingsInEok.toFixed(1)}억 원
              </p>
            </div>

            {/* Savings chart */}
            <div className="mt-8">
              <ResponsiveContainer width="100%" height={250}>
                <AreaChart data={savingsData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#cbd5e1" />
                  <XAxis
                    dataKey="monthNum"
                    tickFormatter={(value) =>
                      `${Math.floor(value / 12) + 1}년차`
                    }
                    stroke="#0ea5e9"
                  />
                  <YAxis stroke="#0ea5e9" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#f8fbff",
                      border: "1px solid #bae6fd",
                      borderRadius: "8px",
                      color: "#0f172a",
                    }}
                  />
                  <Area
                    type="monotone"
                    dataKey="저축액"
                    stroke="#0ea5e9"
                    fill="#7dd3fc99"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Home purchase simulator */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100">
            <h3 className="text-2xl mb-6 text-slate-900">
              주택 구매 시뮬레이터 (LTV 70%)
            </h3>
            <div className="mb-8">
              <div className="flex justify-between items-center mb-4">
                <span className="text-gray-700">목표 주택가</span>
                <span className="text-3xl text-gray-900">{homePrice}억 원</span>
              </div>
              <Slider
                value={[homePrice * 10]}
                onValueChange={(value) => setHomePrice(value[0] / 10)}
                min={50}
                max={60}
                step={1}
                className="relative flex items-center w-full h-5 cursor-pointer"
              >
                <div className="relative h-2 w-full grow rounded-full bg-sky-100">
                  <div
                    className="absolute h-full rounded-full bg-sky-500 transition-all"
                    style={{ width: `${((homePrice * 10 - 50) / 10) * 100}%` }}
                  />
                </div>
                <div className="block h-5 w-5 rounded-full border-2 border-sky-600 bg-white shadow transition-all hover:scale-110" />
              </Slider>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
                <p className="text-slate-600 mb-2">필요 자기자본</p>
                <p className="text-3xl text-slate-900">
                  {cashNeeded.toFixed(1)}억
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
                <p className="text-slate-600 mb-2">대출 금액</p>
                <p className="text-3xl text-slate-900">
                  {loanAmount.toFixed(1)}억
                </p>
              </div>
            </div>

            {/* Purchase breakdown chart */}
            <div className="mt-8">
              <ResponsiveContainer width="100%" height={250}>
                <PieChart>
                  <Pie
                    data={purchaseData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, value }) =>
                      `${name}: ${value.toFixed(1)}억`
                    }
                    outerRadius={80}
                    fill="#0ea5e9"
                    dataKey="value"
                  >
                    {purchaseData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#f8fbff",
                      border: "1px solid #bae6fd",
                      borderRadius: "8px",
                      color: "#0f172a",
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Budget feasibility indicator */}
        <div className="bg-gradient-to-r from-slate-900 via-sky-800 to-slate-900 text-white p-8 rounded-2xl shadow-lg">
          <div className="text-center">
            <p className="text-xl mb-2">목표 달성 가능성</p>
            {finalSavingsInEok >= cashNeeded ? (
              <div>
                <p className="text-5xl mb-4">✓ 목표 달성 가능</p>
                <p className="text-gray-300">
                  5년간 {monthlySaving}만 원씩 저축하면 {homePrice}억 원대 주택
                  구매가 가능합니다
                </p>
              </div>
            ) : (
              <div>
                <p className="text-3xl mb-4">저축액 조정 필요</p>
                <p className="text-gray-300">
                  월 {Math.ceil((cashNeeded * 10000) / 60)}만 원 이상 저축 시
                  목표 달성 가능합니다
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
