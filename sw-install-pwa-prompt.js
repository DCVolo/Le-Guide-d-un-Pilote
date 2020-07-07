let deferredPrompt; // Allows to show the install prompt
const installButton = document.getElementsByClassName("install_button")[0];

window.addEventListener("beforeinstallprompt", e => {
  console.log("beforeinstallprompt fired");
  // Prevent Chrome 76 and earlier from automatically showing a prompt
  e.preventDefault();
  // Stash the event so it can be triggered later.
  deferredPrompt = e;
  // Show the install button
  installButton.hidden = false;
  installButton.addEventListener("click", installApp);
});

windows.showInstallPrompt = function (){
	// Show the prompt
  	deferredPrompt.prompt();
  	installButton.disabled = true;

  	// Wait for the user to respond to the prompt
  	deferredPrompt.userChoice.then(choiceResult => {
    	if (choiceResult.outcome === "accepted") {
      		console.log("PWA setup accepted");
      		installButton.hidden = true;
    	} else {
      		console.log("PWA setup rejected");
    	}
    	installButton.disabled = false;
    	deferredPrompt = null;
  	});
}