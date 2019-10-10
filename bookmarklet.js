javascript: (function() {
  var grid_displayer_holder = document.querySelector('#grid-displayer');
  if(grid_displayer_holder !== null){
    grid_displayer_holder.remove();
  }else{
    var grid_displayer = '<div id="grid-displayer" style="z-index: 999;position: fixed;top: 0;left: 0;width: 100%;height: 100%;pointer-events:none;"><div class="gd-container container" style="height: 100%;"><div class="gd-row row" style="border-right: 0px none;height:100%;">';
    for( var i = 0; i < 12; i++){
        grid_displayer += '<div class="gd-column col-1" style="outline: 1px solid aqua; opacity: 0.3;" ><div style="background-color: aqua;opacity: 0.3;height:100%;" ></div></div>';
    }
    grid_displayer +='</div></div></div>';
    document.body.innerHTML += grid_displayer;
  }
})();
