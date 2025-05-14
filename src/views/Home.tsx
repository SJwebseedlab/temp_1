import BeforeAfterSlider from "../components/BeforeAfterSlider";

export default function Home() {
  return (
    <section className="bg-white text-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-10 py-24 text-center animate-fade-in">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 leading-tight">
          당신의 공간, <span className="text-blue-600">새롭게 디자인</span>합니다.
        </h1>
        <p className="text-base sm:text-lg md:text-xl mb-6 text-gray-700">
          단순한 시공을 넘어, 당신의 일상에 가치를 더하는 공간을 만듭니다.
        </p>
        <p className="text-sm sm:text-base text-gray-500 mb-10 max-w-2xl mx-auto">
          수백 건의 프로젝트 경험과 고객 만족으로 입증된 전문 시공 서비스. 자재 선정부터 사후 관리까지 믿고 맡기세요.
        </p>
        <a
          href="/contact"
          className="inline-block bg-blue-600 text-white px-6 sm:px-10 py-3 sm:py-4 text-base sm:text-lg rounded shadow hover:bg-blue-700 transition"
        >
          지금 바로 무료 상담 받기
        </a>

        {/* 소개 섹션 */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="space-y-6 md:space-y-8 text-left text-sm sm:text-base">
            <h2 className="text-2xl sm:text-3xl font-bold">고객의 삶을 바꾸는 필름시공</h2>
            <p className="text-gray-600">필름시공은 단순한 공간 꾸미기를 넘어서, 삶의 질을 높이는 중요한 결정입니다.</p>
            <p className="text-gray-600">우리의 설계는 고객의 니즈를 반영하고, 시공은 디테일을 놓치지 않습니다.</p>
            <p className="text-gray-600">사후관리와 투명한 견적, 자체 시공팀을 통한 일정 준수까지</p>
            <p className="text-gray-600">우리는 고객의 시간을 소중히 여기며, 매 현장을 책임감 있게 마무리합니다.</p>
          </div>
          <div>
            <img
              src="/images/trust_philosophy.jpg"
              alt="신뢰를 담은 인테리어 작업 현장"
              className="rounded-xl shadow-lg w-full object-cover"
            />
          </div>
        </div>

        {/* 가치 카드 섹션 */}
        <div className="mt-28">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center">우리가 중요하게 생각하는 가치</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10">
            {[
              {
                title: "고객과의 소통",
                desc: "시공 전부터 끝까지, 고객의 의견을 경청하고 함께 만들어갑니다.",
                img: "/images/value_communication.jpg",
              },
              {
                title: "디테일과 마감",
                desc: "눈에 띄지 않는 부분까지 꼼꼼히, 오래도록 만족스러운 품질을 추구합니다.",
                img: "/images/value_detail.jpg",
              },
              {
                title: "사후 관리",
                desc: "시공 이후에도 꾸준한 점검과 A/S로 신뢰를 이어갑니다.",
                img: "/images/value_aftercare.jpg",
              },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <img src={item.img} alt={item.title} className="w-full h-48 object-cover rounded-lg mb-4" />
                <h3 className="text-lg font-semibold text-blue-600">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 대표 소개 섹션 */}
        <div className="mt-32 border-t pt-20">
          <h2 className="text-2xl sm:text-3xl font-bold mb-10 text-center">시공을 책임지는 사람</h2>
          <div className="flex flex-col md:flex-row items-center gap-10 max-w-5xl mx-auto text-left">
            <img
              src="/images/profile_owner.jpg"
              alt="대표 프로필 사진"
              className="w-48 sm:w-64 h-48 sm:h-64 object-cover rounded-full shadow-lg"
            />
            <div className="space-y-4 text-sm sm:text-base">
              <h3 className="text-xl font-bold text-blue-700">안황규 프로</h3>
              <p className="text-gray-700">
                수년 동안 필름시공 현장에서 직접 부딪히며 배운 노하우로, 설계부터 시공 및 마무리까지 전 과정을 직접 챙기고 있습니다.
                고객의 눈높이에서 고민하고, 작은 것도 놓치지 않겠다는 마음으로 한 공간 한 공간 정성을 다해 시공합니다.
              </p>
              <p className="text-gray-600 text-sm">
                주요 경력: 일반 주택부터 기업까지 필름 시공 300여건 이상
              </p>
            </div>
          </div>

          <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {["worksite_1", "worksite_2", "worksite_3"].map((img, i) => (
              <img
                key={i}
                src={`/images/${img}.jpg`}
                alt={`작업 현장 사진 ${i + 1}`}
                className="rounded-lg object-cover w-full h-56 sm:h-64"
              />
            ))}
          </div>
        </div>

        {/* 전후 비교 슬라이더 */}
        <div className="mt-32">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center">우리가 하면 다릅니다!</h2>
          <p className="text-gray-600 text-center mb-10">아래 슬라이더를 좌우로 움직여 시공 전후의 차이를 직접 확인해보세요.</p>
          <div className="max-w-3xl mx-auto">
            <BeforeAfterSlider
              beforeImage="/images/compare_before.jpg"
              afterImage="/images/compare_after.jpg"
              altBefore="시공 전 거실 모습"
              altAfter="시공 후 거실 모습"
            />
          </div>
        </div>
      </div>
    </section>
  );
}