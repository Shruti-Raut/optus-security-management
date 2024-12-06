import { Component } from '@angular/core';
import { OptusQuestion } from './Question.json';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent {
  dataJson: any = OptusQuestion
  QuestionData: any[] = this.dataJson.QuestionData;

    // Sections
    sections = this.QuestionData.map((section) => section.Section);
    selectedSection: string = this.sections[0]; // Default to the first section
    questions: any[] = [];
    Section_Name: string = '';
  
    constructor() {
      this.setInitialSection();
      this.loadQuestions();   
    }

    setInitialSection() {
      const firstValidSection = this.QuestionData.find(
        (section) => section.Questions && section.Questions.length > 0
      );
      if (firstValidSection) {
        this.selectedSection = firstValidSection.Section;
      } else {
        this.selectedSection = ''; // Fallback if no section has questions
      }
    }
  
    // Load questions for the selected section
    loadQuestions() {
      const sectionData = this.QuestionData.find(
        (section) => section.Section === this.selectedSection
      );
  
      this.questions = sectionData?.Questions || [];
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
      return sectionData?.Questions?.length > 0;
    }
}
