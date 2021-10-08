import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'jaula'
})
export class JaulaPipe implements PipeTransform {


  transform(value: any, arg: any): any {
    const resultPosts =[];

for(const post of value){
if(post.activa.indexOf(arg)> -1|| post.idmascota.indexOf(arg)> -1|| post.hora_jau.indexOf(arg)> -1 ){
resultPosts.push(post);

};


}



    return resultPosts;
  }
  

}
