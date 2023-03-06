import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { QuestionBase } from 'src/app/shared/models/question-base';
import json from '../../shared/data/form-inputs.json';
import { QuestionControlService } from './question-control.service';

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.css'],
})
export class QuestionnaireComponent implements OnInit {
  personalDetails: QuestionBase<string>[] | null = [];
  address: QuestionBase<string>[] | null = [];

  formPersonal!: FormGroup;
  formAddress!: FormGroup;

  constructor(private qcs: QuestionControlService) {
    this.personalDetails = json['personal-details'] as QuestionBase<string>[];
    this.address = json['address'] as unknown as QuestionBase<string>[];
  }

  ngOnInit(): void {
    this.formPersonal = this.qcs.toFormGroup(
      this.personalDetails as QuestionBase<string>[]
    );
    this.formAddress = this.qcs.toFormGroup(
      this.address as QuestionBase<string>[]
    );
  }
}
