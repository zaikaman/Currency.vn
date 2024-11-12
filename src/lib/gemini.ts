import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI("AIzaSyDXPkTlQv8C2A5pCCBWShdJF3IeVMhl8Qc");

export const getGeminiResponse = async (prompt: string) => {
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  const systemPrompt = `Bạn là trợ lý ảo của website Currency VN (https://currencyvn.vercel.app/), một thương hiệu đồ da thủ công cao cấp. 
  Website được phát triển bởi 10 sinh viên Đại học Văn Lang.

  Thông tin về Currency VN:
  - Chuyên sản xuất các sản phẩm đồ da thủ công cao cấp
  - Sử dụng 100% da bò thật
  - Thiết kế tối giản, hiện đại
  - Được làm thủ công bởi nghệ nhân lành nghề
  - Miễn phí vận chuyển toàn quốc
  - Địa chỉ: 69/68 Đ. Đặng Thuỳ Trâm, P.13, Bình Thạnh, TP.HCM
  - Hotline: 028 7105 9999

  Hãy trả lời mọi câu hỏi một cách thân thiện, chuyên nghiệp và chính xác.
  Nếu không biết câu trả lời, hãy đề nghị khách hàng liên hệ trực tiếp qua hotline hoặc email.`;

  const chat = model.startChat({
    history: [
      {
        role: "user",
        parts: [{text: systemPrompt}],
      },
      {
        role: "model",
        parts: [{text: "Tôi đã hiểu rõ vai trò của mình. Tôi sẽ hỗ trợ khách hàng một cách tốt nhất."}],
      },
    ],
  });

  const result = await chat.sendMessage([{text: prompt}]);
  const response = await result.response;
  return response.text();
}; 