
  heal =  document.getElementsByClassName('hud-shop-menu-item')[9];
	petHeal = document.getElementsByClassName('hud-shop-menu-item')[10];
	useHeal = document.getElementsByClassName('hud-toolbar-item')[4];
	usePetHeal = document.getElementsByClassName('hud-toolbar-item')[5];
	healthBar = document.getElementsByClassName('hud-health-bar')[0];
	up = new Event('mouseup');

	HEAL = function(){
		useHeal.dispatchEvent(up);
		usePetHeal.dispatchEvent(up);
		heal.dispatchEvent(up);
		petHeal.dispatchEvent(up);
		heal.attributes.class.value = 'hud-shop-menu-item';
		petHeal.attributes.class.value = 'hud-shop-menu-item';
	};

	script = function(e){
		if(e.keyCode == 82){
			HEAL();
		}
	};
	document.addEventListener('keydown',function(e){
		script(e);
	});
	observer = new MutationObserver(function(mutations) {
	    mutations.forEach(function(mutationRecord) {
	        if(parseInt(mutations[0].target.style.width) < 60){
	        	HEAL();
	        }
	    });
	});
	observer.observe(healthBar, { attributes : true, attributeFilter : ['style'] });
scr.txt
Открыть в приложении "Google Документы"
scr.txt. На экране.
