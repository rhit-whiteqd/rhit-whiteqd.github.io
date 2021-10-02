var globe = globe || {};

globe.main = function() {
    console.log("Ready")

    const buttons = document.querySelectorAll("button")
	
	for (const button of buttons){
		button.onclick = (event) =>{
			const dataId = button.dataset.id;
            document.getElementById(dataId).scrollIntoView();
		};
	};

}

globe.main();