
largura_tela = 500
altura_tela = 500
var g = 9.8
var t = 0;
var dt =  0.1;



yp = largura_tela/2

class pendulo {
  
    constructor(l,theta0,w) {
      this.l = l;
      this.theta0 = theta0;
      this.theta = theta0;
      this.w = w;
      
    
      
      
  }
  
    iterar(t){
      this.w = this.w -(g/this.l)*sin(this.theta)*dt;
      this.theta = this.theta+this.w*dt;
    
      return t+dt;
      
    }
  
    desenhar(){
      
      line(largura_tela/2, 0 ,largura_tela/2+this.l*sin(this.theta),this.l*cos(this.theta))
      fill(10,22,200)
      circle(largura_tela/2+this.l*sin(this.theta),this.l*cos(this.theta),this.l/10)
      noFill()
      var v_theta = [Math.PI/2-this.theta,Math.PI/2]
      var theta_min;
      var theta_max;
      var desvio;
      if(this.theta>0){
        theta_min = v_theta[0] 
        theta_max = v_theta[1]
        desvio = 25
      }else{
        theta_min = v_theta[1]
        theta_max = v_theta[0]
        desvio = -25
      }
      
     arc(largura_tela/2,0,70,70,theta_min,theta_max)
     
        
      
      fill(2,100,200)
      text((this.theta*(360/(2*Math.PI))).toFixed(0)+"°",largura_tela/2 +desvio+0.1*this.l*sin(0.55*this.theta),0.3*this.l*cos(0.45*this.theta))
    }

}



function setup() {
  createCanvas(largura_tela, altura_tela);
}

var p = new pendulo(200,Math.PI/2,0);


function draw(){
  
  background(220);
  
    
  t = p.iterar(t);
  p.desenhar();
  
  
}