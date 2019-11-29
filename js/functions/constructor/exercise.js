function cart(name,pricr){
    this.items=[]
    cart.prototype.add = function(item){
        this.items.push(item)
        console.log(this.items)
    }
    cart.prototype.total_price = function(discount){
        console.log("total ful",this.items)
    }
    cart.prototype.removeItem = function(index){

    }
    cart.prototype.listElem = function(){}
    }


let mycart=new cart();
mycart.add({name:'Mac',price:100,quantity:1});
mycart.total_price()
