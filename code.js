onEvent("firstScreen", "click", function( ) {
	console.log("infoScreen clicked!");
});
onEvent("question", "click", function( ) {
  setScreen("firstScreen");
});
onEvent("Show", "click", function( ) {
  setScreen("infoScreen");
});
onEvent("question", "click", function( ) {
  setScreen("firstScreen");
});
onEvent("Show2", "click", function( ) {
  readRecords("BusinessGrants", {}, function(records) {
    for (var i =0; i < records.length; i++) {
      console.log(records[i].id + ': ' + (records[i]).GrantmakerName
            );
    }
    var recordIndex = randomNumber(0, records.length-1);
    setProperty("record", "text", recordIndex);
    setProperty("GrantmakerName", "text", (records[recordIndex]).GrantmakerName);
    setProperty("RecipientName", "text", (records[recordIndex]).RecipientName);
    setProperty("RecipientCity", "text", records[recordIndex].RecipientCity);
    setProperty("RecipientState", "text", records[recordIndex].State);
    setProperty("State", "text", records[recordIndex].CoStateuntry);
    setProperty("PrimarySubject", "text", (records[recordIndex]).PrimarySubject);
    setProperty("YearAuthorized", "text", records[recordIndex].YearAuthorized);
    setProperty("GrantAmount", "text", (records[recordIndex]).GrantAmount);
    setProperty("SupportStrategies", "text", (records[recordIndex]).SupportStrategies);
    setProperty("Description", "text", records[recordIndex].Description);
  });
});
