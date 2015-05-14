(function(){

	$dojo = function $dojo(id){
		// console.log(document.getElementById(id));
		var dojo={
			id:id,
			el:document.getElementById(id),
			click:function(callback){
					this.el.addEventListener("click",callback);
				},
			hover:function(callback1,callback2){
					this.el.addEventListener("mouseover",callback1);
					this.el.addEventListener("mouseout",callback2);
				},
			gethtml:function(){
						return this.el;
					},
			insert:function(content){
						this.el.innerHTML=content;
					},
			css:function(property,value){
				this.el.style[property]=value;
			}
		}

		return dojo;
	}
		return $dojo;
})();
