import Image from "next/image";
import SignUpForm from "@/components/signup-form/signup-form";
export default function Home() {
  return (
    <div className="container bg-sky-400">
      <div className="grid grid-cols-2 gap-4">
        <div className="h-full mt-3 mx-4">
          <Image
            src="/images/Onboarding.png"
            alt="This picture"
            width={600}
            height={700}
          />
        </div>
        <div className="bg-white p-4">
          <SignUpForm />
        </div>
      </div>
    </div>
  );
}
