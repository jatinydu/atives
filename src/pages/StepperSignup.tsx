import Button from "@/components/lib/Button";
import { useState } from "react";

export default function OnboardingStepper() {
  const [step, setStep] = useState(1);

  const nextStep = () => setStep((prev) => Math.min(prev + 1, 2));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  return (
    <div className="p-6 mx-auto mt-[10vh] py-10 flex flex-col items-center">
      <h1 className="text-3xl font-semibold mb-2">Join the Creative Community</h1>
      <p className="mb-7 text-sm text-secondary-400">Create your account and start showcasing your amazing work</p>
      <div className="flex justify-center gap-4 mb-6">
        {[1, 2].map((s) => (
          <div
            key={s}
            className={`w-10 h-10 flex items-center justify-center rounded-full border-2 ${
              step === s ? "border-accent-800 text-accent-800" : "border-gray-300 text-gray-500"
            }`}
          >
            {s}
          </div>
        ))}
      </div>

      {step === 1 && (
        <div>
          <h2 className="text-xl font-bold mb-4">Step 1 - Basic Info</h2>
          <input
            type="text"
            placeholder="Name"
            className="border-2 w-full p-2 rounded-lg mb-3 focus:outline-0 focus:border-accent-800"
          />
          <input
            type="email"
            placeholder="Email"
            className="border-2 w-full p-2 rounded-lg focus:outline-0 focus:border-accent-800"
          />
        </div>
      )}

      {step === 2 && (
        <div>
          <h2 className="text-xl font-bold mb-4">Step 2 - Details</h2>
          <input
            type="text"
            placeholder="Location"
            className="border-2 w-full p-2 rounded-lg mb-3 focus:outline-0 focus:border-accent-800"
          />
          <textarea
            placeholder="Short Bio"
            className="border-2 w-full p-2 rounded-lg focus:outline-0 focus:border-accent-800"
          />
        </div>
      )}

      {/* Navigation buttons */}
      <div className="flex justify-between mt-6 gap-3">
        {step > 1 && (
          <Button
            label="Back"
            variant="secondary"
            onClick={prevStep}
          />
        )}
        {step < 2 ? (
          <Button
            variant="secondary"
            size="md"
            onClick={nextStep}
            className=""
            label="Next"
          />
        ) : (
          <Button
            variant="primary"
            size="md"
            onClick={() => alert("Signup Complete!")}
            className="ml-auto px-4 py-2 rounded text-white"
            label="Finish"
          />
        )}
      </div>
    </div>
  );
}
