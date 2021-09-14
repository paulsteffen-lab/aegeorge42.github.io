//import { defaultInput } from "../Model/net.js";
import {Button} from "./Button.js"
import {layout} from "./layout.js"
import {SlideHome,
    SlideInstruct1,
    SlideInstruct2,
    SlideIntro1,
    SlideIntro1a,
    SlideIntro1b,
    SlideIntro1c,
    SlideIntro2,
    SlideIntro3,
    SlideIntro3a,
    SlideIntro4,
    SlideIntro4a,
    SlideNeuronA,
    SlideNeuronA2,
    SlideNeuron1,
    SlideNeuron1a,
    SlideNeuron1b,
    SlideNeuron1c,
    SlideNeuron2,
    SlideNeuron2b,
    SlideNeuron2b2,
    SlideNeuron2c,
    SlideNeuron2d,
    SlideNeuron2d2,
    SlideNeuron2e,
    SlideNet1,
    SlideNet1b,
    SlideNet1b2,
    SlideNet1c,
    SlideNet1d,
    SlideNet1d2,
    SlideNet1d3,
    SlideNet1d4,
    SlideNet1e,
    SlideBack1,
    SlideBack2,
    SlideBack3,
    SlideNet1f,
    SlideBackA,
    SlideNet2,
    SlideBackB,
    SlideBackC,
    SlideBackD,
    SlideBackE,
SlideBackF,
SlideBackCalc0,
SlideBackCalc1,
SlideBackCalc2,
SlideBackCalc3,
SlideSandbox} from "./allSlides.js"



export class View{
    slideList;
    currentSlide;

    constructor(){
        
        var vst=this;
        const app = new PIXI.Application({
          autoResize: true,
          width: window.innerWidth,
          height: window.innerHeight,
          backgroundColor: 0xe7e9ff
        });

        this.app=app;

        window.addEventListener('resize', resize); 
/*
        this.w= window.innerWidth;  
        this.h=window.innerHeight;

        var initw = window.innerWidth;  

        var w=window.innerWidth;    
        var h=window.innerHeight;

        var bufferx=0;
        this.buffery=0;
        var buffery=0;
        var buffery2=0;

        var b =0;        
        this.h2=window.innerHeight;
        this.w2=window.innerWidth;
        var win=this;

        */

        this.startwidth = window.innerWidth;
        this.startheight = window.innerHeight;
        this.startheight_nochange = window.innerHeight;
        this.startwidth_nochange = window.innerWidth;



        var win = this;

        function resize(){

            var resize_wid = (window.innerWidth-win.startwidth)/4;
            var resize_height = (window.innerHeight-win.startheight)/6;

            app.renderer.resize(window.innerWidth, window.innerHeight);

            app.stage.getChildByName("button_nextslide").x=window.innerWidth/2 +100;
            app.stage.getChildByName("button_nextslide").y=window.innerHeight-(75/2);

            app.stage.getChildByName("button_prevslide").x=window.innerWidth/2 -100,
            app.stage.getChildByName("button_prevslide").y=window.innerHeight-(75/2);

            if(vst.currentSlide==0){
                app.stage.getChildAt(0).getChildByName("opener").x=window.innerWidth/2;
                app.stage.getChildAt(0).getChildByName("opener").y=((window.innerHeight)/3)+50;

                app.stage.getChildByName("button_start").x=window.innerWidth/2;
                app.stage.getChildByName("button_start").y=((window.innerHeight)/3) +350;

            } else {

            /**
             * stuff w scaled resize
             */
            app.stage.getChildAt(0).getChildAt(0).position.set(resize_wid,resize_height) //weights
            app.stage.getChildAt(0).getChildAt(1).position.set(resize_wid,resize_height) //input
            app.stage.getChildAt(0).getChildAt(2).position.set(resize_wid,resize_height) //text
            app.stage.getChildAt(0).getChildAt(3).position.set(resize_wid,resize_height) //labels
            app.stage.getChildAt(0).getChildAt(4).position.set(resize_wid,resize_height) //neurons
            //app.stage.getChildAt(0).getChildAt(5).position.set(resize_wid,resize_height) //cost label
            

            app.stage.getChildAt(0).getChildAt(7).position.set(0,0);
            ///console.log(app.stage.getChildAt(0).getChildAt(5))

            /**
             * stuff w locked postion 
             */
            app.stage.getChildByName("button_nextslide").x=window.innerWidth/2 +100;
            app.stage.getChildByName("button_nextslide").y=window.innerHeight-(75/2);

            app.stage.getChildByName("button_prevslide").x=window.innerWidth/2 -100,
            app.stage.getChildByName("button_prevslide").y=window.innerHeight-(75/2);

            app.stage.getChildAt(0).getChildByName("footer").y=window.innerHeight-win.startheight_nochange;

            //graph
            app.stage.getChildAt(0).getChildAt(6).y=window.innerHeight-win.startheight_nochange;
            app.stage.getChildAt(0).getChildAt(6).x=window.innerWidth-win.startwidth_nochange;

            //cost
            app.stage.getChildAt(0).getChildAt(5).y=window.innerHeight-win.startheight_nochange;
            app.stage.getChildAt(0).getChildAt(5).x=window.innerWidth-win.startwidth_nochange;

            if(app.stage.getChildAt(0).getChildAt(9).getChildByName("buttonNeuronAddContainer") !== null){
                app.stage.getChildAt(0).getChildAt(9).getChildByName("buttonNeuronAddContainer").position.set(resize_wid,resize_height) //cost label
                app.stage.getChildAt(0).getChildAt(9).getChildByName("buttonNeuronRemContainer").position.set(resize_wid,resize_height) //cost label
            }

            if(app.stage.getChildAt(0).getChildAt(9).getChildByName("actfnsbox") !== null){
                app.stage.getChildAt(0).getChildAt(9).getChildByName("actfnsbox").y=window.innerHeight-win.startheight_nochange +(layout.BOTTOMBUFFER-100);
            }

            if(app.stage.getChildAt(0).getChildAt(9).getChildByName("ratebox") !== null){
                app.stage.getChildAt(0).getChildAt(9).getChildByName("ratebox").y=window.innerHeight-win.startheight_nochange +(layout.BOTTOMBUFFER-220);
            }
    
            }
        }

        document.body.appendChild(this.app.view);

        //add premade slides
        this.slideList = [];
        this.slideList.push(SlideHome,SlideInstruct1, SlideInstruct2, //1
                            SlideIntro1,SlideIntro1a,SlideIntro1b,SlideIntro1c,SlideIntro2,SlideIntro3, SlideIntro4, SlideIntro3a, SlideIntro4a, //9
                            SlideNeuronA, SlideNeuronA2, SlideNeuron1,SlideNeuron1a,SlideNeuron1b,SlideNeuron2,SlideNeuron2b,SlideNeuron2b2,SlideNeuron2c,SlideNeuron2d,SlideNeuron2d2,SlideNeuron2e, //16
                            SlideNet1, SlideNet1b, SlideNet1b2,SlideNet1c, SlideNet1d,SlideNet1d2,SlideNet1d3, SlideNet1d4,SlideNet1e,
                            /*SlideBack1,*/SlideBack2,SlideBack3,SlideNet1f,SlideBackA,SlideNet2,SlideBackB, SlideBackC, SlideBackD,SlideBackE, SlideBackF,
                            
                            SlideBackCalc0,SlideBackCalc1,SlideBackCalc2,SlideBackCalc3,
                            SlideSandbox);//SlideNet3);//SlideSandbox);// SlideSandbox);

        /*TO DELETE*/
        for(var i=0; i<this.slideList.length;i++){
            var currText=new PIXI.Text(i);
            currText.x=80;
                currText.y=25;
            this.slideList[i].slideContainer.addChild(currText);
            }
        

        const opener = new PIXI.Sprite(PIXI.Texture.from('images/opener.png'));
        opener.name="opener";
        opener.anchor.set(0.5);
        opener.x=((window.innerWidth)/2);
        opener.y=((window.innerHeight)/3)+50;
        this.slideList[0].slideContainer.addChild(opener);
















        this.currentSlide=43;


















        this.drawSlide_init();
        this.createButtons();
        this.app.stage.addChild(this.slideList[this.currentSlide].textbuttonContainer);
        this.caveats();
    }

    // when window is resized, gotta resize all the other slides
    // but only some stuff
    resize2(){
        this.startheight=window.innerHeight;
        this.startwidth=window.innerWidth;

        this.app.stage.getChildAt(0).getChildAt(6).y=window.innerHeight-this.startheight_nochange;
        this.app.stage.getChildAt(0).getChildAt(6).x=window.innerWidth-this.startwidth_nochange;
        this.app.stage.getChildAt(0).getChildAt(5).y=window.innerHeight-this.startheight_nochange;
        this.app.stage.getChildAt(0).getChildAt(5).x=window.innerWidth-this.startwidth_nochange;
        
        if(this.app.stage.getChildAt(0).getChildAt(9).getChildByName("actfnsbox") !== null){
            this.app.stage.getChildAt(0).getChildAt(9).getChildByName("actfnsbox").y=window.innerHeight-this.startheight_nochange +(layout.BOTTOMBUFFER-100);
        }
       
        if(this.currentSlide==0){
        this.app.stage.getChildAt(0).getChildByName("opener").x=window.innerWidth/2;
                this.app.stage.getChildAt(0).getChildByName("opener").y=((window.innerHeight)/3)+50;

                this.app.stage.getChildByName("button_start").x=window.innerWidth/2;
                this.app.stage.getChildByName("button_start").y=((window.innerHeight)/3) +350;
        }
    }

    // handle 1st and last slide diff formats
    caveats(){
        if(this.slideList[this.currentSlide].sandbox){
            layout.NEURON_LEFTLIM=SlideSandbox.buttonContainer.getChildByName("stylebox").x +450;
        }
        else if(this.slideList[this.currentSlide].leftnet){
            layout.NEURON_UPPERLIM=100;
            layout.NEURON_LEFTLIM=0;
        } else {
            layout.NEURON_LEFTLIM=layout.NEURON_LEFTLIM_INIT;
            layout.NEURON_UPPERLIM=layout.NEURON_UPPERLIM_INIT;


        }

        if (this.currentSlide==0){
            for(var i = 1; i<this.app.stage.children.length-1; i++){
                this.app.stage.getChildAt(i).visible=false;
            }      

            this.app.stage.getChildAt(0).getChildByName("footer").visible=false;
            this.app.stage.getChildAt(0).getChildByName("header").visible=false;
            this.app.stage.getChildByName("button_start").visible=true;

       /* } else if(this.currentSlide==21){

            this.slideList[this.currentSlide].slideNet.addLayer();
            this.slideList[this.currentSlide].slideNet.update();

            this.slideList[this.currentSlide].draw_init(this.slideList[this.currentSlide].slideNet)

*/
        } else {
            for(var i = 1; i<this.app.stage.children.length-1; i++){
                this.app.stage.getChildAt(i).visible=true;
            }

            this.app.stage.getChildAt(0).getChildByName("footer").visible=true;
            this.app.stage.getChildAt(0).getChildByName("header").visible=true;
            this.app.stage.getChildByName("button_start").visible=false;
        }
    }


    setVis(idx,bool){
        if(bool==false){this.app.stage.getChildAt(idx).visible=false;}
        else if(bool==true){this.app.stage.getChildAt(idx).visible=true;}
    }

    drawSlide_init(){
        
        this.app.stage.addChild(this.slideList[this.currentSlide].slideContainer);

    }

    drawSlide_init_test(){
        this.app.stage.addChild(this.slideList[this.currentSlide].slideContainer);
    };

    drawSlide(){
        this.app.stage.removeChildAt(0);
        this.app.stage.addChildAt(this.slideList[this.currentSlide].slideContainer,0);
        this.app.stage.addChild(this.slideList[this.currentSlide].textbuttonContainer);
        this.caveats();
        this.resize2();
    }

    createButtons(){
        var vst=this;

        var startx=window.innerWidth/2;
        var starty=((window.innerHeight)/3) +350;

        var button_nextslide = new Button("button_nextslide",PIXI.Texture.from('images/buttons/next.png'),layout.NEXTSLIDE_X,layout.NEXTSLIDE_Y,true);
        var button_prevslide = new Button("button_prevslide",PIXI.Texture.from('images/buttons/back.png'),layout.PREVSLIDE_X,layout.NEXTSLIDE_Y,true);
        var button_start = new Button("button_start",PIXI.Texture.from('images/buttons/start.png'),startx,starty,true,0xFFFFFF);
        this.app.stage.addChild(button_nextslide,button_prevslide,button_start);

        this.app.stage.getChildByName("button_start").on('click', function(e){ 
            vst.app.stage.removeChild(vst.slideList[vst.currentSlide].textbuttonContainer);

            if(vst.currentSlide+1<vst.slideList.length){

                vst.currentSlide=vst.currentSlide+1;
                vst.drawSlide();
            }
        });

        this.app.stage.getChildByName("button_nextslide").on('click', function(e){ 
            vst.app.stage.removeChild(vst.slideList[vst.currentSlide].textbuttonContainer);

            if(vst.currentSlide+1<vst.slideList.length){
                vst.currentSlide=vst.currentSlide+1;
                vst.drawSlide();
            }

            if(vst.slideList[vst.currentSlide].slideNet !== undefined && vst.slideList[vst.currentSlide].largenet==1){//&& vst.currentSlide == 9){
            //    console.log(vst.slideList[vst.currentSlide].slideNet)
                vst.slideList[vst.currentSlide].slideNet.update();
                vst.slideList[vst.currentSlide].draw_update_large(vst.slideList[vst.currentSlide].slideNet)
                vst.drawSlide();
            }

            if(vst.slideList[vst.currentSlide].slideNet !== undefined && vst.slideList[vst.currentSlide].largenet!=1){//&& vst.currentSlide == 9){
            //    console.log(vst.slideList[vst.currentSlide].slideNet)
                vst.slideList[vst.currentSlide].slideNet.update();
                vst.slideList[vst.currentSlide].draw_update(vst.slideList[vst.currentSlide].slideNet)
                vst.drawSlide();
            }
            
        });

        this.app.stage.getChildByName("button_prevslide").on('click', function(e){ 
            vst.app.stage.removeChild(vst.slideList[vst.currentSlide].textbuttonContainer);

            if(vst.currentSlide>0){

                vst.currentSlide=vst.currentSlide-1;
                vst.drawSlide();
            }
        });

        //GO TO BUTTONS
        var homebutton = new Button("homebutton",PIXI.Texture.from('images/home.png'),30,layout.HEADER_HEIGHT/2,false)
        this.app.stage.addChild(homebutton);
        this.app.stage.getChildByName("homebutton").on('click', function(e){ 
            vst.app.stage.removeChild(vst.slideList[vst.currentSlide].textbuttonContainer);

                vst.currentSlide=0;
                vst.drawSlide();
                
        });

        var gotointro = new Button("gotointro",PIXI.Texture.from('images/buttons/gotointro.png'),250,layout.HEADER_HEIGHT/2,false)
        this.app.stage.addChild(gotointro);
        this.app.stage.getChildByName("gotointro").on('click', function(e){ 
            
            if (vst.currentSlide!=2){
                vst.app.stage.removeChild(vst.slideList[vst.currentSlide].textbuttonContainer);

                vst.currentSlide=2;
                vst.drawSlide();
            }
        });

        var gotoneuron = new Button("gotoneuron",PIXI.Texture.from('images/buttons/gotoneuron.png'),375,layout.HEADER_HEIGHT/2,false)
        this.app.stage.addChild(gotoneuron);
        this.app.stage.getChildByName("gotoneuron").on('click', function(e){ 
            
            if (vst.currentSlide!=13){
                vst.app.stage.removeChild(vst.slideList[vst.currentSlide].textbuttonContainer);

                vst.currentSlide=13;
                vst.drawSlide();
            }
        });

        var gotonet = new Button("gotonet",PIXI.Texture.from('images/buttons/gotoneuron.png'),500,layout.HEADER_HEIGHT/2,false)
        this.app.stage.addChild(gotonet);
        this.app.stage.getChildByName("gotonet").on('click', function(e){ 
            
            if (vst.currentSlide!=23){
                vst.app.stage.removeChild(vst.slideList[vst.currentSlide].textbuttonContainer);

                vst.currentSlide=23;
                vst.drawSlide();
            }
        });
        


    }
}
