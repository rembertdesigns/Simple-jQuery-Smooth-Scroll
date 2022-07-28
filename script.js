let offset = $("header").height();
        
  $(document).on("click", "a[href*=#]:not([href=#])", function(event){
    let hash = this.hash;
    let $target = $(hash);
    
     if($target.length){
      $("html,body").stop().animate({
        scrollTop: $target.offset().top - offset
      }, 1000, function(){
        if(history.pushState) {
          history.pushState(null, null, hash);
        }
      });
                
      event.preventDefault();
  }
});