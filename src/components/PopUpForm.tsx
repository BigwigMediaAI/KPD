import { useState } from "react";
import axios from "axios";
const BASE_URL = import.meta.env.VITE_API_BASE_URL;

interface PopupFormProps {
  onClose: () => void;
}

const PopupForm: React.FC<PopupFormProps> = ({ onClose }) => {
  const [step, setStep] = useState<"form" | "otp">("form");
  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    purpose: "",
    message: "",
  });

  const [otp, setOtp] = useState("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSendOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatusMessage("");

    try {
      await axios.post(`${BASE_URL}/api/lead/send-otp`, formData);
      setStatusMessage("OTP sent! Please check your email.");
      setStep("otp");
    } catch (err: any) {
      if (err.response?.status === 400) {
        setStatusMessage(err.response.data.message || "Email already used.");
      } else {
        setStatusMessage("Something went wrong. Try again later.");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatusMessage("");

    try {
      await axios.post(`${BASE_URL}/api/lead/verify-otp`, {
        email: formData.email,
        otp,
      });
      setStatusMessage("Lead saved successfully!");
      setTimeout(onClose, 2000);
    } catch (err: any) {
      setStatusMessage(err.response?.data?.message || "Invalid OTP.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
      <div className="bg-[#04365b] max-w-sm w-full p-6 rounded-lg shadow-xl relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-lg font-bold text-white"
        >
          ✕
        </button>
        <h2 className="text-xl font-bold text-center mb-1 text-white">
          Let's Grow Together!
        </h2>
        <p className="text-center mb-4 text-white">
          Have a question or request? Ask us anything!
        </p>

        {step === "form" ? (
          <form className="space-y-3" onSubmit={handleSendOtp}>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Full Name"
              className="w-full p-2 border rounded"
              required
            />
            <div className="flex gap-2">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email ID"
                className="w-1/2 p-2 border rounded"
                required
              />
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Mobile No."
                className="w-1/2 p-2 border rounded"
                required
              />
            </div>

            {/* ✅ Purpose Field */}
            <select
              name="purpose"
              value={formData.purpose}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            >
              <option value="">Select Purpose</option>
              <option value="buy">Buy Property</option>
              <option value="sell">Sell Property</option>
            </select>

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Explain your requirements (minimum 50 characters)"
              className="w-full p-2 border rounded"
              rows={3}
              required
            ></textarea>

            <button
              type="submit"
              disabled={loading}
              className="bg-[#DA4D42] text-white w-full py-2 rounded-full mt-2 hover:bg-red-700"
            >
              {loading ? "Sending OTP..." : "Submit Now"}
            </button>
          </form>
        ) : (
          <form className="space-y-3" onSubmit={handleVerifyOtp}>
            <input
              type="text"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              placeholder="Enter OTP"
              className="w-full p-2 border rounded"
              required
            />
            <button
              type="submit"
              disabled={loading}
              className="bg-green-600 text-white w-full py-2 rounded-full mt-2 hover:bg-green-700"
            >
              {loading ? "Verifying..." : "Verify OTP"}
            </button>
          </form>
        )}

        {statusMessage && (
          <p className="text-sm text-white text-center mt-2">{statusMessage}</p>
        )}
      </div>
    </div>
  );
};

export default PopupForm;
