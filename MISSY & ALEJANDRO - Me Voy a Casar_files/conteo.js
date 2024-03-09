update: function() {
  var now = new Date();
  var remaining = this.finalDate.getTime() - now.getTime();
  if(remaining <= 0) {
    // Countdown has completed
    // Instead of stopping the countdown, display the event date
    var eventDateStr = this.finalDate.toDateString(); // Format the date as needed
    this.$el.text("Event Date: " + eventDateStr);
    this.stop(); // Stop the countdown update loop
  } else {
    // Update countdown as usual
  }
}
