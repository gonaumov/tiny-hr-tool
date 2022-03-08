import { Component } from '@angular/core';
import { ClipboardService } from './clipboard.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'A tiny HR tool';
  constructor(private clipboardService: ClipboardService) {}
  public generateTemplate(hrName: string, candidateName: string) {
    this.clipboardService.copyText(`
      class Person {
         fullName: string;
         constructor(fullName: string) {
            this.fullName = fullName;
         }
      }
      class HR extends Person { }
      class Candidate extends Person {
         constructor(fullName: string, stack: string[]) {
            super(fullName);
            this.stack = stack;
         }
         public stack: string[] = [];
         public get isInterested() {
            return true;
         }
      }
      const me = new HR("${hrName} 😊");
      const you = new Candidate("${candidateName} 💛", ["TypeScript",
         "React",
         "Next"]);

      const newOpportunityAtTechPods = (stack: string[]): string => {
         if (stack.some((item) => you.stack.includes(item)) && you.isInterested) {
            return "I would like to know more";
         }
         return "Thank you for your interest in me, I'm not interested";
      };

      const result = newOpportunityAtTechPods([
         "TypeScript",
         "React",
         "Next",
         "Tailwind",
         "Storybook",
         "HTML5",
         "CSS",
      ]);
      console.log(result);
    `);
  }
}
