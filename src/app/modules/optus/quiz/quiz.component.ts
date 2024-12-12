interface Evaluation {
  Question_NO: string; // The question number this evaluation belongs to
  Subquestion_No: string; // The subquestion number
  Question: string; // The actual question text
  Answer: string; // The answer provided
  EvaluationResult: {
    Score: number; // The score for the evaluation
    Reasoning: string; // The reasoning behind the evaluation
  };
}


import { Component, ViewChild } from '@angular/core';
import { OptusQuestion } from './Question.json copy';
import { MarketingService } from 'src/app/shared/apis/marketing.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})

export class QuizComponent {
  dataJson: any = OptusQuestion
  QuestionData: any[] = this.dataJson.QuestionData;
  @ViewChild('fileInput', { static: false }) fileInput: any;

  isLogging = false;
  evaluationData: Evaluation[] = []
  pdfEvalutionData :any
  sections = this.QuestionData.map((section) => section.Section);
  selectedSection: string = this.sections[0]; // Default to the first section
  questions: any[] = [];
  Section_Name: string = '';
  hover: boolean = false;

  constructor(public marketingAPI: MarketingService) {
    this.setInitialSection();
    this.loadQuestions();
  }

  showPopup: boolean = true;
  showDetails: boolean = false

  onSave(): void {
    this.showPopup = false
    const answers = this.questions.map((question: any) => {
      const isYesSelected = question.PrimaryQuestion.DocumentUpload;
      return {
        Question_NO: question.Question_NO,
        Primary_Question: question.PrimaryQuestion.Question,
        UploadedFile: isYesSelected && question.uploadedFile ? question.uploadedFile.name : null,
        UploadedFileUrl: question.PrimaryQuestion.DocumentURL,
        RestAnswers: question.RestQuestion
          ? question.RestQuestion.map((rq: any, index: number) => ({
            Subquestion_No: `${question.Question_NO}${String.fromCharCode(97 + index)}`, // Generate subquestion number like '2a', '2b'
            Question: rq.Question,
            Answer: rq.Answer || '',
          }))
          : [],
      };
    });

    console.log('Collected Answers:', answers);
    this.marketingAPI.SaveQuestionAndAnswer(answers).subscribe(
      (data) => {
        let res: any = JSON.parse(JSON.stringify(data));
        this.evaluationData = res
        this.pdfEvaluation(answers)
        this.isLogging = true;
        setTimeout(() => {
          this.isLogging = false;
          this.autoClosePopup();
        }, 2000);
      },
      (error) => {
      }
    );

  }

  pdfEvaluation(answers:any){
    this.marketingAPI.pdfEvaluation(answers).subscribe(
      (data) => {
        let res: any = JSON.parse(JSON.stringify(data));
        this.pdfEvalutionData = res
      },
      (error) => {
      }
    );
  }

  autoClosePopup(): void {
    setTimeout(() => {
      this.closePopup();
    }, 2000); // Close the popup automatically after 5 seconds
  }

  closePopup(): void {
    this.showPopup = true;
    this.showDetails = true
  }

  openUploadFile(url:any){
    window.open(url, '_blank');
  }

  setInitialSection() {
    const firstValidSection = this.QuestionData.find(
      (section) => section.Question && section.Question.length > 0 // Adjusted key to 'Question'
    );
    if (firstValidSection) {
      this.selectedSection = firstValidSection.Section;
      this.loadQuestions();
    } else {
      this.selectedSection = ''; // Fallback if no section has questions
      this.questions = []; // Clear questions if no valid section is found
      this.Section_Name = 'No Section Available';
    }
  }

  // Load questions for the selected section
  loadQuestions() {
    const sectionData = this.QuestionData.find(
      (section) => section.Section === this.selectedSection
    );

    this.questions = sectionData?.Question || []; // Adjusted key to 'Question'
    this.Section_Name = sectionData?.Section_Name || 'Unknown Section';
  }

  // Handle section selection
  selectSection(section: string) {
    this.selectedSection = section;
    this.loadQuestions();
  }


  goToNextSection() {
    const currentIndex = this.sections.indexOf(this.selectedSection);
    if (currentIndex < this.sections.length - 1) {
      this.selectSection(this.sections[currentIndex + 1]);
    }
  }

  // Navigate to the previous section
  goToBackSection() {
    const currentIndex = this.sections.indexOf(this.selectedSection);
    if (currentIndex > 0) {
      this.selectSection(this.sections[currentIndex - 1]);
    }
  }

  // Check if "Next" button should be enabled
  canGoNext(): boolean {
    const currentIndex = this.sections.indexOf(this.selectedSection);
    return currentIndex < this.sections.length - 1;
  }

  // Check if "Back" button should be enabled
  canGoBack(): boolean {
    const currentIndex = this.sections.indexOf(this.selectedSection);
    return currentIndex > 0;
  }

  hasQuestions(section: string): boolean {
    const sectionData = this.QuestionData.find(sec => sec.Section === section);
    return Array.isArray(sectionData?.Question) && sectionData.Question.length > 0;
  }

  triggerFileUpload(questionNo: number): void {
    const fileInput = document.getElementById(`fileInput_${questionNo}`) as HTMLElement;
    fileInput?.click();
  }


  onClick() {
    this.fileInput.nativeElement.click();
  }
  handleFile(event: any, question: any) {
    const file = event.target.files[0];
    question.uploadedFile = file;
    this.uploadFile(file,question);
  }


  uploadFile(file: File, question: any): void {
    const formData = new FormData();
    formData.append('file', file, file.name);
    this.marketingAPI.UploadFile(formData).subscribe(
      (data: any) => {
        
        const uploadedFileUrl = data?.UploadedFileUrl; // Adjust based on API response
        const uploadedFileName = data?.fileName || file.name;
        question.PrimaryQuestion.DocumentURL = uploadedFileUrl;
        question.uploadedFileName = uploadedFileName;
        console.log('File uploaded successfully:', data);
      },
      (error) => {
        console.error('File upload failed:', error);
      }
    );
  }


  getEvaluationsForQuestion(questionNo: string): Evaluation[] {
    return this.evaluationData.filter((evaluation: Evaluation) => {
      const extractedNumber = this.extractQuestionNumber(evaluation.Subquestion_No);
      return extractedNumber === questionNo;
    });
  }

  getEvaluationsForPDF(questionNo: number | string): any[] {
    return this.pdfEvalutionData.filter(
      (evaluation: { Question_NO: { toString: () => string; }; }) => evaluation.Question_NO.toString() === questionNo.toString()
    );
  }
  

  extractQuestionNumber(subquestionNo: string): string {
    return subquestionNo.replace(/[^\d]/g, '');
  }

  // Extract the letter part of Subquestion_No
  extractQuestionLetter(subquestionNo: string): string {
    return subquestionNo.replace(/[\d]/g, '');
  }

}
