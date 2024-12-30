"use client"; 

import { joinExam } from "@/lib/actions";  // Assuming this function handles joining the exam
import { toast } from "react-toastify";
import { useState, useEffect } from "react";
import Image from "next/image";

interface JoinExamButtonProps {
  studentId: string;
  examId: number;
  isJoined: boolean;  // Receive the isJoined status from the parent
}

const JoinExamButton = ({ studentId, examId, isJoined }: JoinExamButtonProps) => {
  const [joined, setJoined] = useState(isJoined);  // Initialize the button state

  useEffect(() => {setJoined(isJoined); 
}, [isJoined]);

  const handleJoin = async () => {
    try {
      const result = await joinExam(studentId, examId);  // Call to your API to join the exam

      if (result.success) {
        toast(`You have successfully joined the exam: ${result.message}`);
        setJoined(true);  // Update the joined state after successful join
      } else {
        toast.error(result.message || "Failed to join the exam.");
      }
    } catch (error) {
      console.error("Failed to join the exam:", error);
      toast.error("Failed to join the exam. Please try again.");
    }
  };

  return (
    <button
      className={`w-7 h-7 flex items-center justify-center rounded-full ${joined ? "bg-gray-400 cursor-not-allowed" : "bg-lamaYellow hover:bg-lamaPurple"}`}
      onClick={handleJoin}
      disabled={joined}  // Disable the button if already joined
    >
      <Image src="/create.png" alt="Join Exam" width={16} height={16} />
    </button>
  );
};

export default JoinExamButton;
