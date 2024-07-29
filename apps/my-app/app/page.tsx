import Chatbox from "@/components/home/chatbox";
import Navbar from "@/components/home/navbar";
import TemplateQuestionCard from "@/components/home/template-question-card";
import TemplateQuestion from "@/components/home/template-questions";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <Navbar />
      <TemplateQuestion />
      <Chatbox />
    </div>
  );
}
