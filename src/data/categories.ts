export type Category = { id: string; name: string; description: string; accent: string; art: number };

// Temporary research categories. Replace this list when official categories are available.
export const categories: Category[] = [
  { id: "self-awareness", name: "การรู้จักตัวเอง", description: "กลับมามองตัวตน และสิ่งที่ทำให้คุณเป็นคุณ", accent: "bg-yellow", art: 0 },
  { id: "emotions", name: "ความรู้สึกและอารมณ์", description: "ให้พื้นที่กับความรู้สึกที่อยู่ข้างในวันนี้", accent: "bg-pink", art: 1 },
  { id: "relationships", name: "ความสัมพันธ์", description: "สำรวจสายใยระหว่างคุณกับคนรอบตัว", accent: "bg-green", art: 2 },
  { id: "change", name: "การเปลี่ยนแปลง", description: "มองช่วงเวลาที่ชีวิตกำลังขยับไปสู่สิ่งใหม่", accent: "bg-blue text-primary-foreground", art: 3 },
  { id: "future", name: "เป้าหมายและอนาคต", description: "มองความหวัง และเส้นทางที่อยากเดินต่อ", accent: "bg-orange", art: 4 },
  { id: "growth", name: "การเติบโตของตัวเอง", description: "ทบทวนสิ่งที่ได้เรียนรู้ระหว่างทาง", accent: "bg-yellow", art: 5 },
];