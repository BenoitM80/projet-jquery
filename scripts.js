$(function(){
  
    var $mainMenuItems = $("#main-menu ul").children("li");
    var totalMainMenuItems = $mainMenuItems.length;
    var openedIndex = 2;

    ///// Initialisation du traitement /////
    var init = function(){
      
      bindEvents();
      if(validIndex(openedIndex)){
        animateItem($mainMenuItems.eq(openedIndex), true, 700);
      }
    };

    // gestion des événements:
    bindEvents = function() {

      // clic sur l'image
      $mainMenuItems.children(".images").click(function(){
        var newIndex = $(this).parent().index();        // récupère l'index cliqué

        checkAndAnimateItem(newIndex);
      });

      $(".button").hover(
        function(){
          $(this).addClass("hovered");
      },
      function(){
        $(this).removeClass("hovered");
      }
      );


      $(".button").click(function(){
        var newIndex = $(this).index();        // récupère l'index cliqué

        checkAndAnimateItem(newIndex); 
      });

    };
  
    // test de la validité de l'index
    var validIndex = function(indexToCheck){
      return (indexToCheck >= 0) && (indexToCheck < totalMainMenuItems)
    };

    // permet d'animer l'affichage de l'image et de sa description quand on clique dessus.
    var animateItem = function($item, toOpen, speed){

          var $colorImage = $item.find(".color");                           // retourne l'item qui contient la classe ".color"
          var colorImageParam = toOpen ? {left:"0px"} : {left:"140px"};     // true : .color.left = 0px / false : .color.left = 140px (affiche en couleur ou N&B)
          var itemParam = toOpen ? {width:"420px"}: {width:"140px"};        // true : item.width = 420px / false : item.width = 140px (affiche la description ou pas)
          $colorImage.animate(colorImageParam,speed); 
          $item.animate(itemParam,speed);             
    };


    var checkAndAnimateItem = function(indextoCheck){

      if(openedIndex === indextoCheck)
      {
        animateItem($mainMenuItems.eq(indextoCheck),false,250);
        openedIndex = -1;

      } else {            
        if(validIndex(indextoCheck))
        {
          // On ferme d'abord l'ancien index
          animateItem($mainMenuItems.eq(openedIndex),false,250);
          openedIndex = indextoCheck;
          // on ouvre le nouvel index
          animateItem($mainMenuItems.eq(openedIndex),true,250);
        }
      }
    };

    init();

});