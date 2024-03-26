const press = document.getElementById('output')

window.addEventListener('keypress',(e)=>{
    press.innerHTML = `<div class='div'>
        <table>
    <tr>
      <th>key</th>
      <th>key code</th>
      <th>code</th>
    </tr>
    <tr>
      <td>${e.key}</td>
      <td>${e.keyCode}</td>
      <td>${e.code}</td>
    </tr>
   
  </table>
        </div>
   `
})