Ans1)class Movie{
          constructor(title,studio,rating){
           this.title=title,
           this.studio=studio
           if(rating==null){
            this.rating="PG"
}          else{
            this.rating = rating
}
}
         getPG(arr){
             console.log("getPG method is called",arr)
                    
          let PGResult=[];
          for(var i=0;i<arr.length;i++){
             if(arr[i].rating=="PG"){
                  PGResult.push(arr[i])
}
}
          console.log(PGResult)
}
}
   let movie1=new Movie("Casino Royale","Eon Productions","PG13")
   let movie2=new Movie("ABC","A Prdouctions","PG14")
   let movie3=new Movie("DEF","D Prdouctions")
   let movie4=new Movie("XYZ","X Productions","PG15");
   let movie5=new Movie("LMN","L Productions")
   let movie6=new Movie("TYU","T Productions")

   var array=[movie1,movie2,movie3,movie4,movie5,movie6] 
}
    let movie1=new Movie("Casino Royale","Eon Productions","PG13")
   console.log(array)
    
   console.log(movie1)
   movie4.getPG(array)

Ans3)class Person{
   constructor(name,age,location,course){
       console.log(`My name is ${name}, age is${age}.I reside at ${location} and am learming ${course}`)
       this.name=name,
       this.age=age,
       this.location=location
       this.course=course
      }
      getPersonalDetails(){
            console.log(`My name is ${this.name},age is ${this.age}. I reside at ${this.location} and am learning $(this.course}`)
}
}
   var newUser=new Person("Hemanth",26,"Vadodra","Machine learning")
   newUser.getPersonDetails()

Ans4) class UberPrice{
         constructor(name,Price,location1,location2){
          console.log(`Uber driver ${name}charged a ${price} from {location 1} to {location 2} for a distance of 15km`)
           this.name=name,
           this.price=price,
           this.location1=location1,
           this.location2=location2
}
         getUberPrice(){
               console.log(Uber driver ${this.name} charged ${this.price} from ${this.location1} to ${this.location2} for a distance of 15km`)
}
    var newUser=new UberPrice("santosh",210,Pandit nagar,railway station)

    newUser.getUberPrice()      