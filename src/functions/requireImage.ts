export const requireImage = (name:string) : string=>{
    switch (name){
        case 'DeLaBrise':
            return require('../../assets//bateau-icon/deLaBrise.png');
        case 'Saphir':
            return require('../../assets//bateau-icon/saphir.png')
        case 'GastMichers':
            return require('../../assets//bateau-icon/gastMicher.png')
        case 'Aquilon':
            return require('../../assets/bateau-icon/aquilon.png')
        case 'Bistrot Gascons':
            return require('../../assets/restaurant-icon/restaurant-le-bistrot-des-gascons.png');
        case 'Bistrot Landais':
            return require('../../assets/restaurant-icon/restaurant-le-bistrot-landais.png');
        case 'Les Fous de l\'Île':
            return require('../../assets/restaurant-icon/restaurant-fou-de-lile.png');
        case 'Villa9Trois':
            return require('../../assets/restaurant-icon/restaurant-villa9trois.png');
        case 'Le Sommelier':
            return require('../../assets/restaurant-icon/restaurant-le-bistrot-du-sommelier.png');
        case 'Homard':
            return require('../../assets/recette-icon/homardRecette.png');
        case 'Raie':
            return require('../../assets/recette-icon/poulpe.png');
        case 'Saint-Jacques':
            return require('../../assets/recette-icon/saintJacques.png');
        case 'Tourteau':
            return require('../../assets/recette-icon/tourteau.png');
        case 'Bar':
            return require('../../assets/recette-icon/barRecette.png');

        default:
            return require('../../assets/recette-icon/saintJacques.png');
    }
}

export const requireIcon = (name:string) :string=>{
    switch (name){
        case 'DeLaBrise':
            return require('../../assets/bateau-icon/deLaBrise_icon.png');
        case 'Saphir':
            return require('../../assets/bateau-icon/saphir_icon.png')
        case 'GastMichers':
            return require('../../assets/bateau-icon/gastMicher_icon.png')
        case 'Aquilon':
            return require('../../assets/bateau-icon/aquilon_icon.png')
        case 'Bistrot Gascons':
            return require('../../assets/restaurant-icon/restaurant-le-bistrot-des-gascons_icon.png');
        case 'Bistrot Landais':
            return require('../../assets/restaurant-icon/restaurant-le-bistrot-landais_icon.png');
        case 'Les Fous de l\'Île':
            return require('../../assets/restaurant-icon/restaurant-fou-de-lile_icon.png');
        case 'Villa9Trois':
            return require('../../assets/restaurant-icon/restaurant-villa9trois_icon.png');
        case 'Le Sommelier':
            return require('../../assets/restaurant-icon/restaurant-le-bistrot-du-sommelier_icon.png');
        case 'Homard':
            return require('../../assets/recette-icon/homardRecette_icon.png');
        case 'Raie':
            return require('../../assets/recette-icon/poulpe_icon.png');
        case 'Saint-Jacques':
            return require('../../assets/recette-icon/saintJacques_icon.png');
        case 'Tourteau':
            return require('../../assets/recette-icon/tourteau_icon.png');
        case 'Bar':
            return require('../../assets/recette-icon/barRecette_icon.png');
        default :
            return require('../../assets/recette-icon/poulpe_icon.png');
    }
}