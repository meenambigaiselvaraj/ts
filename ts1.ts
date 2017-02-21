class form{
  public name : HTMLInputElement;
  public regno : HTMLInputElement;
  public dept : HTMLInputElement;
  public button : HTMLElement;

     constructor(){
      this.name = <HTMLInputElement> document.getElementById('name');
      this.regno = <HTMLInputElement> document.getElementById('regno');
      this.dept = <HTMLInputElement> document.getElementById('dept');
      this.button = document.getElementById('sub');
      this.button.onclick = (e) =>{
        this.init();
      }
     }

     init(){
          console.log("Welcome ",this.name.value);
     }
    
}

var foo = new form();



