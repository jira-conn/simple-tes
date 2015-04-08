CustomClass.MetaClass = function(){
	
	this.doRandomThing = function(){
		return Math.random();
	};
	this.doThisThing = function(){
		return 'dont know anything.';
	};
	
};

var myClass = new CustomClass.MetaClass();
myClass.doThisThing();