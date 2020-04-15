import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'yema-avatar-selector',
  templateUrl: './avatar-selector.component.html',
  styleUrls: ['./avatar-selector.component.scss'],
})
export class AvatarSelectorComponent implements OnInit {
  @Output() avatarSel = new EventEmitter<string>();
  @Input() avatarActual = 'av-1.png';

  avatars = [
    { img: '01.jpg', seleccionado: true  },
    { img: '02.jpg', seleccionado: false },
    { img: '03.jpg', seleccionado: false },
    { img: '04.jpg', seleccionado: false },
    { img: '05.jpg', seleccionado: false },
    { img: '06.jpg', seleccionado: false },
    { img: '07.jpg', seleccionado: false },
    { img: '08.jpg', seleccionado: false },
    { img: '09.jpg', seleccionado: false },
    { img: '10.jpg', seleccionado: false },
    { img: '11.jpg', seleccionado: false },
    { img: '12.jpg', seleccionado: false },
    { img: '13.jpg', seleccionado: false },
    { img: '14.jpg', seleccionado: false },
    { img: '15.jpg', seleccionado: false },
    { img: '16.jpg', seleccionado: false },
    { img: '17.jpg', seleccionado: false },
    { img: '18.jpg', seleccionado: false },
    { img: '19.jpg', seleccionado: false },
    { img: '20.jpg', seleccionado: false },
    { img: '21.jpg', seleccionado: false },
    { img: '22.jpg', seleccionado: false },
    { img: '23.jpg', seleccionado: false },
    { img: '24.jpg', seleccionado: false }
];

  avatarSlide = {
    slidesPerView: 3.5
  };

  constructor() { }

  ngOnInit() {

    this.avatars.forEach( avatar => avatar.seleccionado = false );

    for ( const avatar of this.avatars ) {

      if ( avatar.img === this.avatarActual ) {
        avatar.seleccionado = true;
        break;
      }
    }

  }

  seleccionarAvatar( avatar ) {

    this.avatars.forEach( av => av.seleccionado = false  );
    avatar.seleccionado = true;

    console.log(avatar.img);
    this.avatarSel.emit( avatar.img );

  }

}
