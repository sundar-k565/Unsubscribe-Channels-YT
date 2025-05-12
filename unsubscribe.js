let unsubscribedCount = 0;

function myTimer() {
  const channelRenderers = document.querySelectorAll("ytd-channel-renderer:not(.ytd-item-section-renderer)");
  
  if (channelRenderers.length === 0) {
    console.log("No more channels to unsubscribe from.");
    return;
  }

  const subscribeButton = document.querySelector('.ytd-subscribe-button-renderer');
  if (!subscribeButton) {
    console.warn("Subscribe button not found.");
    return;
  }

  subscribeButton.click();

  setTimeout(() => {
    const confirmButton = document.getElementById("confirm-button");
    if (confirmButton) {
      confirmButton.click();
      unsubscribedCount++;
      console.log(`${unsubscribedCount} unsubscribed`);
      console.log(`${channelRenderers.length - 1} remaining`);
    } else {
      console.warn("Confirm button not found.");
    }

    setTimeout(() => {
      const channelElement = document.querySelector("ytd-channel-renderer");
      if (channelElement && channelElement.parentNode) {
        channelElement.parentNode.removeChild(channelElement);
      }
      myTimer();
    }, 250);

  }, 250);
}

myTimer();
