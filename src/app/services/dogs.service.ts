import { Injectable } from '@angular/core';

@Injectable()
export class DogsService {
  private dogs:Dog[] =
   [
    {
     nombre: 'San bernardo',
     bio: 'es una raza de perro originaria de los Alpes suizos y del norte de Italia. Es el perro boyero más famoso junto con el mastín del Pirineo y es muy próximo al gran boyero suizo. ',
     img: '../assets/img/San_Bernardo.jpg',
     aparicion: '¡1695',
     tamaño:'Grande'
  },
  {
    nombre: 'Dogo argentino',
      bio: 'El dogo argentino es una raza canina originaria de Argentina. Se considera representante del Bullenbeisser junto con el alano español. Es parte del grupo Generación Bullenbeisser.',
    img: 'assets/img/batman.png',
    aparicion: '1940',
    tamaño:'Grande'
  },
 {
   nombre: 'Gran danés',
     bio: 'El gran danés, dogo alemán o alano alemán es una raza canina conocida por su gran tamaño y personalidad delicada, considerado como el «Apolo entre todas las razas» por la Federación Cinológica Internacional. También se considera que desciende del Bullenbeisser con mezcla de sangre 50/50 y es parte del grupo Generación Bullenbeisser.',
    img: 'assets/img/daredevil.png',
    aparicion: '1878',
    tamaño:'Grande'
},
{
  nombre: 'Pastor alemán',
    bio: 'El pastor alemán u ovejero alemán (en alemán: Deutscher Schäferhund) es una raza canina que proviene de Alemania.2​ La raza es relativamente nueva, ya que su origen se remonta a 1899.3​Forman parte del grupo de pastoreo, debido a que fueron perros desarrollados originalmente para reunir y vigilar ovejas.',
  img: 'assets/img/hulk.png',
  aparicion: '1899',
  tamaño:'Grande'
},
{
  nombre: 'Terranova',
    bio: 'El Terranova —en inglés: Newfoundland— es una raza de perro que originalmente fue criado para ser utilizado como perro de trabajo por los pescadores de Dominio de Terranova, ahora parte de Canadá.',
  img: 'assets/img/linterna-verde.png',
  aparicion: '1610',
  tamaño:'Grande'
},
{
  nombre: 'Golden retriever',
    bio: 'Posee una disposición amigable y una actitud que lo ha convertido en la tercera raza familiar más popular —mediante registro— en los Estados Unidos,1​el quinto más popular en Australia, y la octava raza más popular en el Reino Unido.',
  img: 'assets/img/spiderman.png',
  aparicion: '1850',
  tamaño:'Grande'
},
{
  nombre: 'Bóxer',
    bio: 'El bóxer alemán o bóxer —en alemán: Deutscher Boxer—, es una raza canina alemana de trabajo y compañía, tipo moloso, que tiende a un tamaño mediano. Su particular conformación hace que sea un perro que no siempre puede ladrar, salvo cuando la ocasión lo amerita o en estado de excitación; la raza fue creada por medio del cruce de un brabant bullenbeisser y un bulldog de antaño, ambas extintas.',
  img: 'assets/img/wolverine.png',
  aparicion: '1895',
  tamaño:'Grande'
}
];
    constructor() {
      console.log('Listo para usar');

    }

    getDogs(){
      return this.dogs;

    }

    getDog(idx:string){
      return this.dogs[idx];
    }
}

export  interface Dog{
  nombre: string;
  bio: string;
  img: string;
  aparicion: string;
  tamaño:string;
}
