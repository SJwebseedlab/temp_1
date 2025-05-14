import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const interiorSteps = [
  {
    title: "상담 문의",
    description: "고객의 요구사항을 파악하고 초기 상담을 통해 맞춤 제안을 위한 준비를 시작합니다.",
    image: "/images/step1.jpg"
  },
  {
    title: "현장 실측",
    description: "전문가가 직접 방문하여 정확한 실측과 공간 분석을 수행합니다.",
    image: "/images/step2.jpg"
  },
  {
    title: "견적 및 계약",
    description: "실측 결과를 바탕으로 상세 견적서를 작성하고 계약을 체결합니다.",
    image: "/images/step3.jpg"
  },
  {
    title: "시공 진행",
    description: "계약된 일정에 따라 자재 준비 및 시공을 진행합니다.",
    image: "/images/step4.jpg"
  },
  {
    title: "마무리 및 A/S",
    description: "공사 완료 후 최종 점검과 함께 사후관리(A/S) 안내를 제공합니다.",
    image: "/images/step5.jpg"
  }
];

export const AutoProgressTimeline = () => {
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % interiorSteps.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full px-4 sm:px-6 lg:px-10 py-16 min-h-screen flex flex-col justify-center">
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6">시공 흐름을 한눈에</h2>
      <p className="text-center text-gray-500 mb-10 max-w-2xl mx-auto text-base sm:text-lg">
        고객의 일상을 바꾸는 시작, 정직한 공정과 신뢰를 담은 시공. <br className="hidden md:block" />
        처음부터 끝까지, 눈에 보이는 안심을 제공합니다.
      </p>
      <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
        {interiorSteps.map((step, index) => (
          <React.Fragment key={index}>
            <motion.div
              animate={{ scale: index === currentStep ? 1.15 : 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className={`text-sm sm:text-base font-semibold px-4 py-2 rounded-full border-2 ${
                index === currentStep
                  ? 'bg-blue-100 border-blue-500 text-blue-700 shadow-lg'
                  : 'bg-gray-100 border-gray-300 text-gray-400'
              }`}
            >
              {step.title}
            </motion.div>
            {index < interiorSteps.length - 1 && (
              <motion.div
                className="w-6 sm:w-8 h-1 rounded-full"
                animate={{
                  backgroundColor: index === currentStep - 1 ? '#3b82f6' : '#d1d5db'
                }}
                transition={{ duration: 0.5 }}
              />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export const ScrollProgressTimeline = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="w-full px-4 sm:px-6 lg:px-10 py-20 min-h-screen bg-gray-50 relative">
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-10">시공 단계별 안내</h2>
      <p className="text-center text-gray-600 max-w-3xl mx-auto mb-16 text-base sm:text-lg">
        고객 맞춤형 인테리어와 필름 시공의 전 과정을 투명하게 공개합니다. <br className="hidden md:block" />
        꼼꼼한 현장 분석, 정확한 견적, 그리고 정성스러운 마무리까지<br className="hidden md:block" />
        우리 팀의 전문성을 확인해보세요.
      </p>

      {/* 오른쪽 슬라이드 이미지 */}
      {hoveredIndex !== null && (
        <motion.img
          key={hoveredIndex}
          src={interiorSteps[hoveredIndex].image}
          alt="미리보기 이미지"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.4 }}
          className="fixed top-1/2 right-4 md:right-10 -translate-y-1/2 w-[260px] sm:w-[340px] lg:w-[460px] h-auto shadow-2xl rounded-xl hidden md:block z-50 transition-all duration-300"
        />
      )}

      <div className="flex flex-col items-start gap-16 sm:gap-24 max-w-4xl mx-auto z-0">
        {interiorSteps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, delay: index * 0.3 }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            className="flex flex-col md:flex-row items-start md:items-center gap-4 sm:gap-6"
          >
            <div className="min-w-[2.5rem] min-h-[2.5rem] bg-blue-600 rounded-full shadow-xl" />
            <div className="bg-white p-5 sm:p-6 rounded-xl border border-gray-300 shadow-lg transform transition hover:scale-105 hover:shadow-2xl w-full">
              <h3 className="text-lg sm:text-2xl font-semibold text-gray-800 mb-2">{step.title}</h3>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">{step.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};