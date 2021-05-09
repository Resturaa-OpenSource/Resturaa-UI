import { trigger, transition, style, animate, state } from '@angular/animations';
export let fade = trigger('fade',[
    state('void',style({transform:'translateX(-100px)'})),
    transition('void=> *',[
      // style({position:'absolute',left:-273}),
      // animate(1000,style({left:0,backgroundColor:'white',opacity:1})),
      // style({transform:'translateX(-100px)'}),
      animate(300),
    ])
  ])
  export let fadeout = trigger('fadeout',[
    state('void',style({transform:'translateY(200px)'})),
    transition('void=>*',[
      // style({position:'absolute',left:-273}),
    //   animate(1000,style({transform:'translateY(100px)'})),
      // style({transform:'translateX(-100px)'}),
      animate(300),
    ])
  ])
