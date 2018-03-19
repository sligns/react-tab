import React, { Component,createElement } from 'react';
import './App.css';

class App extends Component {
constructor(){
	super();
	this.state={
		index:0,
		w:0,
		time:null,
		timer2:null,
		indexs:4
	}

}
click(i){
	this.setState({
		index:i
	})
}
componentDidMount(){
	clearInterval(this.state.time);
	clearInterval(this.state.timer2);
	this.state.time=setTimeout(()=>{
					this.setState({
		w:100
	})
	},3000)
	
this.state.timer2=setInterval(()=>{
					this.setState({
		w:0,
		index:this.state.index+1
	})
},2000)

}
	mouseover(){
		clearInterval(this.state.time);
		
					this.setState({
		w:0
	})

	}
	
	mouseout(){
		clearInterval(this.state.time);
				this.setState({
		w:100
	})

	}
	leftL(){
						this.setState({
		index:this.state.indexs--
	})
	}
	rightR(){
								this.setState({
		index:this.state.index+1
	})
	}


  render() {
  	var Pic =['./img/1.jpg','./img/2.jpg','./img/3.jpg','./img/4.jpg'];
  	var timer=2000;
  	var oLi=[];
  	var aLi=[];
  	for(var i=0;i<Pic.length;i++){
  		oLi.push(<li key={i}><img src={Pic[i]}/></li>)
  			aLi.push(<li key={i} className={i==this.state.index?'active':''} onClick={this.click.bind(this,i)}></li>)

  	}
    return (
      <div className="App">
<div className='tab' onMouseOver={this.mouseover.bind(this)} onMouseOut={this.mouseout.bind(this)}>
<div className='left' onClick={this.leftL.bind(this)}></div>
<div className='right' onClick={this.rightR.bind(this)}></div>
<div className='line' style={{transition:timer/1000+'s',width:this.state.w+'%'}}></div>
			<ul style={{width:Pic.length*960,left:this.state.index*-960}}>
			{oLi}
			</ul>
			<ol>{aLi}</ol>
			</div>
      
      </div>
    );
  }
}

export default App;
