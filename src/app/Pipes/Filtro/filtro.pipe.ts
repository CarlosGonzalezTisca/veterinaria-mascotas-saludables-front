import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    const resultPosts =[];

for(const post of value){
if(post.nombre.indexOf(arg)> -1 || post.apellido1.indexOf(arg)> -1|| post.apellido2.indexOf(arg)> -1|| post.correo.indexOf(arg)> -1  ){
resultPosts.push(post);

};


}



    return resultPosts;
  }
  

}


