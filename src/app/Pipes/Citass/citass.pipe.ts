import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'citass'
})
export class CitassPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    const resultPosts =[];

for(const post of value){
if(post.correo.indexOf(arg)> -1){
resultPosts.push(post);

};


}



    return resultPosts;
  }

}
