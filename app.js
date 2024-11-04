function updateClock(){
  const date=new Date();
  let hours=date.getHours();
  let mer= hours>=12?"PM":"AM";
  hours= hours%12 || 12;
  hours=hours.toString().padStart(2,0);
  const minutes=date.getMinutes().toString().padStart(2,0);
  const seconds=date.getSeconds().toString().padStart(2,0);
  const timestring=`${hours}:${minutes}:${seconds}:${mer}`;
  document.getElementById("clock").textContent=timestring;
}
updateClock();
setInterval(updateClock,1000);