import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../../services/account/courses.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-courses',
  standalone:true,
  imports: [CommonModule,FormsModule],
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  courses: any[] = []; // Array to store the list of courses

  constructor( private coursesService: CoursesService) { }

  ngOnInit(): void {
    this.getCourses(); // Call method to fetch courses when component initializes
  }

  getCourses() {
    this.coursesService.getAllCourses().subscribe(
      (data) => {
        this.courses = data; // Assign fetched courses to the array
      },
      (error) => {
        console.error('Error fetching courses:', error);
      }
    );
  }
}
