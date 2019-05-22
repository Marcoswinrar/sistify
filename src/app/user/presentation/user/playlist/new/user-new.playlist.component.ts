import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  templateUrl: './user-new-playlist.component.html',
  styleUrls: ['./user-new-playlist.component.scss']
})
export class UserNewPlaylistComponent implements OnInit {
  
  playlistForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.playlistForm = this.formBuilder.group({
      name: '',
      description: '',
      public: ''
    });
  }
}
