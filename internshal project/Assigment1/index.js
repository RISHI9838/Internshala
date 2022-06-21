function appendRowTop(){
let cell,firstRow,row;
let table=document.getElementById("tb1");
  firstRow=table.rows[0];
  row=table.insertRow(1);
  row.className="tr";
  cell=row.insertCell(-1);
  cell.innerHTML="1";
  for (let i=1;i<firstRow.cells.length;i++){
    cell=row.insertCell(-1)
    switch (i){
        case 1:
          cell.innerHTML="Raghav";
          break;
        case 2:
          cell.innerHTML="Singh";
          break;
        case 3:
          cell.innerHTML="Lucknow";
          break;  
        case 4:
          cell.innerHTML="India";
          break;        
      }
      switch (i){
        case 1:
          cell.innerHTML="Raman";
          break;
        case 2:
          cell.innerHTML="Singhnia";
          break;
        case 3:
          cell.innerHTML="Indore";
          break;  
        case 4:
          cell.innerHTML="India";
          break;        
      }
  } 
  for (let i=2;i<table.rows.length;i++) {
    table.rows[i].cells[0].innerHTML=i
  }
}
  

function appendRow(){
    let cell,firstRow,row;
  let table=document.getElementById("tb1");
  firstRow=table.rows[0];
  row=table.insertRow(-1);
  row.className="tr";
  cell=row.insertCell(-1);
  cell.innerHTML=(table.rows.length-1);
  for (let i=1;i<firstRow.cells.length;i++){
    cell=row.insertCell(-1)
    switch (i){
      case 1:
        cell.innerHTML="Rahul";
        break;
      case 2:
        cell.innerHTML="Singh";
        break;
      case 3:
        cell.innerHTML="Mathura";
        break;  
      case 4:
        cell.innerHTML="India";
        break;        
    }
    switch (i){
      case 1:
        cell.innerHTML="Rahul";
        break;
      case 2:
        cell.innerHTML="Singh";
        break;
      case 3:
        cell.innerHTML="Mathura";
        break;  
      case 4:
        cell.innerHTML="India";
        break;        
    }
    }
}
