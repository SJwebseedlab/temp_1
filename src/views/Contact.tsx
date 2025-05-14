import React, { useState, useRef } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

declare global {
  interface Window {
    daum: any;
  }
}

const InquiryForm = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    addressDetail: "",
    service: "",
    message: "",
    contactMethod: "sms",
  });

  const [date, setDate] = useState<Date | null>(null);
  const postcodeRef = useRef<HTMLDivElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddressSearch = () => {
    new window.daum.Postcode({
      oncomplete: function (data: any) {
        setForm((prev) => ({ ...prev, address: data.address }));
      },
    }).open();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("제출된 폼 데이터:", { ...form, date });
    // 실제 전송 로직 여기에 작성
  };

  return (
    <section className="min-h-screen py-16 px-4 sm:px-6 md:px-10 bg-gradient-to-br from-white to-gray-100">
  <div className="max-w-2xl mx-auto bg-white/90 backdrop-blur-md shadow-2xl rounded-2xl px-6 sm:px-10 py-10">
    <h2 className="text-xl sm:text-2xl font-bold mb-8 text-center text-gray-800">시공 상담 문의</h2>

    <form onSubmit={handleSubmit} className="space-y-6 text-sm sm:text-base">
      {/* 이름 / 연락처 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block font-medium mb-1">이름</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block font-medium mb-1">연락처</label>
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-2"
          />
        </div>
      </div>

      <div className="space-y-4">
  <div>
    <label className="block font-medium mb-1">주소</label>
    <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2">
      <input
        type="text"
        value={form.address}
        name="address"
        readOnly
        className="flex-1 border border-gray-300 rounded-lg px-4 py-2 bg-gray-100 cursor-not-allowed"
      />
      <button
        type="button"
        onClick={handleAddressSearch}
        className="mt-2 sm:mt-0 sm:w-auto bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 text-sm sm:text-base whitespace-nowrap"
      >
        검색
      </button>
    </div>
  </div>

  <div>
    <label className="block font-medium mb-1">상세 주소</label>
    <input
      type="text"
      name="addressDetail"
      value={form.addressDetail || ""}
      onChange={handleChange}
      placeholder="상세 주소를 입력하세요 (예: 아파트 동/호수 등)"
      className="w-full border border-gray-300 rounded-lg px-4 py-2"
    />
  </div>
</div>

      {/* 날짜 선택 */}
      <div>
        <label className="block font-medium mb-1">희망 시공 날짜</label>
        <DatePicker
          selected={date}
          onChange={(date) => setDate(date)}
          dateFormat="yyyy-MM-dd"
          className="w-full border border-gray-300 rounded-lg px-4 py-2"
          placeholderText="날짜 선택"
          showYearDropdown
          showMonthDropdown
          dropdownMode="select"
        />
      </div>

      {/* 서비스 선택 */}
      <div>
        <label className="block font-medium mb-1">시공 대상</label>
        <select
          name="service"
          value={form.service}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-lg px-4 py-2"
        >
          <option value="">선택하세요</option>
          <option value="싱크대">싱크대</option>
          <option value="현관문">현관문</option>
          <option value="중문/방문">중문/방문</option>
          <option value="붙박이장">붙박이장</option>
          <option value="샤시/창틀">샤시/창틀</option>
          <option value="기타">기타</option>
        </select>
      </div>

      {/* 추가 요청 사항 */}
      <div>
        <label className="block font-medium mb-1">요청 사항</label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-lg px-4 py-2 min-h-[100px]"
        />
      </div>

      {/* 전달 방법 선택 */}
      <div>
        <label className="block font-medium mb-2">상담 내용 전달 방법</label>
        <div className="flex gap-2 sm:gap-4">
          {["sms", "email", "kakao"].map((method) => (
            <button
              key={method}
              type="button"
              onClick={() => setForm({ ...form, contactMethod: method })}
              className={`flex-1 px-4 py-2 rounded-lg border transition text-sm sm:text-base ${
                form.contactMethod === method
                  ? "bg-blue-600 text-white border-blue-600"
                  : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
              }`}
            >
              {method === "sms" ? "문자" : method === "email" ? "이메일" : "카카오톡"}
            </button>
          ))}
        </div>
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition"
      >
        상담 요청하기
      </button>
    </form>
  </div>
</section>
  );
};

export default InquiryForm;