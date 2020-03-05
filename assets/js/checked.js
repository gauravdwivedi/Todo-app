//to change the color of the category when window loads
// Divided all category with different colors and backgroundColors.display-task
//Which is easy to identify Task category

window.addEventListener('load', function () {
   
    var p = document.getElementsByClassName('category');
    console.log(p.length);


    for (let i = 0; i<p.length; i++) {
       val = document.getElementsByClassName('available_category_p');
        
       // console.log(val[i].innerHTML.toLocaleLowerCase());
        if (val[i].innerHTML.toLocaleLowerCase() == 'personal') {
           // this.console.log(p[i]);  
            p[i].style.backgroundColor = "darkcyan"; 
            this.document.getElementsByClassName('display-task')[i].style.backgroundColor = 'steelblue';
            
            
        }
        else if (val[i].innerHTML.toLocaleLowerCase() == 'work') {
            //this.console.log(p[i]);
            p[i].style.backgroundColor = "mediumseagreen"; 
            
            this.document.getElementsByClassName('display-task')[i].style.backgroundColor = 'tomato';
            
            
        } else if (val[i].innerHTML.toLocaleLowerCase() == 'school') {
            this.console.log(p[i]);
            p[i].style.backgroundColor = "darkorange"; 
            
            this.document.getElementsByClassName('display-task')[i].style.backgroundColor = 'palevioletred';
            
        } else if (val[i].innerHTML.toLocaleLowerCase() == 'others') {
            this.console.log(p[i]);
            p[i].style.backgroundColor = "tomato"; 
            
            this.document.getElementsByClassName('display-task')[i].style.backgroundColor = 'sandybrown';
            
        } else if (val[i].innerHTML.toLocaleLowerCase() == 'cleaning') {
            this.console.log(p[i]);
            p[i].style.backgroundColor = "dodgerblue"; 
            
            this.document.getElementsByClassName('display-task')[i].style.backgroundColor = 'yellowgreen';
            
            
        }
    }

});